const Photo = requiere("../models/Photo");

//Subir foto
exports.uploadPhoto = async (req, res) => {
    try {
        const { userId } = req.body;
        const imageUrl = req.file.path;
        const newPhoto = new Photo({ userId, imageUrl });
        await newPhoto.save();

        res.status(201).json({ message: "Foto subida con exito", photo: newPhoto});
    } catch (error) {
        res.status(500).json({ error: "Error al subir la foto" });
    }
};