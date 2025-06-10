window.onload = function () {
    const skills = [
      { id: "chartHTML", label: "HTML", value: 90 },
      { id: "chartCSS", label: "CSS", value: 85 },
      { id: "chartJS", label: "JavaScript", value: 75 },
      { id: "chartWord", label: "Word", value: 95 },
      { id: "chartPowerPoint", label: "PowerPoint", value: 90 },
    ];
  
    skills.forEach(skill => {
      const ctx = document.getElementById(skill.id).getContext("2d");
      new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: [skill.label, "مقدار باقی‌مانده"],
          datasets: [{
            data: [skill.value, 100 - skill.value],
            backgroundColor: [
              "crimson",
              "#333"
            ],
            borderWidth: 0
          }]
        },
        options: {
          cutout: "70%",
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  return context.label + ": " + context.parsed + "%";
                }
              }
            },
            legend: { display: false },
            title: {
              display: true,
            //   text: skill.value + "%",
              color: "white",
              font: {
                size: 18,
                weight: 'bold'
              },
              position: "center"
            }
          }
        }
      });
    });
  };
  