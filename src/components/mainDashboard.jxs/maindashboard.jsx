
import ReactApexChart from 'react-apexcharts';
import React, { useState } from 'react';

function Maindashboard() {
  const [chartState, setChartState] = useState({
    series: [{
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
      }
    }
  });
  const [pieState, setpieState] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    }
  });
  const [barState, setbarState] = useState({
    series: [{
      data: [400, 430, 448, 470, 540, 580, 690]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      annotations: {
        xaxis: [{
          x: 500,
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              color: '#fff',
              background: '#00E396',
            },
            text: 'X annotation',
          }
        }],
        yaxis: [{
          y: 'July',
          y2: 'September',
          label: {
            text: 'Y annotation'
          }
        }]
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      dataLabels: {
        enabled: true
      },
      xaxis: {
        categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      yaxis: {
        reversed: true,
        axisTicks: {
          show: true
        }
      }
    }
  });
  const [cardState, setcardState] = useState({
    series: [75],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
        toolbar: {
          show: true
        }
      },
     
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: '70%',
            background: '#fff',
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: 'front',
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: '#fff',
            strokeWidth: '67%',
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },
          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: '#888',
              fontSize: '17px'
            },
            value: {
              formatter: function(val) {
                return parseInt(val);
              },
              color: '#111',
              fontSize: '36px',
              show: true,
            }
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#ABE5A1'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      labels: ['Percent'],
    }
  });


  return (
    <>
    <div className="p-2 ml-5">
    <h1 className=" sm:flex  flex text-3xl font-serif font-semibold text-slate-950">Attendance</h1>
    <h2 className=" sm:flex text-xl flex  font-serif font-bold text-slate-900 ">
      Dashboard 
      <span>/</span>
       <span className="text-slate-600">Attendance</span>
       </h2>
    </div>
    <div className="flex flex-col items-center w-full  overflow-auto h-full mt-5">
     <div className="flex flex-row  items-center sm:flex-col md:flex-col">
      <div className="p-2 px-10 sm:px-0 md:px-0">
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="line" height={350} width={400}/>
      </div>
     
      </div>
      <div className="p-2 px-10 sm:px-0 md:px-0">
      <div id="chart">
        <ReactApexChart options={barState.options} series={barState.series} type="bar" height={350} width={400}/>
      </div>
      </div>

     </div>
     <div className="flex flex-row items-center sm:flex-col md:flex-col">
      <div className="p-2 px-10 sm:px-0 md:px-0">
      <div id="chart">
        <ReactApexChart options={pieState.options} series={pieState.series} type="pie" height={350} width={400} />
      </div>
      </div >
      <div className="p-2 px-10 sm:px-0 md:px-0 ">
      <div id="chart">
          <ReactApexChart options={cardState.options} series={cardState.series} type="radialBar" height={350} width={400} />
        </div>
      </div>

     </div>
    </div>
    <div>
     
    </div>
    </>
  );
}

export default Maindashboard;
