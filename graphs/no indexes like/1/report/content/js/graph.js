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
        data: {"result": {"minY": 506.0, "minX": 0.0, "maxY": 886.0, "series": [{"data": [[0.0, 506.0], [0.1, 506.0], [0.2, 506.0], [0.3, 506.0], [0.4, 506.0], [0.5, 506.0], [0.6, 506.0], [0.7, 506.0], [0.8, 506.0], [0.9, 506.0], [1.0, 506.0], [1.1, 506.0], [1.2, 506.0], [1.3, 506.0], [1.4, 506.0], [1.5, 506.0], [1.6, 506.0], [1.7, 506.0], [1.8, 506.0], [1.9, 506.0], [2.0, 506.0], [2.1, 506.0], [2.2, 506.0], [2.3, 506.0], [2.4, 506.0], [2.5, 506.0], [2.6, 506.0], [2.7, 506.0], [2.8, 506.0], [2.9, 506.0], [3.0, 506.0], [3.1, 506.0], [3.2, 506.0], [3.3, 506.0], [3.4, 506.0], [3.5, 506.0], [3.6, 506.0], [3.7, 506.0], [3.8, 506.0], [3.9, 506.0], [4.0, 506.0], [4.1, 506.0], [4.2, 506.0], [4.3, 506.0], [4.4, 506.0], [4.5, 506.0], [4.6, 506.0], [4.7, 506.0], [4.8, 506.0], [4.9, 506.0], [5.0, 506.0], [5.1, 506.0], [5.2, 506.0], [5.3, 506.0], [5.4, 506.0], [5.5, 507.0], [5.6, 507.0], [5.7, 507.0], [5.8, 507.0], [5.9, 507.0], [6.0, 507.0], [6.1, 507.0], [6.2, 507.0], [6.3, 507.0], [6.4, 507.0], [6.5, 507.0], [6.6, 507.0], [6.7, 507.0], [6.8, 507.0], [6.9, 507.0], [7.0, 507.0], [7.1, 507.0], [7.2, 507.0], [7.3, 507.0], [7.4, 507.0], [7.5, 507.0], [7.6, 507.0], [7.7, 507.0], [7.8, 507.0], [7.9, 507.0], [8.0, 507.0], [8.1, 507.0], [8.2, 507.0], [8.3, 507.0], [8.4, 507.0], [8.5, 507.0], [8.6, 507.0], [8.7, 507.0], [8.8, 507.0], [8.9, 507.0], [9.0, 507.0], [9.1, 507.0], [9.2, 507.0], [9.3, 507.0], [9.4, 507.0], [9.5, 507.0], [9.6, 507.0], [9.7, 507.0], [9.8, 507.0], [9.9, 507.0], [10.0, 507.0], [10.1, 507.0], [10.2, 507.0], [10.3, 507.0], [10.4, 507.0], [10.5, 507.0], [10.6, 507.0], [10.7, 507.0], [10.8, 507.0], [10.9, 507.0], [11.0, 507.0], [11.1, 507.0], [11.2, 507.0], [11.3, 507.0], [11.4, 507.0], [11.5, 507.0], [11.6, 507.0], [11.7, 507.0], [11.8, 507.0], [11.9, 507.0], [12.0, 507.0], [12.1, 507.0], [12.2, 507.0], [12.3, 507.0], [12.4, 507.0], [12.5, 507.0], [12.6, 507.0], [12.7, 507.0], [12.8, 509.0], [12.9, 509.0], [13.0, 509.0], [13.1, 509.0], [13.2, 509.0], [13.3, 509.0], [13.4, 509.0], [13.5, 509.0], [13.6, 509.0], [13.7, 509.0], [13.8, 509.0], [13.9, 509.0], [14.0, 509.0], [14.1, 509.0], [14.2, 509.0], [14.3, 509.0], [14.4, 509.0], [14.5, 509.0], [14.6, 509.0], [14.7, 509.0], [14.8, 509.0], [14.9, 509.0], [15.0, 509.0], [15.1, 509.0], [15.2, 509.0], [15.3, 509.0], [15.4, 509.0], [15.5, 509.0], [15.6, 509.0], [15.7, 509.0], [15.8, 509.0], [15.9, 509.0], [16.0, 509.0], [16.1, 509.0], [16.2, 509.0], [16.3, 509.0], [16.4, 510.0], [16.5, 510.0], [16.6, 510.0], [16.7, 510.0], [16.8, 510.0], [16.9, 510.0], [17.0, 510.0], [17.1, 510.0], [17.2, 510.0], [17.3, 510.0], [17.4, 510.0], [17.5, 510.0], [17.6, 510.0], [17.7, 510.0], [17.8, 510.0], [17.9, 510.0], [18.0, 510.0], [18.1, 510.0], [18.2, 510.0], [18.3, 510.0], [18.4, 510.0], [18.5, 510.0], [18.6, 510.0], [18.7, 510.0], [18.8, 510.0], [18.9, 510.0], [19.0, 510.0], [19.1, 510.0], [19.2, 510.0], [19.3, 510.0], [19.4, 510.0], [19.5, 510.0], [19.6, 510.0], [19.7, 510.0], [19.8, 510.0], [19.9, 510.0], [20.0, 511.0], [20.1, 511.0], [20.2, 511.0], [20.3, 511.0], [20.4, 511.0], [20.5, 511.0], [20.6, 511.0], [20.7, 511.0], [20.8, 511.0], [20.9, 511.0], [21.0, 511.0], [21.1, 511.0], [21.2, 511.0], [21.3, 511.0], [21.4, 511.0], [21.5, 511.0], [21.6, 511.0], [21.7, 511.0], [21.8, 511.0], [21.9, 511.0], [22.0, 511.0], [22.1, 511.0], [22.2, 511.0], [22.3, 511.0], [22.4, 511.0], [22.5, 511.0], [22.6, 511.0], [22.7, 511.0], [22.8, 511.0], [22.9, 511.0], [23.0, 511.0], [23.1, 511.0], [23.2, 511.0], [23.3, 511.0], [23.4, 511.0], [23.5, 511.0], [23.6, 511.0], [23.7, 511.0], [23.8, 511.0], [23.9, 511.0], [24.0, 511.0], [24.1, 511.0], [24.2, 511.0], [24.3, 511.0], [24.4, 511.0], [24.5, 511.0], [24.6, 511.0], [24.7, 511.0], [24.8, 511.0], [24.9, 511.0], [25.0, 511.0], [25.1, 511.0], [25.2, 511.0], [25.3, 511.0], [25.4, 511.0], [25.5, 512.0], [25.6, 512.0], [25.7, 512.0], [25.8, 512.0], [25.9, 512.0], [26.0, 512.0], [26.1, 512.0], [26.2, 512.0], [26.3, 512.0], [26.4, 512.0], [26.5, 512.0], [26.6, 512.0], [26.7, 512.0], [26.8, 512.0], [26.9, 512.0], [27.0, 512.0], [27.1, 512.0], [27.2, 512.0], [27.3, 512.0], [27.4, 512.0], [27.5, 512.0], [27.6, 512.0], [27.7, 512.0], [27.8, 512.0], [27.9, 512.0], [28.0, 512.0], [28.1, 512.0], [28.2, 512.0], [28.3, 512.0], [28.4, 512.0], [28.5, 512.0], [28.6, 512.0], [28.7, 512.0], [28.8, 512.0], [28.9, 512.0], [29.0, 512.0], [29.1, 512.0], [29.2, 512.0], [29.3, 512.0], [29.4, 512.0], [29.5, 512.0], [29.6, 512.0], [29.7, 512.0], [29.8, 512.0], [29.9, 512.0], [30.0, 512.0], [30.1, 512.0], [30.2, 512.0], [30.3, 512.0], [30.4, 512.0], [30.5, 512.0], [30.6, 512.0], [30.7, 512.0], [30.8, 512.0], [30.9, 512.0], [31.0, 513.0], [31.1, 513.0], [31.2, 513.0], [31.3, 513.0], [31.4, 513.0], [31.5, 513.0], [31.6, 513.0], [31.7, 513.0], [31.8, 513.0], [31.9, 513.0], [32.0, 513.0], [32.1, 513.0], [32.2, 513.0], [32.3, 513.0], [32.4, 513.0], [32.5, 513.0], [32.6, 513.0], [32.7, 513.0], [32.8, 514.0], [32.9, 514.0], [33.0, 514.0], [33.1, 514.0], [33.2, 514.0], [33.3, 514.0], [33.4, 514.0], [33.5, 514.0], [33.6, 514.0], [33.7, 514.0], [33.8, 514.0], [33.9, 514.0], [34.0, 514.0], [34.1, 514.0], [34.2, 514.0], [34.3, 514.0], [34.4, 514.0], [34.5, 514.0], [34.6, 514.0], [34.7, 514.0], [34.8, 514.0], [34.9, 514.0], [35.0, 514.0], [35.1, 514.0], [35.2, 514.0], [35.3, 514.0], [35.4, 514.0], [35.5, 514.0], [35.6, 514.0], [35.7, 514.0], [35.8, 514.0], [35.9, 514.0], [36.0, 514.0], [36.1, 514.0], [36.2, 514.0], [36.3, 514.0], [36.4, 515.0], [36.5, 515.0], [36.6, 515.0], [36.7, 515.0], [36.8, 515.0], [36.9, 515.0], [37.0, 515.0], [37.1, 515.0], [37.2, 515.0], [37.3, 515.0], [37.4, 515.0], [37.5, 515.0], [37.6, 515.0], [37.7, 515.0], [37.8, 515.0], [37.9, 515.0], [38.0, 515.0], [38.1, 515.0], [38.2, 516.0], [38.3, 516.0], [38.4, 516.0], [38.5, 516.0], [38.6, 516.0], [38.7, 516.0], [38.8, 516.0], [38.9, 516.0], [39.0, 516.0], [39.1, 516.0], [39.2, 516.0], [39.3, 516.0], [39.4, 516.0], [39.5, 516.0], [39.6, 516.0], [39.7, 516.0], [39.8, 516.0], [39.9, 516.0], [40.0, 518.0], [40.1, 518.0], [40.2, 518.0], [40.3, 518.0], [40.4, 518.0], [40.5, 518.0], [40.6, 518.0], [40.7, 518.0], [40.8, 518.0], [40.9, 518.0], [41.0, 518.0], [41.1, 518.0], [41.2, 518.0], [41.3, 518.0], [41.4, 518.0], [41.5, 518.0], [41.6, 518.0], [41.7, 518.0], [41.8, 518.0], [41.9, 518.0], [42.0, 518.0], [42.1, 518.0], [42.2, 518.0], [42.3, 518.0], [42.4, 518.0], [42.5, 518.0], [42.6, 518.0], [42.7, 518.0], [42.8, 518.0], [42.9, 518.0], [43.0, 518.0], [43.1, 518.0], [43.2, 518.0], [43.3, 518.0], [43.4, 518.0], [43.5, 518.0], [43.6, 518.0], [43.7, 520.0], [43.8, 520.0], [43.9, 520.0], [44.0, 520.0], [44.1, 520.0], [44.2, 520.0], [44.3, 520.0], [44.4, 520.0], [44.5, 520.0], [44.6, 520.0], [44.7, 520.0], [44.8, 520.0], [44.9, 520.0], [45.0, 520.0], [45.1, 520.0], [45.2, 520.0], [45.3, 520.0], [45.4, 520.0], [45.5, 521.0], [45.6, 521.0], [45.7, 521.0], [45.8, 521.0], [45.9, 521.0], [46.0, 521.0], [46.1, 521.0], [46.2, 521.0], [46.3, 521.0], [46.4, 521.0], [46.5, 521.0], [46.6, 521.0], [46.7, 521.0], [46.8, 521.0], [46.9, 521.0], [47.0, 521.0], [47.1, 521.0], [47.2, 521.0], [47.3, 522.0], [47.4, 522.0], [47.5, 522.0], [47.6, 522.0], [47.7, 522.0], [47.8, 522.0], [47.9, 522.0], [48.0, 522.0], [48.1, 522.0], [48.2, 522.0], [48.3, 522.0], [48.4, 522.0], [48.5, 522.0], [48.6, 522.0], [48.7, 522.0], [48.8, 522.0], [48.9, 522.0], [49.0, 522.0], [49.1, 526.0], [49.2, 526.0], [49.3, 526.0], [49.4, 526.0], [49.5, 526.0], [49.6, 526.0], [49.7, 526.0], [49.8, 526.0], [49.9, 526.0], [50.0, 526.0], [50.1, 526.0], [50.2, 526.0], [50.3, 526.0], [50.4, 526.0], [50.5, 526.0], [50.6, 526.0], [50.7, 526.0], [50.8, 526.0], [50.9, 526.0], [51.0, 526.0], [51.1, 526.0], [51.2, 526.0], [51.3, 526.0], [51.4, 526.0], [51.5, 526.0], [51.6, 526.0], [51.7, 526.0], [51.8, 526.0], [51.9, 526.0], [52.0, 526.0], [52.1, 526.0], [52.2, 526.0], [52.3, 526.0], [52.4, 526.0], [52.5, 526.0], [52.6, 526.0], [52.7, 526.0], [52.8, 527.0], [52.9, 527.0], [53.0, 527.0], [53.1, 527.0], [53.2, 527.0], [53.3, 527.0], [53.4, 527.0], [53.5, 527.0], [53.6, 527.0], [53.7, 527.0], [53.8, 527.0], [53.9, 527.0], [54.0, 527.0], [54.1, 527.0], [54.2, 527.0], [54.3, 527.0], [54.4, 527.0], [54.5, 527.0], [54.6, 530.0], [54.7, 530.0], [54.8, 530.0], [54.9, 530.0], [55.0, 530.0], [55.1, 530.0], [55.2, 530.0], [55.3, 530.0], [55.4, 530.0], [55.5, 530.0], [55.6, 530.0], [55.7, 530.0], [55.8, 530.0], [55.9, 530.0], [56.0, 530.0], [56.1, 530.0], [56.2, 530.0], [56.3, 530.0], [56.4, 530.0], [56.5, 530.0], [56.6, 530.0], [56.7, 530.0], [56.8, 530.0], [56.9, 530.0], [57.0, 530.0], [57.1, 530.0], [57.2, 530.0], [57.3, 530.0], [57.4, 530.0], [57.5, 530.0], [57.6, 530.0], [57.7, 530.0], [57.8, 530.0], [57.9, 530.0], [58.0, 530.0], [58.1, 530.0], [58.2, 533.0], [58.3, 533.0], [58.4, 533.0], [58.5, 533.0], [58.6, 533.0], [58.7, 533.0], [58.8, 533.0], [58.9, 533.0], [59.0, 533.0], [59.1, 533.0], [59.2, 533.0], [59.3, 533.0], [59.4, 533.0], [59.5, 533.0], [59.6, 533.0], [59.7, 533.0], [59.8, 533.0], [59.9, 533.0], [60.0, 534.0], [60.1, 534.0], [60.2, 534.0], [60.3, 534.0], [60.4, 534.0], [60.5, 534.0], [60.6, 534.0], [60.7, 534.0], [60.8, 534.0], [60.9, 534.0], [61.0, 534.0], [61.1, 534.0], [61.2, 534.0], [61.3, 534.0], [61.4, 534.0], [61.5, 534.0], [61.6, 534.0], [61.7, 534.0], [61.8, 534.0], [61.9, 546.0], [62.0, 546.0], [62.1, 546.0], [62.2, 546.0], [62.3, 546.0], [62.4, 546.0], [62.5, 546.0], [62.6, 546.0], [62.7, 546.0], [62.8, 546.0], [62.9, 546.0], [63.0, 546.0], [63.1, 546.0], [63.2, 546.0], [63.3, 546.0], [63.4, 546.0], [63.5, 546.0], [63.6, 546.0], [63.7, 550.0], [63.8, 550.0], [63.9, 550.0], [64.0, 550.0], [64.1, 550.0], [64.2, 550.0], [64.3, 550.0], [64.4, 550.0], [64.5, 550.0], [64.6, 550.0], [64.7, 550.0], [64.8, 550.0], [64.9, 550.0], [65.0, 550.0], [65.1, 550.0], [65.2, 550.0], [65.3, 550.0], [65.4, 550.0], [65.5, 550.0], [65.6, 550.0], [65.7, 550.0], [65.8, 550.0], [65.9, 550.0], [66.0, 550.0], [66.1, 550.0], [66.2, 550.0], [66.3, 550.0], [66.4, 550.0], [66.5, 550.0], [66.6, 550.0], [66.7, 550.0], [66.8, 550.0], [66.9, 550.0], [67.0, 550.0], [67.1, 550.0], [67.2, 550.0], [67.3, 551.0], [67.4, 551.0], [67.5, 551.0], [67.6, 551.0], [67.7, 551.0], [67.8, 551.0], [67.9, 551.0], [68.0, 551.0], [68.1, 551.0], [68.2, 551.0], [68.3, 551.0], [68.4, 551.0], [68.5, 551.0], [68.6, 551.0], [68.7, 551.0], [68.8, 551.0], [68.9, 551.0], [69.0, 551.0], [69.1, 552.0], [69.2, 552.0], [69.3, 552.0], [69.4, 552.0], [69.5, 552.0], [69.6, 552.0], [69.7, 552.0], [69.8, 552.0], [69.9, 552.0], [70.0, 552.0], [70.1, 552.0], [70.2, 552.0], [70.3, 552.0], [70.4, 552.0], [70.5, 552.0], [70.6, 552.0], [70.7, 552.0], [70.8, 552.0], [70.9, 552.0], [71.0, 557.0], [71.1, 557.0], [71.2, 557.0], [71.3, 557.0], [71.4, 557.0], [71.5, 557.0], [71.6, 557.0], [71.7, 557.0], [71.8, 557.0], [71.9, 557.0], [72.0, 557.0], [72.1, 557.0], [72.2, 557.0], [72.3, 557.0], [72.4, 557.0], [72.5, 557.0], [72.6, 557.0], [72.7, 557.0], [72.8, 562.0], [72.9, 562.0], [73.0, 562.0], [73.1, 562.0], [73.2, 562.0], [73.3, 562.0], [73.4, 562.0], [73.5, 562.0], [73.6, 562.0], [73.7, 562.0], [73.8, 562.0], [73.9, 562.0], [74.0, 562.0], [74.1, 562.0], [74.2, 562.0], [74.3, 562.0], [74.4, 562.0], [74.5, 562.0], [74.6, 567.0], [74.7, 567.0], [74.8, 567.0], [74.9, 567.0], [75.0, 567.0], [75.1, 567.0], [75.2, 567.0], [75.3, 567.0], [75.4, 567.0], [75.5, 567.0], [75.6, 567.0], [75.7, 567.0], [75.8, 567.0], [75.9, 567.0], [76.0, 567.0], [76.1, 567.0], [76.2, 567.0], [76.3, 567.0], [76.4, 577.0], [76.5, 577.0], [76.6, 577.0], [76.7, 577.0], [76.8, 577.0], [76.9, 577.0], [77.0, 577.0], [77.1, 577.0], [77.2, 577.0], [77.3, 577.0], [77.4, 577.0], [77.5, 577.0], [77.6, 577.0], [77.7, 577.0], [77.8, 577.0], [77.9, 577.0], [78.0, 577.0], [78.1, 577.0], [78.2, 581.0], [78.3, 581.0], [78.4, 581.0], [78.5, 581.0], [78.6, 581.0], [78.7, 581.0], [78.8, 581.0], [78.9, 581.0], [79.0, 581.0], [79.1, 581.0], [79.2, 581.0], [79.3, 581.0], [79.4, 581.0], [79.5, 581.0], [79.6, 581.0], [79.7, 581.0], [79.8, 581.0], [79.9, 581.0], [80.0, 586.0], [80.1, 586.0], [80.2, 586.0], [80.3, 586.0], [80.4, 586.0], [80.5, 586.0], [80.6, 586.0], [80.7, 586.0], [80.8, 586.0], [80.9, 586.0], [81.0, 586.0], [81.1, 586.0], [81.2, 586.0], [81.3, 586.0], [81.4, 586.0], [81.5, 586.0], [81.6, 586.0], [81.7, 586.0], [81.8, 586.0], [81.9, 588.0], [82.0, 588.0], [82.1, 588.0], [82.2, 588.0], [82.3, 588.0], [82.4, 588.0], [82.5, 588.0], [82.6, 588.0], [82.7, 588.0], [82.8, 588.0], [82.9, 588.0], [83.0, 588.0], [83.1, 588.0], [83.2, 588.0], [83.3, 588.0], [83.4, 588.0], [83.5, 588.0], [83.6, 588.0], [83.7, 590.0], [83.8, 590.0], [83.9, 590.0], [84.0, 590.0], [84.1, 590.0], [84.2, 590.0], [84.3, 590.0], [84.4, 590.0], [84.5, 590.0], [84.6, 590.0], [84.7, 590.0], [84.8, 590.0], [84.9, 590.0], [85.0, 590.0], [85.1, 590.0], [85.2, 590.0], [85.3, 590.0], [85.4, 590.0], [85.5, 597.0], [85.6, 597.0], [85.7, 597.0], [85.8, 597.0], [85.9, 597.0], [86.0, 597.0], [86.1, 597.0], [86.2, 597.0], [86.3, 597.0], [86.4, 597.0], [86.5, 597.0], [86.6, 597.0], [86.7, 597.0], [86.8, 597.0], [86.9, 597.0], [87.0, 597.0], [87.1, 597.0], [87.2, 597.0], [87.3, 605.0], [87.4, 605.0], [87.5, 605.0], [87.6, 605.0], [87.7, 605.0], [87.8, 605.0], [87.9, 605.0], [88.0, 605.0], [88.1, 605.0], [88.2, 605.0], [88.3, 605.0], [88.4, 605.0], [88.5, 605.0], [88.6, 605.0], [88.7, 605.0], [88.8, 605.0], [88.9, 605.0], [89.0, 605.0], [89.1, 612.0], [89.2, 612.0], [89.3, 612.0], [89.4, 612.0], [89.5, 612.0], [89.6, 612.0], [89.7, 612.0], [89.8, 612.0], [89.9, 612.0], [90.0, 612.0], [90.1, 612.0], [90.2, 612.0], [90.3, 612.0], [90.4, 612.0], [90.5, 612.0], [90.6, 612.0], [90.7, 612.0], [90.8, 612.0], [90.9, 612.0], [91.0, 635.0], [91.1, 635.0], [91.2, 635.0], [91.3, 635.0], [91.4, 635.0], [91.5, 635.0], [91.6, 635.0], [91.7, 635.0], [91.8, 635.0], [91.9, 635.0], [92.0, 635.0], [92.1, 635.0], [92.2, 635.0], [92.3, 635.0], [92.4, 635.0], [92.5, 635.0], [92.6, 635.0], [92.7, 635.0], [92.8, 656.0], [92.9, 656.0], [93.0, 656.0], [93.1, 656.0], [93.2, 656.0], [93.3, 656.0], [93.4, 656.0], [93.5, 656.0], [93.6, 656.0], [93.7, 656.0], [93.8, 656.0], [93.9, 656.0], [94.0, 656.0], [94.1, 656.0], [94.2, 656.0], [94.3, 656.0], [94.4, 656.0], [94.5, 656.0], [94.6, 665.0], [94.7, 665.0], [94.8, 665.0], [94.9, 665.0], [95.0, 665.0], [95.1, 665.0], [95.2, 665.0], [95.3, 665.0], [95.4, 665.0], [95.5, 665.0], [95.6, 665.0], [95.7, 665.0], [95.8, 665.0], [95.9, 665.0], [96.0, 665.0], [96.1, 665.0], [96.2, 665.0], [96.3, 665.0], [96.4, 699.0], [96.5, 699.0], [96.6, 699.0], [96.7, 699.0], [96.8, 699.0], [96.9, 699.0], [97.0, 699.0], [97.1, 699.0], [97.2, 699.0], [97.3, 699.0], [97.4, 699.0], [97.5, 699.0], [97.6, 699.0], [97.7, 699.0], [97.8, 699.0], [97.9, 699.0], [98.0, 699.0], [98.1, 699.0], [98.2, 886.0], [98.3, 886.0], [98.4, 886.0], [98.5, 886.0], [98.6, 886.0], [98.7, 886.0], [98.8, 886.0], [98.9, 886.0], [99.0, 886.0], [99.1, 886.0], [99.2, 886.0], [99.3, 886.0], [99.4, 886.0], [99.5, 886.0], [99.6, 886.0], [99.7, 886.0], [99.8, 886.0], [99.9, 886.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 500.0, "maxY": 48.0, "series": [{"data": [[600.0, 6.0], [800.0, 1.0], [500.0, 48.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 50.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.743939076E12, "maxY": 1.0, "series": [{"data": [[1.743939101E12, 1.0], [1.7439391E12, 1.0], [1.743939099E12, 1.0], [1.743939104E12, 1.0], [1.743939103E12, 1.0], [1.743939102E12, 1.0], [1.743939096E12, 1.0], [1.743939095E12, 1.0], [1.743939094E12, 1.0], [1.743939098E12, 1.0], [1.743939097E12, 1.0], [1.743939105E12, 1.0], [1.74393908E12, 1.0], [1.743939079E12, 1.0], [1.743939078E12, 1.0], [1.743939082E12, 1.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939076E12, 1.0], [1.74393909E12, 1.0], [1.743939089E12, 1.0], [1.743939093E12, 1.0], [1.743939092E12, 1.0], [1.743939091E12, 1.0], [1.743939085E12, 1.0], [1.743939084E12, 1.0], [1.743939083E12, 1.0], [1.743939088E12, 1.0], [1.743939087E12, 1.0], [1.743939086E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.743939105E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 549.8545454545455, "minX": 1.0, "maxY": 549.8545454545455, "series": [{"data": [[1.0, 549.8545454545455]], "isOverall": false, "label": "/user/search-4", "isController": false}, {"data": [[1.0, 549.8545454545455]], "isOverall": false, "label": "/user/search-4-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 174.0, "minX": 1.743939076E12, "maxY": 58047.0, "series": [{"data": [[1.743939101E12, 348.0], [1.7439391E12, 348.0], [1.743939099E12, 55502.0], [1.743939104E12, 348.0], [1.743939103E12, 58047.0], [1.743939102E12, 174.0], [1.743939096E12, 348.0], [1.743939095E12, 348.0], [1.743939094E12, 348.0], [1.743939098E12, 174.0], [1.743939097E12, 1337.0], [1.743939105E12, 348.0], [1.74393908E12, 348.0], [1.743939079E12, 348.0], [1.743939078E12, 348.0], [1.743939082E12, 348.0], [1.743939081E12, 3033.0], [1.743939077E12, 12651.0], [1.743939076E12, 174.0], [1.74393909E12, 348.0], [1.743939089E12, 348.0], [1.743939093E12, 174.0], [1.743939092E12, 348.0], [1.743939091E12, 348.0], [1.743939085E12, 348.0], [1.743939084E12, 348.0], [1.743939083E12, 174.0], [1.743939088E12, 348.0], [1.743939087E12, 348.0], [1.743939086E12, 348.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.743939101E12, 476.0], [1.7439391E12, 476.0], [1.743939099E12, 476.0], [1.743939104E12, 476.0], [1.743939103E12, 476.0], [1.743939102E12, 238.0], [1.743939096E12, 476.0], [1.743939095E12, 476.0], [1.743939094E12, 476.0], [1.743939098E12, 238.0], [1.743939097E12, 476.0], [1.743939105E12, 476.0], [1.74393908E12, 476.0], [1.743939079E12, 476.0], [1.743939078E12, 476.0], [1.743939082E12, 476.0], [1.743939081E12, 476.0], [1.743939077E12, 476.0], [1.743939076E12, 238.0], [1.74393909E12, 476.0], [1.743939089E12, 476.0], [1.743939093E12, 238.0], [1.743939092E12, 476.0], [1.743939091E12, 476.0], [1.743939085E12, 476.0], [1.743939084E12, 476.0], [1.743939083E12, 238.0], [1.743939088E12, 476.0], [1.743939087E12, 476.0], [1.743939086E12, 476.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.743939105E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 506.0, "minX": 1.743939076E12, "maxY": 886.0, "series": [{"data": [[1.743939101E12, 524.0], [1.7439391E12, 569.5], [1.743939099E12, 621.0], [1.743939104E12, 563.5], [1.743939103E12, 652.0], [1.743939102E12, 516.0], [1.743939096E12, 550.0], [1.743939095E12, 576.5], [1.743939094E12, 532.0], [1.743939098E12, 588.0], [1.743939097E12, 533.5], [1.743939105E12, 533.0], [1.74393908E12, 554.0], [1.743939079E12, 594.5], [1.743939078E12, 511.5], [1.743939082E12, 506.0], [1.743939081E12, 517.5], [1.743939077E12, 537.5], [1.743939076E12, 886.0], [1.74393909E12, 510.5], [1.743939089E12, 508.5], [1.743939093E12, 513.0], [1.743939092E12, 506.5], [1.743939091E12, 510.5], [1.743939085E12, 532.0], [1.743939084E12, 509.5], [1.743939083E12, 509.0], [1.743939088E12, 512.5], [1.743939087E12, 550.5], [1.743939086E12, 598.5]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.743939105E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 506.0, "minX": 1.743939076E12, "maxY": 886.0, "series": [{"data": [[1.743939101E12, 523.5], [1.7439391E12, 569.5], [1.743939099E12, 620.5], [1.743939104E12, 563.5], [1.743939103E12, 650.5], [1.743939102E12, 515.0], [1.743939096E12, 550.0], [1.743939095E12, 576.5], [1.743939094E12, 532.0], [1.743939098E12, 588.0], [1.743939097E12, 533.0], [1.743939105E12, 532.5], [1.74393908E12, 554.0], [1.743939079E12, 594.5], [1.743939078E12, 511.5], [1.743939082E12, 506.0], [1.743939081E12, 517.0], [1.743939077E12, 537.0], [1.743939076E12, 886.0], [1.74393909E12, 510.5], [1.743939089E12, 508.0], [1.743939093E12, 513.0], [1.743939092E12, 506.5], [1.743939091E12, 510.0], [1.743939085E12, 532.0], [1.743939084E12, 509.5], [1.743939083E12, 508.0], [1.743939088E12, 512.5], [1.743939087E12, 550.5], [1.743939086E12, 598.5]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.743939105E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.743939076E12, "maxY": 4.0, "series": [{"data": [[1.743939101E12, 0.0], [1.7439391E12, 0.0], [1.743939099E12, 0.0], [1.743939104E12, 0.0], [1.743939103E12, 0.0], [1.743939102E12, 0.0], [1.743939096E12, 0.0], [1.743939095E12, 0.0], [1.743939094E12, 0.0], [1.743939098E12, 0.0], [1.743939097E12, 0.0], [1.743939105E12, 0.0], [1.74393908E12, 0.0], [1.743939079E12, 0.0], [1.743939078E12, 0.0], [1.743939082E12, 0.0], [1.743939081E12, 0.0], [1.743939077E12, 0.0], [1.743939076E12, 4.0], [1.74393909E12, 0.0], [1.743939089E12, 0.0], [1.743939093E12, 0.0], [1.743939092E12, 0.0], [1.743939091E12, 0.0], [1.743939085E12, 0.0], [1.743939084E12, 0.0], [1.743939083E12, 0.0], [1.743939088E12, 0.0], [1.743939087E12, 0.0], [1.743939086E12, 0.0]], "isOverall": false, "label": "/user/search-4", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.743939105E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 521.0, "minX": 1.743939077E12, "maxY": 665.0, "series": [{"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.743939099E12, 665.0], [1.743939103E12, 605.0], [1.743939081E12, 526.0], [1.743939077E12, 557.0], [1.743939097E12, 521.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.743939103E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 516.0, "minX": 1.0, "maxY": 557.0, "series": [{"data": [[2.0, 557.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 516.0], [2.0, 522.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 515.0, "minX": 1.0, "maxY": 556.0, "series": [{"data": [[2.0, 556.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 515.0], [2.0, 521.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 2.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.743939075E12, "maxY": 2.0, "series": [{"data": [[1.743939101E12, 2.0], [1.7439391E12, 2.0], [1.743939099E12, 2.0], [1.743939104E12, 2.0], [1.743939103E12, 2.0], [1.743939102E12, 1.0], [1.743939096E12, 2.0], [1.743939095E12, 2.0], [1.743939094E12, 2.0], [1.743939098E12, 1.0], [1.743939097E12, 2.0], [1.743939105E12, 1.0], [1.74393908E12, 2.0], [1.743939079E12, 2.0], [1.743939078E12, 2.0], [1.743939082E12, 2.0], [1.743939081E12, 2.0], [1.743939077E12, 2.0], [1.743939076E12, 1.0], [1.743939075E12, 1.0], [1.74393909E12, 2.0], [1.743939089E12, 2.0], [1.743939093E12, 2.0], [1.743939092E12, 1.0], [1.743939091E12, 2.0], [1.743939085E12, 2.0], [1.743939084E12, 2.0], [1.743939083E12, 1.0], [1.743939088E12, 2.0], [1.743939087E12, 2.0], [1.743939086E12, 2.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.743939105E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.743939076E12, "maxY": 2.0, "series": [{"data": [[1.743939099E12, 1.0], [1.743939103E12, 1.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939097E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.743939101E12, 2.0], [1.7439391E12, 2.0], [1.743939099E12, 1.0], [1.743939104E12, 2.0], [1.743939103E12, 1.0], [1.743939102E12, 1.0], [1.743939096E12, 2.0], [1.743939095E12, 2.0], [1.743939094E12, 2.0], [1.743939098E12, 1.0], [1.743939097E12, 1.0], [1.743939105E12, 2.0], [1.74393908E12, 2.0], [1.743939079E12, 2.0], [1.743939078E12, 2.0], [1.743939082E12, 2.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939076E12, 1.0], [1.74393909E12, 2.0], [1.743939089E12, 2.0], [1.743939093E12, 1.0], [1.743939092E12, 2.0], [1.743939091E12, 2.0], [1.743939085E12, 2.0], [1.743939084E12, 2.0], [1.743939083E12, 1.0], [1.743939088E12, 2.0], [1.743939087E12, 2.0], [1.743939086E12, 2.0]], "isOverall": false, "label": "404", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1.743939105E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.743939076E12, "maxY": 2.0, "series": [{"data": [[1.743939101E12, 2.0], [1.7439391E12, 2.0], [1.743939099E12, 1.0], [1.743939104E12, 2.0], [1.743939103E12, 1.0], [1.743939102E12, 1.0], [1.743939096E12, 2.0], [1.743939095E12, 2.0], [1.743939094E12, 2.0], [1.743939098E12, 1.0], [1.743939097E12, 1.0], [1.743939105E12, 2.0], [1.74393908E12, 2.0], [1.743939079E12, 2.0], [1.743939078E12, 2.0], [1.743939082E12, 2.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939076E12, 1.0], [1.74393909E12, 2.0], [1.743939089E12, 2.0], [1.743939093E12, 1.0], [1.743939092E12, 2.0], [1.743939091E12, 2.0], [1.743939085E12, 2.0], [1.743939084E12, 2.0], [1.743939083E12, 1.0], [1.743939088E12, 2.0], [1.743939087E12, 2.0], [1.743939086E12, 2.0]], "isOverall": false, "label": "/user/search-4-failure", "isController": false}, {"data": [[1.743939099E12, 1.0], [1.743939103E12, 1.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939097E12, 1.0]], "isOverall": false, "label": "/user/search-4-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.743939105E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.743939076E12, "maxY": 2.0, "series": [{"data": [[1.743939099E12, 1.0], [1.743939103E12, 1.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939097E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.743939101E12, 2.0], [1.7439391E12, 2.0], [1.743939099E12, 1.0], [1.743939104E12, 2.0], [1.743939103E12, 1.0], [1.743939102E12, 1.0], [1.743939096E12, 2.0], [1.743939095E12, 2.0], [1.743939094E12, 2.0], [1.743939098E12, 1.0], [1.743939097E12, 1.0], [1.743939105E12, 2.0], [1.74393908E12, 2.0], [1.743939079E12, 2.0], [1.743939078E12, 2.0], [1.743939082E12, 2.0], [1.743939081E12, 1.0], [1.743939077E12, 1.0], [1.743939076E12, 1.0], [1.74393909E12, 2.0], [1.743939089E12, 2.0], [1.743939093E12, 1.0], [1.743939092E12, 2.0], [1.743939091E12, 2.0], [1.743939085E12, 2.0], [1.743939084E12, 2.0], [1.743939083E12, 1.0], [1.743939088E12, 2.0], [1.743939087E12, 2.0], [1.743939086E12, 2.0]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 1000, "maxX": 1.743939105E12, "title": "Total Transactions Per Second"}},
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

