module.exports = function () {
  return {
    cvs: [{
      id: '1',
      personalDetails: {
        firstname: "Maciej",
        lastname: "Gumieniak",
        additionDetails: {
          age: 24,
        },
        email: "maciej.gumieniak@onet.pl",
        phone: "1",
      },
      experiences: [
        {
          company: "Comarch",
          position: "Junior Java Developer",
          startDate: "2020-08-04T22:00:00.000Z",
          endDate: "2020-08-06T22:00:00.000Z",
          description: "Nie no tragedia",
        },
        {
          company: "Comarch2",
          position: "Junior Java Developer2",
          startDate: "2020-08-18T22:00:00.000Z",
          endDate: "2020-08-20T22:00:00.000Z",
          description: "Nie no tragedia2",
        },
      ]
    }]
  };
};

// Map<String, Map<String, String>>
