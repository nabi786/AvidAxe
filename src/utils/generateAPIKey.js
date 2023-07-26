

// function to generateApiKey api Key
exports.generateApiKey= (length)=>{
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let apiKey = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      apiKey += charset[randomIndex];
    }
  
    return apiKey;
  }
  