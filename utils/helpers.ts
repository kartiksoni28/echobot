export const sendAudioToServer = async (uri: any) => {
  const formData = new FormData() as any;
  formData.append("file", {
    uri,
    name: "recording.m4a",
    type: "audio/wav",
  });

  try {
    const response = await fetch("http://192.168.8.102:8000/audio_to_text", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    console.log(`helpers-18`, response);

    const data = await response.json();
    console.log(`helpers-40`, data?.transcribed_text);
    return data;
  } catch (error) {
    console.error("Error uploading audio: ", error);
  }
};

export const sendImageToServer = async (uri: any) => {
  const formData = new FormData() as any;
  formData.append("file", {
    uri,
    name: "image.jpg",
    type: "image/jpeg",
  });

  try {
    const response = await fetch("http://192.168.8.102:8000/analyse_image", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "application/json , multipart/form-data",
      // },
    });

    console.log(`helpers-18`, response);

    // const data = await response.json();
    // console.log(`helpers-40`, data?.transcribed_text);
    // return data;
  } catch (error) {
    console.error("Error uploading image: ", error);
  }
};
