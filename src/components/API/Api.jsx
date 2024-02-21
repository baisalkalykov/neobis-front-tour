export const sendBookingData = async (bookingData) => {
    try {
      // Вместо этого укажите реальный URL вашего сервера
      const apiUrl = '/api/bookings';
  
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });
  
      if (!response.ok) {
        // Обработка ошибок сети или других ошибок сервера
        throw new Error('Booking failed');
      }
  
      const result = await response.json();
      // Предположим, что ваш сервер возвращает JSON с информацией о бронировании
      return result;
    } catch (error) {
      // Обработка ошибок при отправке запроса
      throw new Error('Booking failed');
    }
  };