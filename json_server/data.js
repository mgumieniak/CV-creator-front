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
          startDate: "01.07.2019",
          endDate: "05.07.2019",
          description: "Nie no tragedia",
        },
        {
          company: "Comarch2",
          position: "Junior Java Developer2",
          startDate: "05.07.2019",
          endDate: "",
          description: "Nie no tragedia2",
        },
      ]
    }]
  };
};

// Map<String, Map<String, String>>
