import ApexCharts from 'apexcharts'
import { useEffect } from 'react';


  export default function Histogram() {

    // Executer le code javascript au premier chargement de la page (tableau de dependance vide)
    useEffect(() => {
      var options = {
        chart: {
          type: 'bar'
        },
        series: [{
          name: 'sales',
          data: [30,40,45,50,49,60,70,91,125]
        }],
        xaxis: {
          categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
        },
        title: {
          text: 'World population',
          floating: true,
          align: 'center',
          style: {
            color: '#444'
          }
        }
      }
      
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      
      chart.render();
    },[])
    

    return (
        <div id='chart'>

        </div>
      
    );
  }