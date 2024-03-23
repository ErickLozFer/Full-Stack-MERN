import mongoose from "mongoose";

const PetsSchema = new mongoose.Schema(
    {
        petName: {
            type: String,
            minLength: 3,
            required: [true, "Pet name is required"],
            unique: true,
        },
        petType: {
            type: String,
            minLength: 3,
            required: [true, "Pet type is required"],
        },
        petDescription: {
            type: String,
            minLength: 3,
            required: [true, "Pet description is required"],
        },
        petSkills: {
            skillOne: {
                type: String,
                required: false,
            },
            skillTwo: {
                type: String,
                required: false,
            },
            skillThree: {
                type: String,
                required: false,
            },
        },
    },
    { timestamps: true }
);

const Pets = mongoose.model("pets", PetsSchema);

export default Pets;