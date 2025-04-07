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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 145.0, "series": [{"data": [[0.0, 1.0], [0.1, 1.0], [0.2, 1.0], [0.3, 1.0], [0.4, 1.0], [0.5, 1.0], [0.6, 1.0], [0.7, 1.0], [0.8, 1.0], [0.9, 1.0], [1.0, 1.0], [1.1, 1.0], [1.2, 1.0], [1.3, 1.0], [1.4, 1.0], [1.5, 1.0], [1.6, 1.0], [1.7, 1.0], [1.8, 1.0], [1.9, 1.0], [2.0, 1.0], [2.1, 1.0], [2.2, 1.0], [2.3, 1.0], [2.4, 1.0], [2.5, 1.0], [2.6, 1.0], [2.7, 1.0], [2.8, 1.0], [2.9, 1.0], [3.0, 1.0], [3.1, 1.0], [3.2, 1.0], [3.3, 1.0], [3.4, 1.0], [3.5, 1.0], [3.6, 1.0], [3.7, 1.0], [3.8, 1.0], [3.9, 1.0], [4.0, 1.0], [4.1, 1.0], [4.2, 1.0], [4.3, 2.0], [4.4, 2.0], [4.5, 2.0], [4.6, 2.0], [4.7, 2.0], [4.8, 2.0], [4.9, 2.0], [5.0, 2.0], [5.1, 2.0], [5.2, 2.0], [5.3, 2.0], [5.4, 2.0], [5.5, 2.0], [5.6, 2.0], [5.7, 2.0], [5.8, 2.0], [5.9, 2.0], [6.0, 2.0], [6.1, 2.0], [6.2, 2.0], [6.3, 2.0], [6.4, 2.0], [6.5, 2.0], [6.6, 2.0], [6.7, 2.0], [6.8, 2.0], [6.9, 2.0], [7.0, 2.0], [7.1, 2.0], [7.2, 2.0], [7.3, 2.0], [7.4, 2.0], [7.5, 2.0], [7.6, 2.0], [7.7, 2.0], [7.8, 2.0], [7.9, 2.0], [8.0, 2.0], [8.1, 2.0], [8.2, 2.0], [8.3, 2.0], [8.4, 2.0], [8.5, 2.0], [8.6, 2.0], [8.7, 2.0], [8.8, 2.0], [8.9, 2.0], [9.0, 2.0], [9.1, 2.0], [9.2, 2.0], [9.3, 2.0], [9.4, 2.0], [9.5, 2.0], [9.6, 2.0], [9.7, 2.0], [9.8, 2.0], [9.9, 2.0], [10.0, 2.0], [10.1, 2.0], [10.2, 2.0], [10.3, 2.0], [10.4, 2.0], [10.5, 2.0], [10.6, 2.0], [10.7, 2.0], [10.8, 2.0], [10.9, 2.0], [11.0, 2.0], [11.1, 2.0], [11.2, 2.0], [11.3, 2.0], [11.4, 2.0], [11.5, 2.0], [11.6, 2.0], [11.7, 2.0], [11.8, 2.0], [11.9, 2.0], [12.0, 2.0], [12.1, 2.0], [12.2, 2.0], [12.3, 2.0], [12.4, 2.0], [12.5, 2.0], [12.6, 2.0], [12.7, 2.0], [12.8, 2.0], [12.9, 2.0], [13.0, 2.0], [13.1, 2.0], [13.2, 2.0], [13.3, 2.0], [13.4, 2.0], [13.5, 2.0], [13.6, 2.0], [13.7, 2.0], [13.8, 2.0], [13.9, 2.0], [14.0, 2.0], [14.1, 2.0], [14.2, 2.0], [14.3, 2.0], [14.4, 2.0], [14.5, 2.0], [14.6, 2.0], [14.7, 2.0], [14.8, 2.0], [14.9, 2.0], [15.0, 2.0], [15.1, 2.0], [15.2, 2.0], [15.3, 2.0], [15.4, 2.0], [15.5, 2.0], [15.6, 2.0], [15.7, 2.0], [15.8, 2.0], [15.9, 2.0], [16.0, 2.0], [16.1, 2.0], [16.2, 2.0], [16.3, 2.0], [16.4, 2.0], [16.5, 2.0], [16.6, 2.0], [16.7, 2.0], [16.8, 2.0], [16.9, 2.0], [17.0, 2.0], [17.1, 2.0], [17.2, 2.0], [17.3, 2.0], [17.4, 2.0], [17.5, 2.0], [17.6, 2.0], [17.7, 2.0], [17.8, 2.0], [17.9, 2.0], [18.0, 2.0], [18.1, 2.0], [18.2, 2.0], [18.3, 2.0], [18.4, 2.0], [18.5, 2.0], [18.6, 2.0], [18.7, 2.0], [18.8, 2.0], [18.9, 2.0], [19.0, 2.0], [19.1, 2.0], [19.2, 2.0], [19.3, 2.0], [19.4, 2.0], [19.5, 2.0], [19.6, 2.0], [19.7, 2.0], [19.8, 2.0], [19.9, 2.0], [20.0, 2.0], [20.1, 2.0], [20.2, 2.0], [20.3, 2.0], [20.4, 2.0], [20.5, 2.0], [20.6, 2.0], [20.7, 2.0], [20.8, 2.0], [20.9, 2.0], [21.0, 2.0], [21.1, 2.0], [21.2, 2.0], [21.3, 2.0], [21.4, 2.0], [21.5, 2.0], [21.6, 2.0], [21.7, 2.0], [21.8, 2.0], [21.9, 2.0], [22.0, 2.0], [22.1, 2.0], [22.2, 2.0], [22.3, 2.0], [22.4, 2.0], [22.5, 2.0], [22.6, 2.0], [22.7, 2.0], [22.8, 2.0], [22.9, 2.0], [23.0, 2.0], [23.1, 2.0], [23.2, 2.0], [23.3, 2.0], [23.4, 2.0], [23.5, 2.0], [23.6, 2.0], [23.7, 2.0], [23.8, 2.0], [23.9, 2.0], [24.0, 2.0], [24.1, 2.0], [24.2, 2.0], [24.3, 2.0], [24.4, 2.0], [24.5, 2.0], [24.6, 2.0], [24.7, 2.0], [24.8, 2.0], [24.9, 2.0], [25.0, 2.0], [25.1, 2.0], [25.2, 2.0], [25.3, 2.0], [25.4, 2.0], [25.5, 2.0], [25.6, 2.0], [25.7, 2.0], [25.8, 2.0], [25.9, 2.0], [26.0, 2.0], [26.1, 2.0], [26.2, 2.0], [26.3, 2.0], [26.4, 2.0], [26.5, 2.0], [26.6, 2.0], [26.7, 2.0], [26.8, 2.0], [26.9, 2.0], [27.0, 2.0], [27.1, 2.0], [27.2, 2.0], [27.3, 2.0], [27.4, 2.0], [27.5, 2.0], [27.6, 2.0], [27.7, 2.0], [27.8, 2.0], [27.9, 2.0], [28.0, 2.0], [28.1, 2.0], [28.2, 2.0], [28.3, 2.0], [28.4, 2.0], [28.5, 2.0], [28.6, 2.0], [28.7, 2.0], [28.8, 2.0], [28.9, 2.0], [29.0, 2.0], [29.1, 2.0], [29.2, 2.0], [29.3, 2.0], [29.4, 2.0], [29.5, 2.0], [29.6, 2.0], [29.7, 2.0], [29.8, 2.0], [29.9, 2.0], [30.0, 2.0], [30.1, 2.0], [30.2, 2.0], [30.3, 2.0], [30.4, 2.0], [30.5, 2.0], [30.6, 2.0], [30.7, 2.0], [30.8, 2.0], [30.9, 2.0], [31.0, 2.0], [31.1, 2.0], [31.2, 2.0], [31.3, 2.0], [31.4, 2.0], [31.5, 2.0], [31.6, 2.0], [31.7, 2.0], [31.8, 2.0], [31.9, 2.0], [32.0, 2.0], [32.1, 3.0], [32.2, 3.0], [32.3, 3.0], [32.4, 3.0], [32.5, 3.0], [32.6, 3.0], [32.7, 3.0], [32.8, 3.0], [32.9, 3.0], [33.0, 3.0], [33.1, 3.0], [33.2, 3.0], [33.3, 3.0], [33.4, 3.0], [33.5, 3.0], [33.6, 3.0], [33.7, 3.0], [33.8, 3.0], [33.9, 3.0], [34.0, 3.0], [34.1, 3.0], [34.2, 3.0], [34.3, 3.0], [34.4, 3.0], [34.5, 3.0], [34.6, 3.0], [34.7, 3.0], [34.8, 3.0], [34.9, 3.0], [35.0, 3.0], [35.1, 3.0], [35.2, 3.0], [35.3, 3.0], [35.4, 3.0], [35.5, 3.0], [35.6, 3.0], [35.7, 3.0], [35.8, 3.0], [35.9, 3.0], [36.0, 3.0], [36.1, 3.0], [36.2, 3.0], [36.3, 3.0], [36.4, 3.0], [36.5, 3.0], [36.6, 3.0], [36.7, 3.0], [36.8, 3.0], [36.9, 3.0], [37.0, 3.0], [37.1, 3.0], [37.2, 3.0], [37.3, 3.0], [37.4, 3.0], [37.5, 3.0], [37.6, 3.0], [37.7, 3.0], [37.8, 3.0], [37.9, 3.0], [38.0, 3.0], [38.1, 3.0], [38.2, 3.0], [38.3, 3.0], [38.4, 3.0], [38.5, 3.0], [38.6, 3.0], [38.7, 3.0], [38.8, 3.0], [38.9, 3.0], [39.0, 3.0], [39.1, 3.0], [39.2, 3.0], [39.3, 3.0], [39.4, 3.0], [39.5, 3.0], [39.6, 3.0], [39.7, 3.0], [39.8, 3.0], [39.9, 3.0], [40.0, 3.0], [40.1, 3.0], [40.2, 3.0], [40.3, 3.0], [40.4, 3.0], [40.5, 3.0], [40.6, 3.0], [40.7, 3.0], [40.8, 3.0], [40.9, 3.0], [41.0, 3.0], [41.1, 3.0], [41.2, 3.0], [41.3, 3.0], [41.4, 3.0], [41.5, 3.0], [41.6, 3.0], [41.7, 3.0], [41.8, 3.0], [41.9, 3.0], [42.0, 3.0], [42.1, 3.0], [42.2, 3.0], [42.3, 3.0], [42.4, 3.0], [42.5, 3.0], [42.6, 3.0], [42.7, 3.0], [42.8, 3.0], [42.9, 3.0], [43.0, 3.0], [43.1, 3.0], [43.2, 3.0], [43.3, 3.0], [43.4, 3.0], [43.5, 3.0], [43.6, 3.0], [43.7, 3.0], [43.8, 3.0], [43.9, 3.0], [44.0, 3.0], [44.1, 3.0], [44.2, 3.0], [44.3, 3.0], [44.4, 3.0], [44.5, 3.0], [44.6, 3.0], [44.7, 3.0], [44.8, 3.0], [44.9, 3.0], [45.0, 3.0], [45.1, 3.0], [45.2, 3.0], [45.3, 3.0], [45.4, 3.0], [45.5, 3.0], [45.6, 3.0], [45.7, 3.0], [45.8, 3.0], [45.9, 3.0], [46.0, 3.0], [46.1, 3.0], [46.2, 3.0], [46.3, 3.0], [46.4, 3.0], [46.5, 3.0], [46.6, 3.0], [46.7, 3.0], [46.8, 3.0], [46.9, 3.0], [47.0, 3.0], [47.1, 3.0], [47.2, 3.0], [47.3, 3.0], [47.4, 3.0], [47.5, 3.0], [47.6, 3.0], [47.7, 3.0], [47.8, 3.0], [47.9, 3.0], [48.0, 3.0], [48.1, 3.0], [48.2, 3.0], [48.3, 3.0], [48.4, 3.0], [48.5, 3.0], [48.6, 3.0], [48.7, 3.0], [48.8, 3.0], [48.9, 3.0], [49.0, 3.0], [49.1, 3.0], [49.2, 3.0], [49.3, 3.0], [49.4, 3.0], [49.5, 3.0], [49.6, 3.0], [49.7, 3.0], [49.8, 3.0], [49.9, 3.0], [50.0, 3.0], [50.1, 3.0], [50.2, 3.0], [50.3, 3.0], [50.4, 3.0], [50.5, 3.0], [50.6, 3.0], [50.7, 3.0], [50.8, 3.0], [50.9, 3.0], [51.0, 3.0], [51.1, 3.0], [51.2, 3.0], [51.3, 3.0], [51.4, 3.0], [51.5, 3.0], [51.6, 3.0], [51.7, 3.0], [51.8, 3.0], [51.9, 3.0], [52.0, 3.0], [52.1, 3.0], [52.2, 3.0], [52.3, 3.0], [52.4, 3.0], [52.5, 3.0], [52.6, 3.0], [52.7, 3.0], [52.8, 3.0], [52.9, 3.0], [53.0, 3.0], [53.1, 3.0], [53.2, 3.0], [53.3, 3.0], [53.4, 3.0], [53.5, 3.0], [53.6, 3.0], [53.7, 3.0], [53.8, 3.0], [53.9, 3.0], [54.0, 3.0], [54.1, 3.0], [54.2, 3.0], [54.3, 3.0], [54.4, 3.0], [54.5, 3.0], [54.6, 3.0], [54.7, 3.0], [54.8, 3.0], [54.9, 3.0], [55.0, 3.0], [55.1, 3.0], [55.2, 3.0], [55.3, 3.0], [55.4, 3.0], [55.5, 3.0], [55.6, 3.0], [55.7, 3.0], [55.8, 3.0], [55.9, 3.0], [56.0, 3.0], [56.1, 3.0], [56.2, 3.0], [56.3, 3.0], [56.4, 3.0], [56.5, 3.0], [56.6, 3.0], [56.7, 3.0], [56.8, 3.0], [56.9, 3.0], [57.0, 3.0], [57.1, 3.0], [57.2, 3.0], [57.3, 3.0], [57.4, 4.0], [57.5, 4.0], [57.6, 4.0], [57.7, 4.0], [57.8, 4.0], [57.9, 4.0], [58.0, 4.0], [58.1, 4.0], [58.2, 4.0], [58.3, 4.0], [58.4, 4.0], [58.5, 4.0], [58.6, 4.0], [58.7, 4.0], [58.8, 4.0], [58.9, 4.0], [59.0, 4.0], [59.1, 4.0], [59.2, 4.0], [59.3, 4.0], [59.4, 4.0], [59.5, 4.0], [59.6, 4.0], [59.7, 4.0], [59.8, 4.0], [59.9, 4.0], [60.0, 4.0], [60.1, 4.0], [60.2, 4.0], [60.3, 4.0], [60.4, 4.0], [60.5, 4.0], [60.6, 4.0], [60.7, 4.0], [60.8, 4.0], [60.9, 4.0], [61.0, 4.0], [61.1, 4.0], [61.2, 4.0], [61.3, 4.0], [61.4, 4.0], [61.5, 4.0], [61.6, 4.0], [61.7, 4.0], [61.8, 4.0], [61.9, 4.0], [62.0, 4.0], [62.1, 4.0], [62.2, 4.0], [62.3, 4.0], [62.4, 4.0], [62.5, 4.0], [62.6, 4.0], [62.7, 4.0], [62.8, 4.0], [62.9, 4.0], [63.0, 4.0], [63.1, 4.0], [63.2, 4.0], [63.3, 4.0], [63.4, 4.0], [63.5, 4.0], [63.6, 4.0], [63.7, 4.0], [63.8, 4.0], [63.9, 4.0], [64.0, 4.0], [64.1, 4.0], [64.2, 4.0], [64.3, 4.0], [64.4, 4.0], [64.5, 4.0], [64.6, 4.0], [64.7, 4.0], [64.8, 4.0], [64.9, 4.0], [65.0, 4.0], [65.1, 4.0], [65.2, 4.0], [65.3, 4.0], [65.4, 4.0], [65.5, 4.0], [65.6, 4.0], [65.7, 4.0], [65.8, 4.0], [65.9, 4.0], [66.0, 4.0], [66.1, 4.0], [66.2, 4.0], [66.3, 4.0], [66.4, 4.0], [66.5, 4.0], [66.6, 4.0], [66.7, 4.0], [66.8, 4.0], [66.9, 4.0], [67.0, 4.0], [67.1, 4.0], [67.2, 4.0], [67.3, 4.0], [67.4, 4.0], [67.5, 4.0], [67.6, 4.0], [67.7, 4.0], [67.8, 4.0], [67.9, 4.0], [68.0, 4.0], [68.1, 4.0], [68.2, 4.0], [68.3, 4.0], [68.4, 4.0], [68.5, 4.0], [68.6, 4.0], [68.7, 4.0], [68.8, 4.0], [68.9, 4.0], [69.0, 4.0], [69.1, 4.0], [69.2, 4.0], [69.3, 4.0], [69.4, 4.0], [69.5, 4.0], [69.6, 4.0], [69.7, 4.0], [69.8, 4.0], [69.9, 4.0], [70.0, 4.0], [70.1, 4.0], [70.2, 4.0], [70.3, 4.0], [70.4, 4.0], [70.5, 4.0], [70.6, 4.0], [70.7, 4.0], [70.8, 4.0], [70.9, 4.0], [71.0, 4.0], [71.1, 4.0], [71.2, 4.0], [71.3, 4.0], [71.4, 4.0], [71.5, 4.0], [71.6, 4.0], [71.7, 4.0], [71.8, 4.0], [71.9, 4.0], [72.0, 4.0], [72.1, 4.0], [72.2, 4.0], [72.3, 4.0], [72.4, 4.0], [72.5, 4.0], [72.6, 5.0], [72.7, 5.0], [72.8, 5.0], [72.9, 5.0], [73.0, 5.0], [73.1, 5.0], [73.2, 5.0], [73.3, 5.0], [73.4, 5.0], [73.5, 5.0], [73.6, 5.0], [73.7, 5.0], [73.8, 5.0], [73.9, 5.0], [74.0, 5.0], [74.1, 5.0], [74.2, 5.0], [74.3, 5.0], [74.4, 5.0], [74.5, 5.0], [74.6, 5.0], [74.7, 5.0], [74.8, 5.0], [74.9, 5.0], [75.0, 5.0], [75.1, 5.0], [75.2, 5.0], [75.3, 5.0], [75.4, 5.0], [75.5, 5.0], [75.6, 5.0], [75.7, 5.0], [75.8, 5.0], [75.9, 5.0], [76.0, 5.0], [76.1, 5.0], [76.2, 5.0], [76.3, 5.0], [76.4, 5.0], [76.5, 5.0], [76.6, 5.0], [76.7, 5.0], [76.8, 5.0], [76.9, 5.0], [77.0, 5.0], [77.1, 5.0], [77.2, 5.0], [77.3, 5.0], [77.4, 5.0], [77.5, 5.0], [77.6, 5.0], [77.7, 5.0], [77.8, 5.0], [77.9, 5.0], [78.0, 5.0], [78.1, 5.0], [78.2, 5.0], [78.3, 5.0], [78.4, 5.0], [78.5, 5.0], [78.6, 5.0], [78.7, 5.0], [78.8, 5.0], [78.9, 5.0], [79.0, 5.0], [79.1, 5.0], [79.2, 5.0], [79.3, 5.0], [79.4, 5.0], [79.5, 5.0], [79.6, 5.0], [79.7, 5.0], [79.8, 5.0], [79.9, 5.0], [80.0, 5.0], [80.1, 5.0], [80.2, 5.0], [80.3, 5.0], [80.4, 5.0], [80.5, 5.0], [80.6, 5.0], [80.7, 5.0], [80.8, 5.0], [80.9, 5.0], [81.0, 5.0], [81.1, 5.0], [81.2, 5.0], [81.3, 5.0], [81.4, 5.0], [81.5, 5.0], [81.6, 5.0], [81.7, 5.0], [81.8, 5.0], [81.9, 5.0], [82.0, 5.0], [82.1, 5.0], [82.2, 5.0], [82.3, 6.0], [82.4, 6.0], [82.5, 6.0], [82.6, 6.0], [82.7, 6.0], [82.8, 6.0], [82.9, 6.0], [83.0, 6.0], [83.1, 6.0], [83.2, 6.0], [83.3, 6.0], [83.4, 6.0], [83.5, 6.0], [83.6, 6.0], [83.7, 6.0], [83.8, 6.0], [83.9, 6.0], [84.0, 6.0], [84.1, 6.0], [84.2, 6.0], [84.3, 6.0], [84.4, 6.0], [84.5, 6.0], [84.6, 6.0], [84.7, 6.0], [84.8, 6.0], [84.9, 6.0], [85.0, 6.0], [85.1, 6.0], [85.2, 6.0], [85.3, 6.0], [85.4, 6.0], [85.5, 6.0], [85.6, 6.0], [85.7, 6.0], [85.8, 6.0], [85.9, 6.0], [86.0, 6.0], [86.1, 6.0], [86.2, 6.0], [86.3, 6.0], [86.4, 6.0], [86.5, 6.0], [86.6, 6.0], [86.7, 6.0], [86.8, 6.0], [86.9, 6.0], [87.0, 6.0], [87.1, 6.0], [87.2, 6.0], [87.3, 6.0], [87.4, 6.0], [87.5, 6.0], [87.6, 6.0], [87.7, 6.0], [87.8, 6.0], [87.9, 6.0], [88.0, 7.0], [88.1, 7.0], [88.2, 7.0], [88.3, 7.0], [88.4, 7.0], [88.5, 7.0], [88.6, 7.0], [88.7, 7.0], [88.8, 7.0], [88.9, 7.0], [89.0, 7.0], [89.1, 7.0], [89.2, 7.0], [89.3, 7.0], [89.4, 7.0], [89.5, 7.0], [89.6, 7.0], [89.7, 7.0], [89.8, 7.0], [89.9, 7.0], [90.0, 7.0], [90.1, 7.0], [90.2, 7.0], [90.3, 7.0], [90.4, 7.0], [90.5, 7.0], [90.6, 7.0], [90.7, 7.0], [90.8, 7.0], [90.9, 7.0], [91.0, 8.0], [91.1, 8.0], [91.2, 8.0], [91.3, 8.0], [91.4, 8.0], [91.5, 8.0], [91.6, 8.0], [91.7, 8.0], [91.8, 8.0], [91.9, 8.0], [92.0, 8.0], [92.1, 8.0], [92.2, 8.0], [92.3, 8.0], [92.4, 8.0], [92.5, 8.0], [92.6, 8.0], [92.7, 8.0], [92.8, 8.0], [92.9, 8.0], [93.0, 8.0], [93.1, 8.0], [93.2, 8.0], [93.3, 8.0], [93.4, 9.0], [93.5, 9.0], [93.6, 9.0], [93.7, 9.0], [93.8, 9.0], [93.9, 9.0], [94.0, 9.0], [94.1, 9.0], [94.2, 9.0], [94.3, 9.0], [94.4, 9.0], [94.5, 9.0], [94.6, 9.0], [94.7, 9.0], [94.8, 9.0], [94.9, 10.0], [95.0, 10.0], [95.1, 10.0], [95.2, 10.0], [95.3, 10.0], [95.4, 10.0], [95.5, 10.0], [95.6, 10.0], [95.7, 10.0], [95.8, 11.0], [95.9, 11.0], [96.0, 11.0], [96.1, 11.0], [96.2, 11.0], [96.3, 11.0], [96.4, 11.0], [96.5, 12.0], [96.6, 12.0], [96.7, 12.0], [96.8, 12.0], [96.9, 12.0], [97.0, 12.0], [97.1, 12.0], [97.2, 13.0], [97.3, 13.0], [97.4, 13.0], [97.5, 13.0], [97.6, 13.0], [97.7, 14.0], [97.8, 14.0], [97.9, 14.0], [98.0, 14.0], [98.1, 14.0], [98.2, 15.0], [98.3, 15.0], [98.4, 15.0], [98.5, 16.0], [98.6, 16.0], [98.7, 17.0], [98.8, 17.0], [98.9, 18.0], [99.0, 19.0], [99.1, 20.0], [99.2, 20.0], [99.3, 22.0], [99.4, 23.0], [99.5, 25.0], [99.6, 27.0], [99.7, 29.0], [99.8, 32.0], [99.9, 42.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 6503.0, "series": [{"data": [[0.0, 6503.0], [100.0, 1.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 329.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 6175.0, "series": [{"data": [[0.0, 329.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 6175.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.744013867E12, "maxY": 1.0, "series": [{"data": [[1.74401389E12, 1.0], [1.744013889E12, 1.0], [1.744013893E12, 1.0], [1.744013892E12, 1.0], [1.744013891E12, 1.0], [1.744013896E12, 1.0], [1.744013895E12, 1.0], [1.744013894E12, 1.0], [1.744013897E12, 1.0], [1.74401388E12, 1.0], [1.744013879E12, 1.0], [1.744013878E12, 1.0], [1.744013882E12, 1.0], [1.744013881E12, 1.0], [1.744013885E12, 1.0], [1.744013884E12, 1.0], [1.744013883E12, 1.0], [1.744013888E12, 1.0], [1.744013887E12, 1.0], [1.744013886E12, 1.0], [1.744013869E12, 1.0], [1.744013868E12, 1.0], [1.744013867E12, 1.0], [1.744013872E12, 1.0], [1.744013871E12, 1.0], [1.74401387E12, 1.0], [1.744013874E12, 1.0], [1.744013873E12, 1.0], [1.744013877E12, 1.0], [1.744013876E12, 1.0], [1.744013875E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744013897E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4.1509840098401085, "minX": 1.0, "maxY": 4.1509840098401085, "series": [{"data": [[1.0, 4.1509840098401085]], "isOverall": false, "label": "/user/search-4", "isController": false}, {"data": [[1.0, 4.1509840098401085]], "isOverall": false, "label": "/user/search-4-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 10472.0, "minX": 1.744013867E12, "maxY": 777537.0, "series": [{"data": [[1.74401389E12, 217752.0], [1.744013889E12, 69435.0], [1.744013893E12, 368435.0], [1.744013892E12, 337821.0], [1.744013891E12, 121800.0], [1.744013896E12, 270219.0], [1.744013895E12, 525933.0], [1.744013894E12, 249697.0], [1.744013897E12, 87624.0], [1.74401388E12, 208947.0], [1.744013879E12, 157540.0], [1.744013878E12, 254314.0], [1.744013882E12, 209984.0], [1.744013881E12, 200928.0], [1.744013885E12, 209287.0], [1.744013884E12, 777537.0], [1.744013883E12, 346224.0], [1.744013888E12, 293685.0], [1.744013887E12, 183714.0], [1.744013886E12, 370902.0], [1.744013869E12, 148122.0], [1.744013868E12, 157789.0], [1.744013867E12, 163119.0], [1.744013872E12, 393856.0], [1.744013871E12, 250305.0], [1.74401387E12, 328225.0], [1.744013874E12, 455535.0], [1.744013873E12, 570961.0], [1.744013877E12, 243864.0], [1.744013876E12, 320206.0], [1.744013875E12, 423027.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.74401389E12, 36414.0], [1.744013889E12, 50456.0], [1.744013893E12, 75446.0], [1.744013892E12, 59500.0], [1.744013891E12, 41650.0], [1.744013896E12, 45696.0], [1.744013895E12, 62118.0], [1.744013894E12, 61166.0], [1.744013897E12, 30702.0], [1.74401388E12, 45934.0], [1.744013879E12, 46410.0], [1.744013878E12, 52360.0], [1.744013882E12, 60452.0], [1.744013881E12, 45458.0], [1.744013885E12, 44506.0], [1.744013884E12, 57834.0], [1.744013883E12, 58072.0], [1.744013888E12, 55692.0], [1.744013887E12, 59976.0], [1.744013886E12, 51884.0], [1.744013869E12, 47600.0], [1.744013868E12, 36176.0], [1.744013867E12, 10472.0], [1.744013872E12, 53312.0], [1.744013871E12, 44744.0], [1.74401387E12, 57834.0], [1.744013874E12, 57120.0], [1.744013873E12, 52598.0], [1.744013877E12, 38318.0], [1.744013876E12, 62356.0], [1.744013875E12, 45696.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744013897E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 2.892744479495269, "minX": 1.744013867E12, "maxY": 10.045454545454543, "series": [{"data": [[1.74401389E12, 5.666666666666666], [1.744013889E12, 4.3537735849056585], [1.744013893E12, 2.892744479495269], [1.744013892E12, 3.7200000000000015], [1.744013891E12, 5.079999999999999], [1.744013896E12, 4.739583333333333], [1.744013895E12, 3.371647509578543], [1.744013894E12, 3.4708171206225655], [1.744013897E12, 3.604651162790699], [1.74401388E12, 4.663212435233158], [1.744013879E12, 4.4923076923076914], [1.744013878E12, 4.131818181818181], [1.744013882E12, 3.5629921259842536], [1.744013881E12, 4.706806282722512], [1.744013885E12, 4.620320855614976], [1.744013884E12, 3.74485596707819], [1.744013883E12, 3.6967213114754127], [1.744013888E12, 3.923076923076925], [1.744013887E12, 3.488095238095237], [1.744013886E12, 4.110091743119267], [1.744013869E12, 4.614999999999998], [1.744013868E12, 6.302631578947368], [1.744013867E12, 10.045454545454543], [1.744013872E12, 3.92857142857143], [1.744013871E12, 4.595744680851063], [1.74401387E12, 3.728395061728397], [1.744013874E12, 3.7583333333333346], [1.744013873E12, 4.072398190045245], [1.744013877E12, 5.521739130434782], [1.744013876E12, 3.4427480916030553], [1.744013875E12, 4.692708333333332]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744013897E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2.883280757097792, "minX": 1.744013867E12, "maxY": 9.954545454545457, "series": [{"data": [[1.74401389E12, 5.614379084967319], [1.744013889E12, 4.339622641509429], [1.744013893E12, 2.883280757097792], [1.744013892E12, 3.688], [1.744013891E12, 5.0285714285714285], [1.744013896E12, 4.703125000000001], [1.744013895E12, 3.352490421455938], [1.744013894E12, 3.459143968871595], [1.744013897E12, 3.604651162790699], [1.74401388E12, 4.632124352331606], [1.744013879E12, 4.466666666666668], [1.744013878E12, 4.059090909090915], [1.744013882E12, 3.5275590551181097], [1.744013881E12, 4.675392670157066], [1.744013885E12, 4.6042780748663095], [1.744013884E12, 3.6995884773662553], [1.744013883E12, 3.6721311475409837], [1.744013888E12, 3.905982905982906], [1.744013887E12, 3.48015873015873], [1.744013886E12, 4.077981651376145], [1.744013869E12, 4.585000000000002], [1.744013868E12, 6.243421052631579], [1.744013867E12, 9.954545454545457], [1.744013872E12, 3.9151785714285725], [1.744013871E12, 4.537234042553188], [1.74401387E12, 3.7037037037037015], [1.744013874E12, 3.7416666666666663], [1.744013873E12, 4.036199095022622], [1.744013877E12, 5.484472049689439], [1.744013876E12, 3.4160305343511443], [1.744013875E12, 4.656249999999998]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744013897E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.744013867E12, "maxY": 0.11363636363636366, "series": [{"data": [[1.74401389E12, 0.013071895424836603], [1.744013889E12, 0.009433962264150941], [1.744013893E12, 0.0], [1.744013892E12, 0.008000000000000002], [1.744013891E12, 0.005714285714285715], [1.744013896E12, 0.010416666666666668], [1.744013895E12, 0.007662835249042144], [1.744013894E12, 0.0077821011673151735], [1.744013897E12, 0.0], [1.74401388E12, 0.0], [1.744013879E12, 0.005128205128205128], [1.744013878E12, 0.00909090909090909], [1.744013882E12, 0.003937007874015746], [1.744013881E12, 0.005235602094240838], [1.744013885E12, 0.016042780748663114], [1.744013884E12, 0.00411522633744856], [1.744013883E12, 0.0], [1.744013888E12, 0.004273504273504273], [1.744013887E12, 0.011904761904761902], [1.744013886E12, 0.004587155963302752], [1.744013869E12, 0.005000000000000005], [1.744013868E12, 0.006578947368421055], [1.744013867E12, 0.11363636363636366], [1.744013872E12, 0.004464285714285714], [1.744013871E12, 0.0053191489361702135], [1.74401387E12, 0.0041152263374485635], [1.744013874E12, 0.008333333333333331], [1.744013873E12, 0.00904977375565611], [1.744013877E12, 0.01863354037267082], [1.744013876E12, 0.007633587786259541], [1.744013875E12, 0.005208333333333334]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744013897E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.744013867E12, "maxY": 67.0, "series": [{"data": [[1.74401389E12, 25.0], [1.744013889E12, 12.0], [1.744013893E12, 10.0], [1.744013892E12, 17.0], [1.744013891E12, 15.0], [1.744013896E12, 22.0], [1.744013895E12, 20.0], [1.744013894E12, 11.0], [1.744013897E12, 9.0], [1.74401388E12, 30.0], [1.744013879E12, 17.0], [1.744013878E12, 60.0], [1.744013882E12, 16.0], [1.744013881E12, 34.0], [1.744013885E12, 22.0], [1.744013884E12, 22.0], [1.744013883E12, 14.0], [1.744013888E12, 23.0], [1.744013887E12, 12.0], [1.744013886E12, 23.0], [1.744013869E12, 29.0], [1.744013868E12, 34.0], [1.744013867E12, 67.0], [1.744013872E12, 41.0], [1.744013871E12, 24.0], [1.74401387E12, 19.0], [1.744013874E12, 43.0], [1.744013873E12, 36.0], [1.744013877E12, 15.0], [1.744013876E12, 23.0], [1.744013875E12, 32.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.74401389E12, 5.0], [1.744013889E12, 2.0], [1.744013893E12, 2.0], [1.744013892E12, 2.0], [1.744013891E12, 4.0], [1.744013896E12, 5.0], [1.744013895E12, 3.0], [1.744013894E12, 3.0], [1.744013897E12, 4.0], [1.74401388E12, 3.0], [1.744013879E12, 4.0], [1.744013878E12, 3.0], [1.744013882E12, 3.0], [1.744013881E12, 5.0], [1.744013885E12, 4.0], [1.744013884E12, 1.0], [1.744013883E12, 3.0], [1.744013888E12, 3.0], [1.744013887E12, 3.0], [1.744013886E12, 2.0], [1.744013869E12, 4.0], [1.744013868E12, 9.0], [1.744013867E12, 67.0], [1.744013872E12, 5.0], [1.744013871E12, 4.0], [1.74401387E12, 3.0], [1.744013874E12, 3.0], [1.744013873E12, 5.0], [1.744013877E12, 4.0], [1.744013876E12, 3.0], [1.744013875E12, 5.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.74401389E12, 25.0], [1.744013889E12, 12.0], [1.744013893E12, 10.0], [1.744013892E12, 15.200000000000001], [1.744013891E12, 14.9], [1.744013896E12, 21.400000000000002], [1.744013895E12, 15.800000000000004], [1.744013894E12, 10.2], [1.744013897E12, 9.0], [1.74401388E12, 30.0], [1.744013879E12, 17.0], [1.744013878E12, 47.100000000000044], [1.744013882E12, 12.0], [1.744013881E12, 29.800000000000015], [1.744013885E12, 22.0], [1.744013884E12, 20.4], [1.744013883E12, 14.0], [1.744013888E12, 22.400000000000002], [1.744013887E12, 12.0], [1.744013886E12, 17.000000000000004], [1.744013869E12, 23.0], [1.744013868E12, 34.0], [1.744013867E12, 67.0], [1.744013872E12, 41.0], [1.744013871E12, 24.0], [1.74401387E12, 18.8], [1.744013874E12, 42.6], [1.744013873E12, 36.0], [1.744013877E12, 15.0], [1.744013876E12, 18.0], [1.744013875E12, 32.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.74401389E12, 25.0], [1.744013889E12, 12.0], [1.744013893E12, 10.0], [1.744013892E12, 17.0], [1.744013891E12, 15.0], [1.744013896E12, 22.0], [1.744013895E12, 20.0], [1.744013894E12, 11.0], [1.744013897E12, 9.0], [1.74401388E12, 30.0], [1.744013879E12, 17.0], [1.744013878E12, 60.0], [1.744013882E12, 16.0], [1.744013881E12, 34.0], [1.744013885E12, 22.0], [1.744013884E12, 22.0], [1.744013883E12, 14.0], [1.744013888E12, 23.0], [1.744013887E12, 12.0], [1.744013886E12, 23.0], [1.744013869E12, 29.0], [1.744013868E12, 34.0], [1.744013867E12, 67.0], [1.744013872E12, 41.0], [1.744013871E12, 24.0], [1.74401387E12, 19.0], [1.744013874E12, 43.0], [1.744013873E12, 36.0], [1.744013877E12, 15.0], [1.744013876E12, 23.0], [1.744013875E12, 32.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.74401389E12, 12.0], [1.744013889E12, 6.0], [1.744013893E12, 6.0], [1.744013892E12, 7.0], [1.744013891E12, 7.5], [1.744013896E12, 9.0], [1.744013895E12, 7.0], [1.744013894E12, 5.0], [1.744013897E12, 6.0], [1.74401388E12, 7.0], [1.744013879E12, 10.0], [1.744013878E12, 7.0], [1.744013882E12, 4.5], [1.744013881E12, 8.0], [1.744013885E12, 10.0], [1.744013884E12, 9.0], [1.744013883E12, 6.5], [1.744013888E12, 11.0], [1.744013887E12, 7.0], [1.744013886E12, 6.0], [1.744013869E12, 8.5], [1.744013868E12, 14.5], [1.744013867E12, 67.0], [1.744013872E12, 9.0], [1.744013871E12, 19.0], [1.74401387E12, 12.0], [1.744013874E12, 9.0], [1.744013873E12, 17.5], [1.744013877E12, 10.0], [1.744013876E12, 8.0], [1.744013875E12, 11.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.74401389E12, 25.0], [1.744013889E12, 12.0], [1.744013893E12, 10.0], [1.744013892E12, 17.0], [1.744013891E12, 15.0], [1.744013896E12, 22.0], [1.744013895E12, 19.799999999999997], [1.744013894E12, 11.0], [1.744013897E12, 9.0], [1.74401388E12, 30.0], [1.744013879E12, 17.0], [1.744013878E12, 60.0], [1.744013882E12, 16.0], [1.744013881E12, 34.0], [1.744013885E12, 22.0], [1.744013884E12, 22.0], [1.744013883E12, 14.0], [1.744013888E12, 23.0], [1.744013887E12, 12.0], [1.744013886E12, 23.0], [1.744013869E12, 29.0], [1.744013868E12, 34.0], [1.744013867E12, 67.0], [1.744013872E12, 41.0], [1.744013871E12, 24.0], [1.74401387E12, 19.0], [1.744013874E12, 43.0], [1.744013873E12, 36.0], [1.744013877E12, 15.0], [1.744013876E12, 23.0], [1.744013875E12, 32.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744013897E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 2.0, "minX": 44.0, "maxY": 67.0, "series": [{"data": [[44.0, 67.0], [129.0, 6.0], [152.0, 14.5], [153.0, 12.0], [161.0, 10.0], [175.0, 7.5], [188.0, 19.0], [191.0, 8.0], [187.0, 10.0], [192.0, 9.0], [195.0, 10.0], [193.0, 7.0], [200.0, 8.5], [212.0, 6.0], [221.0, 17.5], [220.0, 7.0], [218.0, 6.0], [224.0, 9.0], [234.0, 11.0], [243.0, 9.5], [240.0, 9.0], [244.0, 6.5], [254.0, 4.5], [252.0, 7.0], [250.0, 7.0], [262.0, 8.0], [257.0, 5.0], [261.0, 7.0], [317.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[44.0, 6.0], [129.0, 3.0], [152.0, 5.0], [153.0, 4.5], [161.0, 5.0], [175.0, 5.0], [188.0, 3.0], [191.0, 4.0], [187.0, 3.5], [192.0, 4.0], [195.0, 4.0], [193.0, 4.0], [200.0, 3.0], [212.0, 3.0], [221.0, 3.0], [220.0, 3.0], [218.0, 3.0], [224.0, 3.0], [234.0, 3.0], [243.0, 3.0], [240.0, 3.0], [244.0, 3.0], [254.0, 3.0], [252.0, 3.0], [250.0, 3.0], [262.0, 2.0], [257.0, 3.0], [261.0, 2.0], [317.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 317.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 2.0, "minX": 44.0, "maxY": 65.0, "series": [{"data": [[44.0, 65.0], [129.0, 6.0], [152.0, 13.5], [153.0, 12.0], [161.0, 10.0], [175.0, 7.0], [188.0, 18.0], [191.0, 8.0], [187.0, 10.0], [192.0, 9.0], [195.0, 10.0], [193.0, 7.0], [200.0, 8.5], [212.0, 5.5], [221.0, 16.5], [220.0, 7.0], [218.0, 6.0], [224.0, 9.0], [234.0, 11.0], [243.0, 9.0], [240.0, 9.0], [244.0, 6.5], [254.0, 4.0], [252.0, 7.0], [250.0, 6.0], [262.0, 8.0], [257.0, 5.0], [261.0, 7.0], [317.0, 6.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[44.0, 6.0], [129.0, 3.0], [152.0, 5.0], [153.0, 4.0], [161.0, 5.0], [175.0, 4.0], [188.0, 3.0], [191.0, 4.0], [187.0, 3.5], [192.0, 4.0], [195.0, 3.5], [193.0, 4.0], [200.0, 3.0], [212.0, 3.0], [221.0, 3.0], [220.0, 3.0], [218.0, 3.0], [224.0, 3.0], [234.0, 3.0], [243.0, 3.0], [240.0, 3.0], [244.0, 3.0], [254.0, 3.0], [252.0, 3.0], [250.0, 3.0], [262.0, 2.0], [257.0, 3.0], [261.0, 2.0], [317.0, 2.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 317.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 45.0, "minX": 1.744013867E12, "maxY": 317.0, "series": [{"data": [[1.74401389E12, 153.0], [1.744013889E12, 212.0], [1.744013893E12, 317.0], [1.744013892E12, 250.0], [1.744013891E12, 175.0], [1.744013896E12, 192.0], [1.744013895E12, 261.0], [1.744013894E12, 257.0], [1.744013897E12, 128.0], [1.74401388E12, 193.0], [1.744013879E12, 195.0], [1.744013878E12, 220.0], [1.744013882E12, 254.0], [1.744013881E12, 191.0], [1.744013885E12, 187.0], [1.744013884E12, 243.0], [1.744013883E12, 244.0], [1.744013888E12, 234.0], [1.744013887E12, 252.0], [1.744013886E12, 218.0], [1.744013869E12, 201.0], [1.744013868E12, 151.0], [1.744013867E12, 45.0], [1.744013872E12, 224.0], [1.744013871E12, 188.0], [1.74401387E12, 243.0], [1.744013874E12, 240.0], [1.744013873E12, 221.0], [1.744013877E12, 161.0], [1.744013876E12, 262.0], [1.744013875E12, 192.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744013897E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.744013867E12, "maxY": 304.0, "series": [{"data": [[1.74401389E12, 7.0], [1.744013889E12, 6.0], [1.744013893E12, 13.0], [1.744013892E12, 15.0], [1.744013891E12, 10.0], [1.744013896E12, 12.0], [1.744013895E12, 20.0], [1.744013894E12, 13.0], [1.744013897E12, 5.0], [1.74401388E12, 9.0], [1.744013879E12, 7.0], [1.744013878E12, 12.0], [1.744013882E12, 14.0], [1.744013881E12, 12.0], [1.744013885E12, 7.0], [1.744013884E12, 13.0], [1.744013883E12, 14.0], [1.744013888E12, 11.0], [1.744013887E12, 7.0], [1.744013886E12, 15.0], [1.744013869E12, 14.0], [1.744013868E12, 6.0], [1.744013867E12, 1.0], [1.744013872E12, 9.0], [1.744013871E12, 7.0], [1.74401387E12, 11.0], [1.744013874E12, 13.0], [1.744013873E12, 8.0], [1.744013877E12, 11.0], [1.744013876E12, 19.0], [1.744013875E12, 8.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.74401389E12, 146.0], [1.744013889E12, 206.0], [1.744013893E12, 304.0], [1.744013892E12, 235.0], [1.744013891E12, 165.0], [1.744013896E12, 180.0], [1.744013895E12, 241.0], [1.744013894E12, 244.0], [1.744013897E12, 124.0], [1.74401388E12, 184.0], [1.744013879E12, 188.0], [1.744013878E12, 208.0], [1.744013882E12, 240.0], [1.744013881E12, 179.0], [1.744013885E12, 180.0], [1.744013884E12, 230.0], [1.744013883E12, 230.0], [1.744013888E12, 223.0], [1.744013887E12, 245.0], [1.744013886E12, 203.0], [1.744013869E12, 186.0], [1.744013868E12, 146.0], [1.744013867E12, 43.0], [1.744013872E12, 215.0], [1.744013871E12, 181.0], [1.74401387E12, 232.0], [1.744013874E12, 227.0], [1.744013873E12, 213.0], [1.744013877E12, 150.0], [1.744013876E12, 243.0], [1.744013875E12, 184.0]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.744013897E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.744013867E12, "maxY": 304.0, "series": [{"data": [[1.74401389E12, 146.0], [1.744013889E12, 206.0], [1.744013893E12, 304.0], [1.744013892E12, 235.0], [1.744013891E12, 165.0], [1.744013896E12, 180.0], [1.744013895E12, 241.0], [1.744013894E12, 244.0], [1.744013897E12, 124.0], [1.74401388E12, 184.0], [1.744013879E12, 188.0], [1.744013878E12, 208.0], [1.744013882E12, 240.0], [1.744013881E12, 179.0], [1.744013885E12, 180.0], [1.744013884E12, 230.0], [1.744013883E12, 230.0], [1.744013888E12, 223.0], [1.744013887E12, 245.0], [1.744013886E12, 203.0], [1.744013869E12, 186.0], [1.744013868E12, 146.0], [1.744013867E12, 43.0], [1.744013872E12, 215.0], [1.744013871E12, 181.0], [1.74401387E12, 232.0], [1.744013874E12, 227.0], [1.744013873E12, 213.0], [1.744013877E12, 150.0], [1.744013876E12, 243.0], [1.744013875E12, 184.0]], "isOverall": false, "label": "/user/search-4-failure", "isController": false}, {"data": [[1.74401389E12, 7.0], [1.744013889E12, 6.0], [1.744013893E12, 13.0], [1.744013892E12, 15.0], [1.744013891E12, 10.0], [1.744013896E12, 12.0], [1.744013895E12, 20.0], [1.744013894E12, 13.0], [1.744013897E12, 5.0], [1.74401388E12, 9.0], [1.744013879E12, 7.0], [1.744013878E12, 12.0], [1.744013882E12, 14.0], [1.744013881E12, 12.0], [1.744013885E12, 7.0], [1.744013884E12, 13.0], [1.744013883E12, 14.0], [1.744013888E12, 11.0], [1.744013887E12, 7.0], [1.744013886E12, 15.0], [1.744013869E12, 14.0], [1.744013868E12, 6.0], [1.744013867E12, 1.0], [1.744013872E12, 9.0], [1.744013871E12, 7.0], [1.74401387E12, 11.0], [1.744013874E12, 13.0], [1.744013873E12, 8.0], [1.744013877E12, 11.0], [1.744013876E12, 19.0], [1.744013875E12, 8.0]], "isOverall": false, "label": "/user/search-4-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744013897E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.744013867E12, "maxY": 304.0, "series": [{"data": [[1.74401389E12, 7.0], [1.744013889E12, 6.0], [1.744013893E12, 13.0], [1.744013892E12, 15.0], [1.744013891E12, 10.0], [1.744013896E12, 12.0], [1.744013895E12, 20.0], [1.744013894E12, 13.0], [1.744013897E12, 5.0], [1.74401388E12, 9.0], [1.744013879E12, 7.0], [1.744013878E12, 12.0], [1.744013882E12, 14.0], [1.744013881E12, 12.0], [1.744013885E12, 7.0], [1.744013884E12, 13.0], [1.744013883E12, 14.0], [1.744013888E12, 11.0], [1.744013887E12, 7.0], [1.744013886E12, 15.0], [1.744013869E12, 14.0], [1.744013868E12, 6.0], [1.744013867E12, 1.0], [1.744013872E12, 9.0], [1.744013871E12, 7.0], [1.74401387E12, 11.0], [1.744013874E12, 13.0], [1.744013873E12, 8.0], [1.744013877E12, 11.0], [1.744013876E12, 19.0], [1.744013875E12, 8.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.74401389E12, 146.0], [1.744013889E12, 206.0], [1.744013893E12, 304.0], [1.744013892E12, 235.0], [1.744013891E12, 165.0], [1.744013896E12, 180.0], [1.744013895E12, 241.0], [1.744013894E12, 244.0], [1.744013897E12, 124.0], [1.74401388E12, 184.0], [1.744013879E12, 188.0], [1.744013878E12, 208.0], [1.744013882E12, 240.0], [1.744013881E12, 179.0], [1.744013885E12, 180.0], [1.744013884E12, 230.0], [1.744013883E12, 230.0], [1.744013888E12, 223.0], [1.744013887E12, 245.0], [1.744013886E12, 203.0], [1.744013869E12, 186.0], [1.744013868E12, 146.0], [1.744013867E12, 43.0], [1.744013872E12, 215.0], [1.744013871E12, 181.0], [1.74401387E12, 232.0], [1.744013874E12, 227.0], [1.744013873E12, 213.0], [1.744013877E12, 150.0], [1.744013876E12, 243.0], [1.744013875E12, 184.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.744013897E12, "title": "Total Transactions Per Second"}},
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

