import Role from "../models/Role";
import User from "../models/User";

import bcrypt from "bcryptjs";

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount();

    // check for existing roles
    if (count > 0) return;

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: "vendedor" }).save(),
      new Role({ name: "caja" }).save(),
      new Role({ name: "admin" }).save(),
    ]);

    console.log("Creacion de Roles:", values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  // check for an existing admin user
  const user = await User.findOne({ email: "admin@admin.com" });
  // get roles _id
  const roles = await Role.find({ name: { $in: ["admin", "caja"] } });

  if (!user) {
    // create a new admin user
    await User.create({
      username: "admin",
      email: "admin@admin.com",
      password: await bcrypt.hash("admin", 10),
      roles: roles.map((role) => role._id),
    });
    console.log('Admin User Created!')
  }
};
