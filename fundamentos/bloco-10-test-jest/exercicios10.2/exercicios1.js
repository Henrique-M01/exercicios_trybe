const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };

  test('Testa se a callback retorna a palavra maior', (done) => {
    const callback = (word) => {
        expect(word).toBe(word.toUpperCase())
        done()};
    
        uppercase('oi' , callback)

  }); 