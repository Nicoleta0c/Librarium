import { ObjectId } from "mongodb";
import User from "../schemas/users.js"
import mongoose from "mongoose";

class userModel {

    async create(user) {
        return await User.create(user);    
    }

    async update(id, user) {
        return await User.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id)}, user, {new: true});
    }

    async delete(id) {
        return await User.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
    }

    async getAll() {
        return await User.find();
    }

    async getById(id) {
        return await User.findById(id);
    }

    async getOne(filtro) {
        return await User.findOne(filtro);
    }


}

export default new userModel;
