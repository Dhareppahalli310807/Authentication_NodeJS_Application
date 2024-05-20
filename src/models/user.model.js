import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import passportLocalMongoose from 'passport-local-mongoose';
import findOrCreate from 'mongoose-findorcreate';
//create user schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true, // convert email to lowercase before saving
    validate: {
      validator: function (value) {
        // Simple email validation using regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  },
  password: {
    type: String,
    required: function () {
      // Only require password if sign-up method is email/password
      return this.signUpMethod === 'email';
    },
    minlength: [8, 'Password must be at least 8 characters long'],
    validate: {
      validator: function (value) {
        // Password complexity validation using regex
        return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/.test(
          value
        );
      },
      message: (props) =>
        `Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.`,
    },
  },
  // Other fields
  signUpMethod: {
    type: String,
    enum: ['email', 'google'], // Indicate the sign-up method used
    default: 'email',
  },
  googleId: {
    type: String,
    required: function () {
      // Only require password if sign-up method is email/password
      return this.signUpMethod === 'google';
    },
  },
  username: {
    type: String,
    unique: true,
  },
});

//using mongoose middlewares we can hash password before saving
userSchema.pre('save', async function (next) {
  try {
    // Check if the password field is present and not empty
    if (this.isModified('password') || this.isNew) {
      const salt = await bcrypt.genSalt(10);
      // Hash the password only if it exists
      if (this.password) {
        this.password = await bcrypt.hash(this.password, salt);
      }
    }
    next();
  } catch (error) {
    next(error);
  }
});

// compare password to authenticate user for login
userSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

export default User;
