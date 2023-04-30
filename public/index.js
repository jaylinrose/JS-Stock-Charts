async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
   
    async function timeChartData() {
        const response = await fetch("https://api.twelvedata.com/time_series?symbol=GME,MSFT,DIS,BNTX&interval=1min&format=JSON&apikey=1819beb32dad4f549316befaf2e13dff");
        const jsonData = await response.json();
        console.log(jsonData);
      }
      timeChartData()
}

main()