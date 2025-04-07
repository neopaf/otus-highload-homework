/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 798.0, "series": [{"data": [[0.0, 1.0], [0.1, 2.0], [0.2, 3.0], [0.3, 3.0], [0.4, 3.0], [0.5, 4.0], [0.6, 4.0], [0.7, 4.0], [0.8, 4.0], [0.9, 4.0], [1.0, 5.0], [1.1, 5.0], [1.2, 5.0], [1.3, 5.0], [1.4, 5.0], [1.5, 5.0], [1.6, 5.0], [1.7, 6.0], [1.8, 6.0], [1.9, 6.0], [2.0, 6.0], [2.1, 6.0], [2.2, 6.0], [2.3, 6.0], [2.4, 7.0], [2.5, 7.0], [2.6, 7.0], [2.7, 7.0], [2.8, 7.0], [2.9, 7.0], [3.0, 7.0], [3.1, 8.0], [3.2, 8.0], [3.3, 8.0], [3.4, 8.0], [3.5, 8.0], [3.6, 8.0], [3.7, 8.0], [3.8, 8.0], [3.9, 9.0], [4.0, 9.0], [4.1, 9.0], [4.2, 9.0], [4.3, 9.0], [4.4, 9.0], [4.5, 9.0], [4.6, 10.0], [4.7, 10.0], [4.8, 10.0], [4.9, 10.0], [5.0, 10.0], [5.1, 10.0], [5.2, 10.0], [5.3, 11.0], [5.4, 11.0], [5.5, 11.0], [5.6, 11.0], [5.7, 11.0], [5.8, 11.0], [5.9, 12.0], [6.0, 12.0], [6.1, 12.0], [6.2, 12.0], [6.3, 12.0], [6.4, 12.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 14.0], [7.5, 15.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 15.0], [8.1, 16.0], [8.2, 16.0], [8.3, 16.0], [8.4, 16.0], [8.5, 17.0], [8.6, 17.0], [8.7, 17.0], [8.8, 17.0], [8.9, 17.0], [9.0, 17.0], [9.1, 18.0], [9.2, 18.0], [9.3, 18.0], [9.4, 18.0], [9.5, 18.0], [9.6, 18.0], [9.7, 19.0], [9.8, 19.0], [9.9, 19.0], [10.0, 19.0], [10.1, 19.0], [10.2, 20.0], [10.3, 20.0], [10.4, 20.0], [10.5, 20.0], [10.6, 20.0], [10.7, 20.0], [10.8, 20.0], [10.9, 21.0], [11.0, 21.0], [11.1, 21.0], [11.2, 21.0], [11.3, 21.0], [11.4, 21.0], [11.5, 22.0], [11.6, 22.0], [11.7, 22.0], [11.8, 22.0], [11.9, 22.0], [12.0, 22.0], [12.1, 22.0], [12.2, 23.0], [12.3, 23.0], [12.4, 23.0], [12.5, 23.0], [12.6, 23.0], [12.7, 23.0], [12.8, 23.0], [12.9, 24.0], [13.0, 24.0], [13.1, 24.0], [13.2, 24.0], [13.3, 24.0], [13.4, 24.0], [13.5, 24.0], [13.6, 24.0], [13.7, 25.0], [13.8, 25.0], [13.9, 25.0], [14.0, 25.0], [14.1, 25.0], [14.2, 25.0], [14.3, 25.0], [14.4, 25.0], [14.5, 26.0], [14.6, 26.0], [14.7, 26.0], [14.8, 26.0], [14.9, 26.0], [15.0, 26.0], [15.1, 26.0], [15.2, 26.0], [15.3, 26.0], [15.4, 26.0], [15.5, 27.0], [15.6, 27.0], [15.7, 27.0], [15.8, 27.0], [15.9, 27.0], [16.0, 27.0], [16.1, 27.0], [16.2, 27.0], [16.3, 27.0], [16.4, 28.0], [16.5, 28.0], [16.6, 28.0], [16.7, 28.0], [16.8, 28.0], [16.9, 28.0], [17.0, 28.0], [17.1, 28.0], [17.2, 28.0], [17.3, 28.0], [17.4, 29.0], [17.5, 29.0], [17.6, 29.0], [17.7, 29.0], [17.8, 29.0], [17.9, 29.0], [18.0, 29.0], [18.1, 29.0], [18.2, 29.0], [18.3, 29.0], [18.4, 29.0], [18.5, 30.0], [18.6, 30.0], [18.7, 30.0], [18.8, 30.0], [18.9, 30.0], [19.0, 30.0], [19.1, 30.0], [19.2, 30.0], [19.3, 30.0], [19.4, 30.0], [19.5, 30.0], [19.6, 30.0], [19.7, 31.0], [19.8, 31.0], [19.9, 31.0], [20.0, 31.0], [20.1, 31.0], [20.2, 31.0], [20.3, 31.0], [20.4, 31.0], [20.5, 31.0], [20.6, 31.0], [20.7, 31.0], [20.8, 31.0], [20.9, 31.0], [21.0, 31.0], [21.1, 31.0], [21.2, 32.0], [21.3, 32.0], [21.4, 32.0], [21.5, 32.0], [21.6, 32.0], [21.7, 32.0], [21.8, 32.0], [21.9, 32.0], [22.0, 32.0], [22.1, 32.0], [22.2, 32.0], [22.3, 32.0], [22.4, 32.0], [22.5, 32.0], [22.6, 32.0], [22.7, 32.0], [22.8, 33.0], [22.9, 33.0], [23.0, 33.0], [23.1, 33.0], [23.2, 33.0], [23.3, 33.0], [23.4, 33.0], [23.5, 33.0], [23.6, 33.0], [23.7, 33.0], [23.8, 33.0], [23.9, 33.0], [24.0, 33.0], [24.1, 33.0], [24.2, 33.0], [24.3, 33.0], [24.4, 33.0], [24.5, 33.0], [24.6, 34.0], [24.7, 34.0], [24.8, 34.0], [24.9, 34.0], [25.0, 34.0], [25.1, 34.0], [25.2, 34.0], [25.3, 34.0], [25.4, 34.0], [25.5, 34.0], [25.6, 34.0], [25.7, 34.0], [25.8, 34.0], [25.9, 34.0], [26.0, 34.0], [26.1, 34.0], [26.2, 34.0], [26.3, 34.0], [26.4, 34.0], [26.5, 35.0], [26.6, 35.0], [26.7, 35.0], [26.8, 35.0], [26.9, 35.0], [27.0, 35.0], [27.1, 35.0], [27.2, 35.0], [27.3, 35.0], [27.4, 35.0], [27.5, 35.0], [27.6, 35.0], [27.7, 35.0], [27.8, 35.0], [27.9, 35.0], [28.0, 35.0], [28.1, 35.0], [28.2, 35.0], [28.3, 35.0], [28.4, 35.0], [28.5, 36.0], [28.6, 36.0], [28.7, 36.0], [28.8, 36.0], [28.9, 36.0], [29.0, 36.0], [29.1, 36.0], [29.2, 36.0], [29.3, 36.0], [29.4, 36.0], [29.5, 36.0], [29.6, 36.0], [29.7, 36.0], [29.8, 36.0], [29.9, 36.0], [30.0, 36.0], [30.1, 36.0], [30.2, 36.0], [30.3, 36.0], [30.4, 36.0], [30.5, 36.0], [30.6, 37.0], [30.7, 37.0], [30.8, 37.0], [30.9, 37.0], [31.0, 37.0], [31.1, 37.0], [31.2, 37.0], [31.3, 37.0], [31.4, 37.0], [31.5, 37.0], [31.6, 37.0], [31.7, 37.0], [31.8, 37.0], [31.9, 37.0], [32.0, 37.0], [32.1, 37.0], [32.2, 37.0], [32.3, 37.0], [32.4, 37.0], [32.5, 37.0], [32.6, 37.0], [32.7, 38.0], [32.8, 38.0], [32.9, 38.0], [33.0, 38.0], [33.1, 38.0], [33.2, 38.0], [33.3, 38.0], [33.4, 38.0], [33.5, 38.0], [33.6, 38.0], [33.7, 38.0], [33.8, 38.0], [33.9, 38.0], [34.0, 38.0], [34.1, 38.0], [34.2, 38.0], [34.3, 38.0], [34.4, 39.0], [34.5, 39.0], [34.6, 39.0], [34.7, 39.0], [34.8, 39.0], [34.9, 39.0], [35.0, 39.0], [35.1, 39.0], [35.2, 39.0], [35.3, 39.0], [35.4, 39.0], [35.5, 39.0], [35.6, 39.0], [35.7, 39.0], [35.8, 39.0], [35.9, 39.0], [36.0, 39.0], [36.1, 39.0], [36.2, 39.0], [36.3, 40.0], [36.4, 40.0], [36.5, 40.0], [36.6, 40.0], [36.7, 40.0], [36.8, 40.0], [36.9, 40.0], [37.0, 40.0], [37.1, 40.0], [37.2, 40.0], [37.3, 40.0], [37.4, 40.0], [37.5, 40.0], [37.6, 40.0], [37.7, 40.0], [37.8, 40.0], [37.9, 40.0], [38.0, 40.0], [38.1, 41.0], [38.2, 41.0], [38.3, 41.0], [38.4, 41.0], [38.5, 41.0], [38.6, 41.0], [38.7, 41.0], [38.8, 41.0], [38.9, 41.0], [39.0, 41.0], [39.1, 41.0], [39.2, 41.0], [39.3, 41.0], [39.4, 41.0], [39.5, 41.0], [39.6, 41.0], [39.7, 42.0], [39.8, 42.0], [39.9, 42.0], [40.0, 42.0], [40.1, 42.0], [40.2, 42.0], [40.3, 42.0], [40.4, 42.0], [40.5, 42.0], [40.6, 42.0], [40.7, 42.0], [40.8, 42.0], [40.9, 42.0], [41.0, 42.0], [41.1, 42.0], [41.2, 42.0], [41.3, 42.0], [41.4, 43.0], [41.5, 43.0], [41.6, 43.0], [41.7, 43.0], [41.8, 43.0], [41.9, 43.0], [42.0, 43.0], [42.1, 43.0], [42.2, 43.0], [42.3, 43.0], [42.4, 43.0], [42.5, 43.0], [42.6, 43.0], [42.7, 43.0], [42.8, 43.0], [42.9, 43.0], [43.0, 44.0], [43.1, 44.0], [43.2, 44.0], [43.3, 44.0], [43.4, 44.0], [43.5, 44.0], [43.6, 44.0], [43.7, 44.0], [43.8, 44.0], [43.9, 44.0], [44.0, 44.0], [44.1, 44.0], [44.2, 44.0], [44.3, 44.0], [44.4, 44.0], [44.5, 44.0], [44.6, 45.0], [44.7, 45.0], [44.8, 45.0], [44.9, 45.0], [45.0, 45.0], [45.1, 45.0], [45.2, 45.0], [45.3, 45.0], [45.4, 45.0], [45.5, 45.0], [45.6, 45.0], [45.7, 45.0], [45.8, 45.0], [45.9, 45.0], [46.0, 45.0], [46.1, 46.0], [46.2, 46.0], [46.3, 46.0], [46.4, 46.0], [46.5, 46.0], [46.6, 46.0], [46.7, 46.0], [46.8, 46.0], [46.9, 46.0], [47.0, 46.0], [47.1, 46.0], [47.2, 46.0], [47.3, 46.0], [47.4, 46.0], [47.5, 46.0], [47.6, 46.0], [47.7, 47.0], [47.8, 47.0], [47.9, 47.0], [48.0, 47.0], [48.1, 47.0], [48.2, 47.0], [48.3, 47.0], [48.4, 47.0], [48.5, 47.0], [48.6, 47.0], [48.7, 47.0], [48.8, 47.0], [48.9, 47.0], [49.0, 47.0], [49.1, 48.0], [49.2, 48.0], [49.3, 48.0], [49.4, 48.0], [49.5, 48.0], [49.6, 48.0], [49.7, 48.0], [49.8, 48.0], [49.9, 48.0], [50.0, 48.0], [50.1, 48.0], [50.2, 48.0], [50.3, 48.0], [50.4, 48.0], [50.5, 49.0], [50.6, 49.0], [50.7, 49.0], [50.8, 49.0], [50.9, 49.0], [51.0, 49.0], [51.1, 49.0], [51.2, 49.0], [51.3, 49.0], [51.4, 49.0], [51.5, 49.0], [51.6, 49.0], [51.7, 49.0], [51.8, 49.0], [51.9, 49.0], [52.0, 50.0], [52.1, 50.0], [52.2, 50.0], [52.3, 50.0], [52.4, 50.0], [52.5, 50.0], [52.6, 50.0], [52.7, 50.0], [52.8, 50.0], [52.9, 50.0], [53.0, 50.0], [53.1, 50.0], [53.2, 50.0], [53.3, 50.0], [53.4, 51.0], [53.5, 51.0], [53.6, 51.0], [53.7, 51.0], [53.8, 51.0], [53.9, 51.0], [54.0, 51.0], [54.1, 51.0], [54.2, 51.0], [54.3, 51.0], [54.4, 51.0], [54.5, 51.0], [54.6, 51.0], [54.7, 52.0], [54.8, 52.0], [54.9, 52.0], [55.0, 52.0], [55.1, 52.0], [55.2, 52.0], [55.3, 52.0], [55.4, 52.0], [55.5, 52.0], [55.6, 52.0], [55.7, 52.0], [55.8, 52.0], [55.9, 52.0], [56.0, 53.0], [56.1, 53.0], [56.2, 53.0], [56.3, 53.0], [56.4, 53.0], [56.5, 53.0], [56.6, 53.0], [56.7, 53.0], [56.8, 53.0], [56.9, 53.0], [57.0, 53.0], [57.1, 53.0], [57.2, 54.0], [57.3, 54.0], [57.4, 54.0], [57.5, 54.0], [57.6, 54.0], [57.7, 54.0], [57.8, 54.0], [57.9, 54.0], [58.0, 54.0], [58.1, 54.0], [58.2, 54.0], [58.3, 54.0], [58.4, 55.0], [58.5, 55.0], [58.6, 55.0], [58.7, 55.0], [58.8, 55.0], [58.9, 55.0], [59.0, 55.0], [59.1, 55.0], [59.2, 55.0], [59.3, 55.0], [59.4, 55.0], [59.5, 55.0], [59.6, 56.0], [59.7, 56.0], [59.8, 56.0], [59.9, 56.0], [60.0, 56.0], [60.1, 56.0], [60.2, 56.0], [60.3, 56.0], [60.4, 56.0], [60.5, 56.0], [60.6, 56.0], [60.7, 57.0], [60.8, 57.0], [60.9, 57.0], [61.0, 57.0], [61.1, 57.0], [61.2, 57.0], [61.3, 57.0], [61.4, 57.0], [61.5, 57.0], [61.6, 57.0], [61.7, 57.0], [61.8, 58.0], [61.9, 58.0], [62.0, 58.0], [62.1, 58.0], [62.2, 58.0], [62.3, 58.0], [62.4, 58.0], [62.5, 58.0], [62.6, 58.0], [62.7, 58.0], [62.8, 58.0], [62.9, 58.0], [63.0, 58.0], [63.1, 59.0], [63.2, 59.0], [63.3, 59.0], [63.4, 59.0], [63.5, 59.0], [63.6, 59.0], [63.7, 59.0], [63.8, 59.0], [63.9, 59.0], [64.0, 59.0], [64.1, 59.0], [64.2, 60.0], [64.3, 60.0], [64.4, 60.0], [64.5, 60.0], [64.6, 60.0], [64.7, 60.0], [64.8, 60.0], [64.9, 60.0], [65.0, 60.0], [65.1, 60.0], [65.2, 61.0], [65.3, 61.0], [65.4, 61.0], [65.5, 61.0], [65.6, 61.0], [65.7, 61.0], [65.8, 61.0], [65.9, 61.0], [66.0, 61.0], [66.1, 61.0], [66.2, 61.0], [66.3, 62.0], [66.4, 62.0], [66.5, 62.0], [66.6, 62.0], [66.7, 62.0], [66.8, 62.0], [66.9, 62.0], [67.0, 62.0], [67.1, 62.0], [67.2, 62.0], [67.3, 63.0], [67.4, 63.0], [67.5, 63.0], [67.6, 63.0], [67.7, 63.0], [67.8, 63.0], [67.9, 63.0], [68.0, 63.0], [68.1, 63.0], [68.2, 63.0], [68.3, 64.0], [68.4, 64.0], [68.5, 64.0], [68.6, 64.0], [68.7, 64.0], [68.8, 64.0], [68.9, 64.0], [69.0, 64.0], [69.1, 64.0], [69.2, 65.0], [69.3, 65.0], [69.4, 65.0], [69.5, 65.0], [69.6, 65.0], [69.7, 65.0], [69.8, 65.0], [69.9, 65.0], [70.0, 65.0], [70.1, 66.0], [70.2, 66.0], [70.3, 66.0], [70.4, 66.0], [70.5, 66.0], [70.6, 66.0], [70.7, 66.0], [70.8, 66.0], [70.9, 66.0], [71.0, 67.0], [71.1, 67.0], [71.2, 67.0], [71.3, 67.0], [71.4, 67.0], [71.5, 67.0], [71.6, 67.0], [71.7, 67.0], [71.8, 67.0], [71.9, 68.0], [72.0, 68.0], [72.1, 68.0], [72.2, 68.0], [72.3, 68.0], [72.4, 68.0], [72.5, 68.0], [72.6, 68.0], [72.7, 68.0], [72.8, 69.0], [72.9, 69.0], [73.0, 69.0], [73.1, 69.0], [73.2, 69.0], [73.3, 69.0], [73.4, 69.0], [73.5, 69.0], [73.6, 70.0], [73.7, 70.0], [73.8, 70.0], [73.9, 70.0], [74.0, 70.0], [74.1, 70.0], [74.2, 70.0], [74.3, 70.0], [74.4, 71.0], [74.5, 71.0], [74.6, 71.0], [74.7, 71.0], [74.8, 71.0], [74.9, 71.0], [75.0, 71.0], [75.1, 72.0], [75.2, 72.0], [75.3, 72.0], [75.4, 72.0], [75.5, 72.0], [75.6, 72.0], [75.7, 72.0], [75.8, 72.0], [75.9, 73.0], [76.0, 73.0], [76.1, 73.0], [76.2, 73.0], [76.3, 73.0], [76.4, 73.0], [76.5, 73.0], [76.6, 74.0], [76.7, 74.0], [76.8, 74.0], [76.9, 74.0], [77.0, 74.0], [77.1, 74.0], [77.2, 74.0], [77.3, 75.0], [77.4, 75.0], [77.5, 75.0], [77.6, 75.0], [77.7, 75.0], [77.8, 75.0], [77.9, 75.0], [78.0, 76.0], [78.1, 76.0], [78.2, 76.0], [78.3, 76.0], [78.4, 76.0], [78.5, 76.0], [78.6, 76.0], [78.7, 77.0], [78.8, 77.0], [78.9, 77.0], [79.0, 77.0], [79.1, 77.0], [79.2, 77.0], [79.3, 77.0], [79.4, 78.0], [79.5, 78.0], [79.6, 78.0], [79.7, 78.0], [79.8, 78.0], [79.9, 78.0], [80.0, 79.0], [80.1, 79.0], [80.2, 79.0], [80.3, 79.0], [80.4, 79.0], [80.5, 79.0], [80.6, 80.0], [80.7, 80.0], [80.8, 80.0], [80.9, 80.0], [81.0, 80.0], [81.1, 80.0], [81.2, 81.0], [81.3, 81.0], [81.4, 81.0], [81.5, 81.0], [81.6, 81.0], [81.7, 81.0], [81.8, 82.0], [81.9, 82.0], [82.0, 82.0], [82.1, 82.0], [82.2, 82.0], [82.3, 83.0], [82.4, 83.0], [82.5, 83.0], [82.6, 83.0], [82.7, 83.0], [82.8, 83.0], [82.9, 84.0], [83.0, 84.0], [83.1, 84.0], [83.2, 84.0], [83.3, 84.0], [83.4, 85.0], [83.5, 85.0], [83.6, 85.0], [83.7, 85.0], [83.8, 86.0], [83.9, 86.0], [84.0, 86.0], [84.1, 86.0], [84.2, 86.0], [84.3, 86.0], [84.4, 87.0], [84.5, 87.0], [84.6, 87.0], [84.7, 87.0], [84.8, 88.0], [84.9, 88.0], [85.0, 88.0], [85.1, 88.0], [85.2, 89.0], [85.3, 89.0], [85.4, 89.0], [85.5, 89.0], [85.6, 90.0], [85.7, 90.0], [85.8, 90.0], [85.9, 90.0], [86.0, 90.0], [86.1, 91.0], [86.2, 91.0], [86.3, 91.0], [86.4, 91.0], [86.5, 92.0], [86.6, 92.0], [86.7, 92.0], [86.8, 92.0], [86.9, 93.0], [87.0, 93.0], [87.1, 93.0], [87.2, 93.0], [87.3, 94.0], [87.4, 94.0], [87.5, 94.0], [87.6, 94.0], [87.7, 95.0], [87.8, 95.0], [87.9, 95.0], [88.0, 96.0], [88.1, 96.0], [88.2, 96.0], [88.3, 96.0], [88.4, 97.0], [88.5, 97.0], [88.6, 97.0], [88.7, 98.0], [88.8, 98.0], [88.9, 98.0], [89.0, 98.0], [89.1, 99.0], [89.2, 99.0], [89.3, 99.0], [89.4, 100.0], [89.5, 100.0], [89.6, 101.0], [89.7, 101.0], [89.8, 101.0], [89.9, 102.0], [90.0, 102.0], [90.1, 102.0], [90.2, 103.0], [90.3, 103.0], [90.4, 104.0], [90.5, 104.0], [90.6, 104.0], [90.7, 105.0], [90.8, 105.0], [90.9, 106.0], [91.0, 106.0], [91.1, 106.0], [91.2, 107.0], [91.3, 107.0], [91.4, 108.0], [91.5, 108.0], [91.6, 109.0], [91.7, 109.0], [91.8, 109.0], [91.9, 110.0], [92.0, 110.0], [92.1, 111.0], [92.2, 111.0], [92.3, 112.0], [92.4, 112.0], [92.5, 113.0], [92.6, 113.0], [92.7, 114.0], [92.8, 114.0], [92.9, 115.0], [93.0, 115.0], [93.1, 116.0], [93.2, 116.0], [93.3, 117.0], [93.4, 117.0], [93.5, 118.0], [93.6, 118.0], [93.7, 119.0], [93.8, 120.0], [93.9, 120.0], [94.0, 121.0], [94.1, 121.0], [94.2, 122.0], [94.3, 123.0], [94.4, 124.0], [94.5, 124.0], [94.6, 125.0], [94.7, 126.0], [94.8, 126.0], [94.9, 127.0], [95.0, 128.0], [95.1, 129.0], [95.2, 130.0], [95.3, 131.0], [95.4, 132.0], [95.5, 132.0], [95.6, 134.0], [95.7, 135.0], [95.8, 135.0], [95.9, 137.0], [96.0, 138.0], [96.1, 139.0], [96.2, 140.0], [96.3, 142.0], [96.4, 143.0], [96.5, 144.0], [96.6, 146.0], [96.7, 147.0], [96.8, 149.0], [96.9, 151.0], [97.0, 153.0], [97.1, 154.0], [97.2, 157.0], [97.3, 159.0], [97.4, 162.0], [97.5, 165.0], [97.6, 168.0], [97.7, 171.0], [97.8, 175.0], [97.9, 179.0], [98.0, 181.0], [98.1, 186.0], [98.2, 190.0], [98.3, 194.0], [98.4, 200.0], [98.5, 207.0], [98.6, 215.0], [98.7, 222.0], [98.8, 228.0], [98.9, 237.0], [99.0, 243.0], [99.1, 251.0], [99.2, 258.0], [99.3, 268.0], [99.4, 281.0], [99.5, 301.0], [99.6, 327.0], [99.7, 365.0], [99.8, 423.0], [99.9, 499.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 0.0, "maxY": 45256.0, "series": [{"data": [[0.0, 45256.0], [300.0, 139.0], [600.0, 15.0], [700.0, 5.0], [100.0, 4598.0], [200.0, 566.0], [400.0, 69.0], [500.0, 30.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 48144.0, "series": [{"data": [[0.0, 2531.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 48144.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 40.352542372881345, "minX": 1.744014187E12, "maxY": 100.0, "series": [{"data": [[1.7440142E12, 100.0], [1.744014199E12, 100.0], [1.744014198E12, 100.0], [1.744014202E12, 100.0], [1.744014201E12, 100.0], [1.744014205E12, 100.0], [1.744014204E12, 100.0], [1.744014203E12, 100.0], [1.744014208E12, 100.0], [1.744014207E12, 100.0], [1.744014206E12, 100.0], [1.744014189E12, 100.0], [1.744014188E12, 96.77215980024971], [1.744014187E12, 40.352542372881345], [1.744014192E12, 100.0], [1.744014191E12, 100.0], [1.74401419E12, 100.0], [1.744014194E12, 100.0], [1.744014193E12, 100.0], [1.744014197E12, 100.0], [1.744014196E12, 100.0], [1.744014195E12, 100.0], [1.74401421E12, 100.0], [1.744014209E12, 100.0], [1.744014213E12, 100.0], [1.744014212E12, 100.0], [1.744014211E12, 100.0], [1.744014216E12, 100.0], [1.744014215E12, 100.0], [1.744014214E12, 100.0], [1.744014217E12, 92.61343283582094]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744014217E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 4.444444444444445, "minX": 1.0, "maxY": 147.0, "series": [{"data": [[2.0, 106.0], [3.0, 105.0], [5.0, 57.666666666666664], [6.0, 4.916666666666666], [7.0, 16.25], [8.0, 5.076923076923077], [9.0, 4.444444444444445], [10.0, 15.680000000000001], [11.0, 7.0], [12.0, 8.222222222222221], [13.0, 6.812500000000001], [14.0, 10.071428571428571], [15.0, 49.92307692307693], [16.0, 10.875], [17.0, 41.0], [18.0, 14.266666666666666], [19.0, 26.058823529411764], [20.0, 20.0], [21.0, 17.77777777777778], [22.0, 20.25], [23.0, 32.8695652173913], [24.0, 22.0], [25.0, 17.11764705882353], [26.0, 15.347826086956522], [27.0, 11.999999999999998], [28.0, 32.21052631578948], [29.0, 21.125], [30.0, 43.5], [33.0, 58.99999999999999], [34.0, 62.0], [35.0, 53.29411764705883], [36.0, 22.58823529411765], [37.0, 36.0], [38.0, 24.315789473684212], [39.0, 25.642857142857146], [40.0, 37.94736842105263], [41.0, 29.5], [42.0, 28.22222222222222], [43.0, 33.0], [44.0, 39.0], [45.0, 44.0], [46.0, 51.4], [47.0, 56.92307692307693], [48.0, 53.9], [49.0, 44.857142857142854], [50.0, 43.33333333333333], [51.0, 37.16666666666667], [52.0, 44.2], [53.0, 29.333333333333336], [54.0, 30.083333333333332], [55.0, 24.434782608695652], [56.0, 24.6], [57.0, 42.36000000000001], [58.0, 34.94999999999999], [59.0, 45.23333333333333], [60.0, 33.833333333333336], [61.0, 26.3125], [62.0, 37.23076923076923], [63.0, 40.13636363636363], [64.0, 40.952380952380956], [65.0, 29.77777777777778], [66.0, 33.607142857142854], [67.0, 35.34782608695652], [68.0, 34.05263157894736], [69.0, 33.46666666666666], [70.0, 34.6875], [71.0, 27.333333333333332], [72.0, 38.6], [73.0, 38.22222222222222], [74.0, 57.166666666666664], [75.0, 61.85714285714286], [76.0, 68.91304347826087], [77.0, 78.14285714285714], [78.0, 59.40000000000001], [79.0, 63.500000000000014], [80.0, 60.57142857142858], [81.0, 62.0], [82.0, 61.4], [83.0, 53.13333333333333], [84.0, 63.36363636363638], [85.0, 64.53846153846153], [86.0, 45.111111111111114], [87.0, 47.25000000000001], [88.0, 53.28571428571429], [89.0, 60.04761904761906], [90.0, 57.625], [91.0, 78.62500000000001], [92.0, 58.25], [93.0, 55.29629629629629], [94.0, 43.0], [95.0, 54.71428571428571], [96.0, 55.607142857142875], [97.0, 62.857142857142854], [98.0, 49.84615384615384], [99.0, 50.5], [100.0, 58.77989372921231], [1.0, 147.0]], "isOverall": false, "label": "/user/search-4", "isController": false}, {"data": [[98.75857374008446, 58.246023915703034]], "isOverall": false, "label": "/user/search-4-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 108528.0, "minX": 1.744014187E12, "maxY": 4954668.0, "series": [{"data": [[1.7440142E12, 2209306.0], [1.744014199E12, 2739124.0], [1.744014198E12, 2224936.0], [1.744014202E12, 2237245.0], [1.744014201E12, 3681105.0], [1.744014205E12, 2477483.0], [1.744014204E12, 1791054.0], [1.744014203E12, 3497103.0], [1.744014208E12, 2361511.0], [1.744014207E12, 2403927.0], [1.744014206E12, 4954668.0], [1.744014189E12, 3524484.0], [1.744014188E12, 2910752.0], [1.744014187E12, 992094.0], [1.744014192E12, 1521981.0], [1.744014191E12, 3436839.0], [1.74401419E12, 3628563.0], [1.744014194E12, 672267.0], [1.744014193E12, 571267.0], [1.744014197E12, 2500874.0], [1.744014196E12, 2978873.0], [1.744014195E12, 2442494.0], [1.74401421E12, 2651026.0], [1.744014209E12, 2549929.0], [1.744014213E12, 3037590.0], [1.744014212E12, 4349021.0], [1.744014211E12, 2861074.0], [1.744014216E12, 3960150.0], [1.744014215E12, 4187005.0], [1.744014214E12, 3018213.0], [1.744014217E12, 2080492.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7440142E12, 506226.0], [1.744014199E12, 459578.0], [1.744014198E12, 456008.0], [1.744014202E12, 468384.0], [1.744014201E12, 422450.0], [1.744014205E12, 421974.0], [1.744014204E12, 317016.0], [1.744014203E12, 426734.0], [1.744014208E12, 307020.0], [1.744014207E12, 337008.0], [1.744014206E12, 485996.0], [1.744014189E12, 417690.0], [1.744014188E12, 381276.0], [1.744014187E12, 210630.0], [1.744014192E12, 241332.0], [1.744014191E12, 446964.0], [1.74401419E12, 385798.0], [1.744014194E12, 120428.0], [1.744014193E12, 108528.0], [1.744014197E12, 415786.0], [1.744014196E12, 446488.0], [1.744014195E12, 289408.0], [1.74401421E12, 474572.0], [1.744014209E12, 473382.0], [1.744014213E12, 500038.0], [1.744014212E12, 432208.0], [1.744014211E12, 475762.0], [1.744014216E12, 466956.0], [1.744014215E12, 527170.0], [1.744014214E12, 479094.0], [1.744014217E12, 159460.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744014217E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 26.415819209039558, "minX": 1.744014187E12, "maxY": 213.41666666666657, "series": [{"data": [[1.7440142E12, 47.04419370004703], [1.744014199E12, 52.30295183842569], [1.744014198E12, 52.40918580375785], [1.744014202E12, 49.52388211382114], [1.744014201E12, 56.27436619718304], [1.744014205E12, 56.32938522278617], [1.744014204E12, 76.46921921921924], [1.744014203E12, 55.451199107640875], [1.744014208E12, 84.28759689922487], [1.744014207E12, 64.3086158192091], [1.744014206E12, 49.23506366307539], [1.744014189E12, 62.58974358974361], [1.744014188E12, 53.39200998751562], [1.744014187E12, 26.415819209039558], [1.744014192E12, 93.98027613412229], [1.744014191E12, 54.54100106496277], [1.74401419E12, 59.26958667489208], [1.744014194E12, 206.69169960474312], [1.744014193E12, 213.41666666666657], [1.744014197E12, 55.9467658843732], [1.744014196E12, 53.804371002132214], [1.744014195E12, 84.93832236842114], [1.74401421E12, 49.72266800401202], [1.744014209E12, 50.034188034188055], [1.744014213E12, 47.15468824369334], [1.744014212E12, 54.95925110132159], [1.744014211E12, 50.34267133566772], [1.744014216E12, 50.962283384301685], [1.744014215E12, 45.20722347629799], [1.744014214E12, 49.9781420765028], [1.744014217E12, 53.9626865671642]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744014217E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 26.40564971751415, "minX": 1.744014187E12, "maxY": 213.38815789473685, "series": [{"data": [[1.7440142E12, 47.03008932769149], [1.744014199E12, 52.28586224754015], [1.744014198E12, 52.39770354906046], [1.744014202E12, 49.51575203252031], [1.744014201E12, 56.24169014084504], [1.744014205E12, 56.30626057529605], [1.744014204E12, 76.44969969969979], [1.744014203E12, 55.4300055772448], [1.744014208E12, 84.26666666666662], [1.744014207E12, 64.28389830508478], [1.744014206E12, 49.21008814887364], [1.744014189E12, 62.56980056980045], [1.744014188E12, 53.3776529338327], [1.744014187E12, 26.40564971751415], [1.744014192E12, 93.96351084812619], [1.744014191E12, 54.50745473908405], [1.74401419E12, 59.24244293645894], [1.744014194E12, 206.67786561264808], [1.744014193E12, 213.38815789473685], [1.744014197E12, 55.934172867773334], [1.744014196E12, 53.78304904051173], [1.744014195E12, 84.91776315789473], [1.74401421E12, 49.70260782347041], [1.744014209E12, 50.02362996480647], [1.744014213E12, 47.14040932889106], [1.744014212E12, 54.93116740088109], [1.744014211E12, 50.32416208104043], [1.744014216E12, 50.94087665647291], [1.744014215E12, 45.18645598194127], [1.744014214E12, 49.963735717834076], [1.744014217E12, 53.937313432835836]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744014217E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.744014187E12, "maxY": 0.06440677966101689, "series": [{"data": [[1.7440142E12, 0.009402914903620118], [1.744014199E12, 0.0020714655618850396], [1.744014198E12, 0.0], [1.744014202E12, 5.081300813008154E-4], [1.744014201E12, 0.007323943661971828], [1.744014205E12, 0.006768189509306255], [1.744014204E12, 0.0], [1.744014203E12, 0.0], [1.744014208E12, 0.0015503875968992278], [1.744014207E12, 0.006355932203389829], [1.744014206E12, 0.012732615083251724], [1.744014189E12, 0.0], [1.744014188E12, 0.00873907615480652], [1.744014187E12, 0.06440677966101689], [1.744014192E12, 0.005917159763313614], [1.744014191E12, 0.0010649627263045803], [1.74401419E12, 0.0], [1.744014194E12, 0.011857707509881433], [1.744014193E12, 0.01315789473684211], [1.744014197E12, 0.0], [1.744014196E12, 0.004797441364605533], [1.744014195E12, 0.01151315789473684], [1.74401421E12, 0.0015045135406218668], [1.744014209E12, 0.0], [1.744014213E12, 0.0014278914802475023], [1.744014212E12, 0.00936123348017623], [1.744014211E12, 0.010005002501250648], [1.744014216E12, 0.006625891946992863], [1.744014215E12, 0.0022573363431151244], [1.744014214E12, 0.0], [1.744014217E12, 0.004477611940298503]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744014217E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.744014187E12, "maxY": 571.0, "series": [{"data": [[1.7440142E12, 143.0], [1.744014199E12, 153.0], [1.744014198E12, 163.0], [1.744014202E12, 122.0], [1.744014201E12, 247.0], [1.744014205E12, 233.0], [1.744014204E12, 156.0], [1.744014203E12, 167.0], [1.744014208E12, 315.0], [1.744014207E12, 172.0], [1.744014206E12, 139.0], [1.744014189E12, 263.0], [1.744014188E12, 145.0], [1.744014187E12, 84.0], [1.744014192E12, 184.0], [1.744014191E12, 133.0], [1.74401419E12, 180.0], [1.744014194E12, 368.0], [1.744014193E12, 571.0], [1.744014197E12, 148.0], [1.744014196E12, 138.0], [1.744014195E12, 308.0], [1.74401421E12, 162.0], [1.744014209E12, 136.0], [1.744014213E12, 114.0], [1.744014212E12, 187.0], [1.744014211E12, 148.0], [1.744014216E12, 170.0], [1.744014215E12, 130.0], [1.744014214E12, 135.0], [1.744014217E12, 147.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7440142E12, 7.0], [1.744014199E12, 6.0], [1.744014198E12, 4.0], [1.744014202E12, 10.0], [1.744014201E12, 7.0], [1.744014205E12, 12.0], [1.744014204E12, 15.0], [1.744014203E12, 7.0], [1.744014208E12, 8.0], [1.744014207E12, 8.0], [1.744014206E12, 7.0], [1.744014189E12, 3.0], [1.744014188E12, 5.0], [1.744014187E12, 5.0], [1.744014192E12, 6.0], [1.744014191E12, 7.0], [1.74401419E12, 11.0], [1.744014194E12, 34.0], [1.744014193E12, 19.0], [1.744014197E12, 8.0], [1.744014196E12, 6.0], [1.744014195E12, 3.0], [1.74401421E12, 5.0], [1.744014209E12, 8.0], [1.744014213E12, 4.0], [1.744014212E12, 7.0], [1.744014211E12, 5.0], [1.744014216E12, 10.0], [1.744014215E12, 5.0], [1.744014214E12, 7.0], [1.744014217E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7440142E12, 86.4], [1.744014199E12, 95.5], [1.744014198E12, 98.20000000000002], [1.744014202E12, 96.0], [1.744014201E12, 105.50000000000004], [1.744014205E12, 109.59999999999998], [1.744014204E12, 123.0], [1.744014203E12, 93.19999999999999], [1.744014208E12, 252.8], [1.744014207E12, 119.6], [1.744014206E12, 90.6], [1.744014189E12, 112.40000000000003], [1.744014188E12, 95.89999999999999], [1.744014187E12, 57.0], [1.744014192E12, 141.20000000000002], [1.744014191E12, 109.5], [1.74401419E12, 114.60000000000001], [1.744014194E12, 282.0], [1.744014193E12, 543.1], [1.744014197E12, 115.60000000000001], [1.744014196E12, 106.39999999999999], [1.744014195E12, 169.6000000000002], [1.74401421E12, 90.5], [1.744014209E12, 93.40000000000003], [1.744014213E12, 84.0], [1.744014212E12, 119.40000000000002], [1.744014211E12, 100.80000000000001], [1.744014216E12, 110.5], [1.744014215E12, 78.8], [1.744014214E12, 101.10000000000001], [1.744014217E12, 79.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7440142E12, 143.0], [1.744014199E12, 153.0], [1.744014198E12, 163.0], [1.744014202E12, 122.0], [1.744014201E12, 246.18999999999997], [1.744014205E12, 233.0], [1.744014204E12, 156.0], [1.744014203E12, 167.0], [1.744014208E12, 315.0], [1.744014207E12, 172.0], [1.744014206E12, 137.91999999999996], [1.744014189E12, 258.7599999999993], [1.744014188E12, 145.0], [1.744014187E12, 84.0], [1.744014192E12, 184.0], [1.744014191E12, 133.0], [1.74401419E12, 180.0], [1.744014194E12, 368.0], [1.744014193E12, 571.0], [1.744014197E12, 148.0], [1.744014196E12, 138.0], [1.744014195E12, 308.0], [1.74401421E12, 162.0], [1.744014209E12, 136.0], [1.744014213E12, 114.0], [1.744014212E12, 187.0], [1.744014211E12, 147.64], [1.744014216E12, 170.0], [1.744014215E12, 129.88], [1.744014214E12, 134.82], [1.744014217E12, 147.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7440142E12, 45.0], [1.744014199E12, 52.5], [1.744014198E12, 51.0], [1.744014202E12, 46.0], [1.744014201E12, 51.0], [1.744014205E12, 56.0], [1.744014204E12, 60.0], [1.744014203E12, 53.0], [1.744014208E12, 83.0], [1.744014207E12, 66.0], [1.744014206E12, 52.0], [1.744014189E12, 58.0], [1.744014188E12, 58.0], [1.744014187E12, 25.0], [1.744014192E12, 85.0], [1.744014191E12, 53.5], [1.74401419E12, 61.0], [1.744014194E12, 191.5], [1.744014193E12, 271.0], [1.744014197E12, 57.0], [1.744014196E12, 57.0], [1.744014195E12, 81.0], [1.74401421E12, 40.0], [1.744014209E12, 50.0], [1.744014213E12, 46.0], [1.744014212E12, 60.0], [1.744014211E12, 48.0], [1.744014216E12, 52.0], [1.744014215E12, 40.0], [1.744014214E12, 51.0], [1.744014217E12, 55.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7440142E12, 96.19999999999993], [1.744014199E12, 110.0], [1.744014198E12, 120.00000000000006], [1.744014202E12, 106.0], [1.744014201E12, 133.29999999999998], [1.744014205E12, 126.39999999999995], [1.744014204E12, 134.0], [1.744014203E12, 106.64999999999999], [1.744014208E12, 267.84999999999997], [1.744014207E12, 141.39999999999998], [1.744014206E12, 107.19999999999997], [1.744014189E12, 146.0], [1.744014188E12, 119.29999999999998], [1.744014187E12, 64.25], [1.744014192E12, 162.2], [1.744014191E12, 122.25], [1.74401419E12, 140.5], [1.744014194E12, 349.25], [1.744014193E12, 571.0], [1.744014197E12, 131.39999999999998], [1.744014196E12, 121.0], [1.744014195E12, 189.79999999999998], [1.74401421E12, 108.5], [1.744014209E12, 99.6], [1.744014213E12, 97.0], [1.744014212E12, 145.1], [1.744014211E12, 119.1], [1.744014216E12, 140.0], [1.744014215E12, 89.39999999999995], [1.744014214E12, 117.0], [1.744014217E12, 115.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744014217E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 23.0, "minX": 456.0, "maxY": 271.0, "series": [{"data": [[670.0, 55.0], [885.0, 25.0], [1014.0, 85.0], [1216.0, 81.0], [1332.0, 60.0], [1290.0, 83.0], [1416.0, 66.0], [1602.0, 58.0], [1621.0, 61.0], [1755.0, 58.0], [1747.0, 57.0], [1775.0, 51.0], [1773.0, 56.0], [1793.0, 53.0], [1816.0, 60.0], [1878.0, 53.5], [1876.0, 57.0], [1916.0, 51.0], [1931.0, 52.5], [1968.0, 46.0], [1962.0, 52.0], [2042.0, 52.0], [1989.0, 50.0], [1994.0, 40.0], [1999.0, 48.0], [2013.0, 51.0], [2127.0, 45.0], [2101.0, 46.0], [2215.0, 40.0], [456.0, 271.0], [506.0, 191.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[670.0, 50.0], [885.0, 23.0], [1014.0, 77.0], [1216.0, 65.0], [1332.0, 66.0], [1290.0, 61.0], [1416.0, 56.0], [1602.0, 49.0], [1621.0, 55.0], [1755.0, 51.0], [1747.0, 47.0], [1775.0, 45.0], [1773.0, 51.0], [1793.0, 49.0], [1816.0, 46.0], [1878.0, 49.0], [1876.0, 49.0], [1916.0, 47.0], [1931.0, 45.0], [1968.0, 44.0], [1962.0, 44.0], [2042.0, 45.0], [1989.0, 44.0], [1994.0, 44.0], [1999.0, 44.0], [2013.0, 44.0], [2127.0, 43.0], [2101.0, 44.0], [2215.0, 41.0], [456.0, 154.5], [506.0, 188.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2215.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 23.0, "minX": 456.0, "maxY": 270.5, "series": [{"data": [[670.0, 55.0], [885.0, 25.0], [1014.0, 85.0], [1216.0, 81.0], [1332.0, 59.0], [1290.0, 82.5], [1416.0, 66.0], [1602.0, 58.0], [1621.0, 61.0], [1755.0, 58.0], [1747.0, 55.0], [1775.0, 51.0], [1773.0, 56.0], [1793.0, 52.0], [1816.0, 60.0], [1878.0, 53.5], [1876.0, 57.0], [1916.0, 51.0], [1931.0, 52.5], [1968.0, 46.0], [1962.0, 51.5], [2042.0, 52.0], [1989.0, 50.0], [1994.0, 40.0], [1999.0, 48.0], [2013.0, 51.0], [2127.0, 44.0], [2101.0, 46.0], [2215.0, 40.0], [456.0, 270.5], [506.0, 191.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[670.0, 50.0], [885.0, 23.0], [1014.0, 77.0], [1216.0, 65.0], [1332.0, 66.0], [1290.0, 61.0], [1416.0, 56.0], [1602.0, 49.0], [1621.0, 55.0], [1755.0, 51.0], [1747.0, 47.0], [1775.0, 45.0], [1773.0, 51.0], [1793.0, 49.0], [1816.0, 46.0], [1878.0, 49.0], [1876.0, 49.0], [1916.0, 47.0], [1931.0, 45.0], [1968.0, 44.0], [1962.0, 44.0], [2042.0, 45.0], [1989.0, 44.0], [1994.0, 44.0], [1999.0, 44.0], [2013.0, 44.0], [2127.0, 43.0], [2101.0, 44.0], [2215.0, 41.0], [456.0, 154.5], [506.0, 188.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2215.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 456.0, "minX": 1.744014187E12, "maxY": 2215.0, "series": [{"data": [[1.7440142E12, 2127.0], [1.744014199E12, 1931.0], [1.744014198E12, 1916.0], [1.744014202E12, 1968.0], [1.744014201E12, 1775.0], [1.744014205E12, 1773.0], [1.744014204E12, 1333.0], [1.744014203E12, 1792.0], [1.744014208E12, 1290.0], [1.744014207E12, 1416.0], [1.744014206E12, 2042.0], [1.744014189E12, 1753.0], [1.744014188E12, 1630.0], [1.744014187E12, 957.0], [1.744014192E12, 1014.0], [1.744014191E12, 1880.0], [1.74401419E12, 1621.0], [1.744014194E12, 506.0], [1.744014193E12, 456.0], [1.744014197E12, 1747.0], [1.744014196E12, 1877.0], [1.744014195E12, 1215.0], [1.74401421E12, 1994.0], [1.744014209E12, 1989.0], [1.744014213E12, 2101.0], [1.744014212E12, 1816.0], [1.744014211E12, 1999.0], [1.744014216E12, 1962.0], [1.744014215E12, 2215.0], [1.744014214E12, 2013.0], [1.744014217E12, 570.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744014217E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.744014187E12, "maxY": 2104.0, "series": [{"data": [[1.7440142E12, 95.0], [1.744014199E12, 94.0], [1.744014198E12, 85.0], [1.744014202E12, 97.0], [1.744014201E12, 108.0], [1.744014205E12, 81.0], [1.744014204E12, 59.0], [1.744014203E12, 86.0], [1.744014208E12, 60.0], [1.744014207E12, 63.0], [1.744014206E12, 111.0], [1.744014189E12, 103.0], [1.744014188E12, 86.0], [1.744014187E12, 54.0], [1.744014192E12, 51.0], [1.744014191E12, 94.0], [1.74401419E12, 73.0], [1.744014194E12, 24.0], [1.744014193E12, 18.0], [1.744014197E12, 77.0], [1.744014196E12, 91.0], [1.744014195E12, 83.0], [1.74401421E12, 94.0], [1.744014209E12, 93.0], [1.744014213E12, 99.0], [1.744014212E12, 97.0], [1.744014211E12, 117.0], [1.744014216E12, 94.0], [1.744014215E12, 111.0], [1.744014214E12, 102.0], [1.744014217E12, 34.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.7440142E12, 2032.0], [1.744014199E12, 1837.0], [1.744014198E12, 1831.0], [1.744014202E12, 1871.0], [1.744014201E12, 1667.0], [1.744014205E12, 1692.0], [1.744014204E12, 1273.0], [1.744014203E12, 1707.0], [1.744014208E12, 1230.0], [1.744014207E12, 1353.0], [1.744014206E12, 1931.0], [1.744014189E12, 1652.0], [1.744014188E12, 1516.0], [1.744014187E12, 831.0], [1.744014192E12, 963.0], [1.744014191E12, 1784.0], [1.74401419E12, 1548.0], [1.744014194E12, 482.0], [1.744014193E12, 438.0], [1.744014197E12, 1670.0], [1.744014196E12, 1785.0], [1.744014195E12, 1133.0], [1.74401421E12, 1900.0], [1.744014209E12, 1896.0], [1.744014213E12, 2002.0], [1.744014212E12, 1719.0], [1.744014211E12, 1882.0], [1.744014216E12, 1868.0], [1.744014215E12, 2104.0], [1.744014214E12, 1911.0], [1.744014217E12, 636.0]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744014217E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.744014187E12, "maxY": 2104.0, "series": [{"data": [[1.7440142E12, 2032.0], [1.744014199E12, 1837.0], [1.744014198E12, 1831.0], [1.744014202E12, 1871.0], [1.744014201E12, 1667.0], [1.744014205E12, 1692.0], [1.744014204E12, 1273.0], [1.744014203E12, 1707.0], [1.744014208E12, 1230.0], [1.744014207E12, 1353.0], [1.744014206E12, 1931.0], [1.744014189E12, 1652.0], [1.744014188E12, 1516.0], [1.744014187E12, 831.0], [1.744014192E12, 963.0], [1.744014191E12, 1784.0], [1.74401419E12, 1548.0], [1.744014194E12, 482.0], [1.744014193E12, 438.0], [1.744014197E12, 1670.0], [1.744014196E12, 1785.0], [1.744014195E12, 1133.0], [1.74401421E12, 1900.0], [1.744014209E12, 1896.0], [1.744014213E12, 2002.0], [1.744014212E12, 1719.0], [1.744014211E12, 1882.0], [1.744014216E12, 1868.0], [1.744014215E12, 2104.0], [1.744014214E12, 1911.0], [1.744014217E12, 636.0]], "isOverall": false, "label": "/user/search-4-failure", "isController": false}, {"data": [[1.7440142E12, 95.0], [1.744014199E12, 94.0], [1.744014198E12, 85.0], [1.744014202E12, 97.0], [1.744014201E12, 108.0], [1.744014205E12, 81.0], [1.744014204E12, 59.0], [1.744014203E12, 86.0], [1.744014208E12, 60.0], [1.744014207E12, 63.0], [1.744014206E12, 111.0], [1.744014189E12, 103.0], [1.744014188E12, 86.0], [1.744014187E12, 54.0], [1.744014192E12, 51.0], [1.744014191E12, 94.0], [1.74401419E12, 73.0], [1.744014194E12, 24.0], [1.744014193E12, 18.0], [1.744014197E12, 77.0], [1.744014196E12, 91.0], [1.744014195E12, 83.0], [1.74401421E12, 94.0], [1.744014209E12, 93.0], [1.744014213E12, 99.0], [1.744014212E12, 97.0], [1.744014211E12, 117.0], [1.744014216E12, 94.0], [1.744014215E12, 111.0], [1.744014214E12, 102.0], [1.744014217E12, 34.0]], "isOverall": false, "label": "/user/search-4-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744014217E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 18.0, "minX": 1.744014187E12, "maxY": 2104.0, "series": [{"data": [[1.7440142E12, 95.0], [1.744014199E12, 94.0], [1.744014198E12, 85.0], [1.744014202E12, 97.0], [1.744014201E12, 108.0], [1.744014205E12, 81.0], [1.744014204E12, 59.0], [1.744014203E12, 86.0], [1.744014208E12, 60.0], [1.744014207E12, 63.0], [1.744014206E12, 111.0], [1.744014189E12, 103.0], [1.744014188E12, 86.0], [1.744014187E12, 54.0], [1.744014192E12, 51.0], [1.744014191E12, 94.0], [1.74401419E12, 73.0], [1.744014194E12, 24.0], [1.744014193E12, 18.0], [1.744014197E12, 77.0], [1.744014196E12, 91.0], [1.744014195E12, 83.0], [1.74401421E12, 94.0], [1.744014209E12, 93.0], [1.744014213E12, 99.0], [1.744014212E12, 97.0], [1.744014211E12, 117.0], [1.744014216E12, 94.0], [1.744014215E12, 111.0], [1.744014214E12, 102.0], [1.744014217E12, 34.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.7440142E12, 2032.0], [1.744014199E12, 1837.0], [1.744014198E12, 1831.0], [1.744014202E12, 1871.0], [1.744014201E12, 1667.0], [1.744014205E12, 1692.0], [1.744014204E12, 1273.0], [1.744014203E12, 1707.0], [1.744014208E12, 1230.0], [1.744014207E12, 1353.0], [1.744014206E12, 1931.0], [1.744014189E12, 1652.0], [1.744014188E12, 1516.0], [1.744014187E12, 831.0], [1.744014192E12, 963.0], [1.744014191E12, 1784.0], [1.74401419E12, 1548.0], [1.744014194E12, 482.0], [1.744014193E12, 438.0], [1.744014197E12, 1670.0], [1.744014196E12, 1785.0], [1.744014195E12, 1133.0], [1.74401421E12, 1900.0], [1.744014209E12, 1896.0], [1.744014213E12, 2002.0], [1.744014212E12, 1719.0], [1.744014211E12, 1882.0], [1.744014216E12, 1868.0], [1.744014215E12, 2104.0], [1.744014214E12, 1911.0], [1.744014217E12, 636.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744014217E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

