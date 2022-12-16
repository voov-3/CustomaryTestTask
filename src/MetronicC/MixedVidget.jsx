/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useRef} from 'react'
import ApexCharts from 'apexcharts'
// import {useThemeMode} from "../assets/theme-mode/ThemeModeProvider";
// import {getCSSVariableValue} from "../assets/ts/_utils";

function getCSSVariableValue(variableName) {
  let hex = getComputedStyle(document.documentElement).getPropertyValue(variableName)
  if (hex && hex.length > 0) {
    hex = hex.trim()
  }

  return hex
}

const MixedWidget10 = ({className, chartColor, chartHeight}) => {
  const chartRef = useRef(null)
  // const {mode} = useThemeMode()
  const refreshChart = () => {
    if (!chartRef.current) {
      return
    }

    const chart = new ApexCharts(chartRef.current, chartOptions(chartColor, chartHeight))
    if (chart) {
      chart.render()
    }

    return chart
  }

  useEffect(() => {
    const chart = refreshChart()

    return () => {
      if (chart) {
        chart.destroy()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chartRef])

  return (
      <div className={`card ${className}`}>
        {/* begin::Body */}
        <div className='card-body d-flex flex-column p-0'>
          {/* begin::Stats */}
          <div className='flex-grow-1 card-p pb-0'>
            <div className='d-flex flex-stack flex-wrap'>
              <div className='me-2'>
                <a href='#' className='text-dark text-hover-primary fw-bold fs-3'>
                  Generate Reports
                </a>

                <div className='text-muted fs-7 fw-semibold'>Finance and accounting reports</div>
              </div>

              <div className={`fw-bold fs-3 text-${chartColor}`}>$24,500</div>
            </div>
          </div>
          {/* end::Stats */}

          {/* begin::Chart */}
          <div ref={chartRef} className='mixed-widget-7-chart card-rounded-bottom'></div>
          {/* end::Chart */}
        </div>
        {/* end::Body */}
      </div>
  )
}

const chartOptions = (chartColor, chartHeight) => {
  const labelColor = getCSSVariableValue('--kt-gray-800')
  const strokeColor = getCSSVariableValue('--kt-gray-300')
  const baseColor = getCSSVariableValue('--kt-' + chartColor)
  const lightColor = getCSSVariableValue('--kt-' + chartColor + '-light')

  return {
    series: [
      {
        name: 'Net Profit',
        data: [15, 25, 15, 40, 20, 50],
      },
    ],
    chart: {
      fontFamily: 'inherit',
      type: 'area',
      height: chartHeight,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'solid',
      opacity: 1,
    },
    stroke: {
      curve: 'smooth',
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
      crosshairs: {
        show: false,
        position: 'front',
        stroke: {
          color: strokeColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      min: 0,
      max: 60,
      labels: {
        show: false,
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      hover: {
        filter: {
          type: 'none',
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: 'none',
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: '12px',
      },
      y: {
        formatter: function (val) {
          return '$' + val + ' thousands'
        },
      },
    },
    colors: [lightColor],
    markers: {
      colors: [lightColor],
      strokeColors: [baseColor],
      strokeWidth: 3,
    },
  }
}

export {MixedWidget10}
