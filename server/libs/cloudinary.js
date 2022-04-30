import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dzn12nix3",
    api_key: "382987258345871",
    api_secret:"xNQ1x01i_gzNH2T6WpWuvw_YBJk"
})

export const uploadImage = async filePath => {

   return await cloudinary.uploader.upload(filePath, {
        folder: 'altas'
    })
}