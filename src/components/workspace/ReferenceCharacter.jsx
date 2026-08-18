import { useState } from "react";
import Card from "../common/Card";

function ReferenceCharacter() {
  const [image, setImage] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <Card title="👤 Reference Character">

      <div className="border-2 border-dashed border-zinc-700 rounded-2xl p-10 text-center">

        {image ? (
          <img
            src={image}
            alt="Reference Character"
            className="mx-auto w-48 h-48 object-cover rounded-xl"
          />
        ) : (
          <>
            <p className="text-lg">
              📷 Upload Character Image
            </p>

            <p className="text-zinc-400 mt-2">
              JPG • PNG • WEBP
            </p>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="mt-6"
        />

      </div>

    </Card>
  );
}

export default ReferenceCharacter;