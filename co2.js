function co2(year){
    var co2_list = [
[200002,369.71],
[200003,370.75],
[200004,371.98],
[200005,371.75],
[200006,371.87],
[200007,370.02],
[200008,368.27],
[200001,369.45],
[200009,367.15],
[200010,367.18],
[200011,368.53],
[200012,369.83],
[200101,370.76],
[200102,371.69],
[200103,372.63],
[200104,373.55],
[200105,374.03],
[200106,373.40],
[200107,371.68],
[200108,369.78],
[200109,368.34],
[200110,368.61],
[200111,369.94],
[200112,371.42],
[200201,372.70],
[200202,373.37],
[200203,374.30],
[200204,375.19],
[200205,375.93],
[200206,375.69],
[200207,374.16],
[200208,372.03],
[200209,370.92],
[200210,370.73],
[200211,372.43],
[200212,373.98],
[200301,375.07],
[200302,375.82],
[200303,376.64],
[200304,377.92],
[200305,378.78],
[200306,378.46],
[200307,376.88],
[200308,374.57],
[200309,373.34],
[200310,373.31],
[200311,374.84],
[200312,376.17],
[200401,377.17],
[200402,378.05],
[200403,379.06],
[200404,380.54],
[200405,380.80],
[200406,379.87],
[200407,377.65],
[200408,376.17],
[200409,374.43],
[200410,374.63],
[200411,376.33],
[200412,377.68],
[200501,378.63],
[200502,379.91],
[200503,380.95],
[200504,382.48],
[200505,382.64],
[200506,382.40],
[200507,380.93],
[200508,378.93],
[200509,376.89],
[200510,377.19],
[200511,378.54],
[200512,380.31],
[200601,381.58],
[200602,382.40],
[200603,382.86],
[200604,384.80],
[200605,385.22],
[200606,384.24],
[200607,382.65],
[200608,380.60],
[200609,379.04],
[200610,379.33],
[200611,380.35],
[200612,382.02],
[200701,383.10],
[200702,384.12],
[200703,384.81],
[200704,386.73],
[200705,386.78],
[200706,386.33],
[200707,384.73],
[200708,382.24],
[200709,381.20],
[200710,381.37],
[200711,382.70],
[200712,384.19],
[200801,385.78],
[200802,386.06],
[200803,386.28],
[200804,387.33],
[200805,388.78],
[200806,387.99],
[200807,386.61],
[200808,384.32],
[200809,383.41],
[200810,383.21],
[200811,384.41],
[200812,385.79],
[200901,387.17],
[200902,387.70],
[200903,389.04],
[200904,389.76],
[200905,390.36],
[200906,389.70],
[200907,388.24],
[200908,386.29],
[200909,384.95],
[200910,384.64],
[200911,386.23],
[200912,387.63],
[201001,388.91],
[201002,390.41],
[201003,391.37],
[201004,392.67],
[201005,393.21],
[201006,392.38],
[201007,390.41],
[201008,388.54],
[201009,387.03],
[201010,387.43],
[201011,388.87],
[201012,389.99],
[201101,391.50],
[201102,392.05],
[201103,392.80],
[201104,393.44],
[201105,394.41],
[201106,393.95],
[201107,392.72],
[201108,390.33],
[201109,389.28],
[201110,389.19],
[201111,390.48],
[201112,392.06],
[201201,393.31],
[201202,394.04],
[201203,394.59],
[201204,396.38],
[201205,396.93],
[201206,395.91],
[201207,394.56],
[201208,392.59],
[201209,391.32],
[201210,391.27],
[201211,393.20],
[201212,394.57],
[201301,395.78],
[201302,397.03],
[201303,397.66],
[201304,398.64],
[201305,400.02],
[201306,398.81],
[201307,397.51],
[201308,395.39],
[201309,393.72],
[201310,393.90],
[201311,395.36],
[201312,397.03],
[201401,398.04],
[201402,398.27],
[201403,399.91],
[201404,401.51],
[201405,401.96],
[201406,401.43],
[201407,399.27],
[201408,397.18],
[201409,395.54],
[201410,396.16],
[201411,397.40],
[201412,399.08],
[201501,400.18],
[201502,400.55],
[201503,401.74],
[201504,403.35],
[201505,404.15],
[201506,402.97],
[201507,401.46],
[201508,399.11],
[201509,397.82],
[201510,398.49],
[201511,400.27],
[201512,402.06],
[201601,402.73],
[201602,404.25],
[201603,405.06],
[201604,407.60],
[201605,407.90],
[201606,406.99],
[201607,404.59],
[201608,402.45],
[201609,401.23],
[201610,401.79],
[201611,403.72],
[201612,404.64],
[201701,406.36],
[201702,406.66],
[201703,407.54],
[201704,409.22],
[201705,409.89],
[201706,409.08],
[201707,407.33],
[201708,405.32],
[201709,403.57],
[201710,403.82],
[201711,405.31],
[201712,407.00],
[201801,408.15],
[201802,408.52],
[201803,409.59],
[201804,410.45],
[201805,411.44],
[201806,410.99],
[201807,408.90],
[201808,407.16],
[201809,405.71],
[201810,406.19],
[201811,408.21],
[201812,409.27],
[201901,411.03],
[201902,411.96],
[201903,412.18],
[201904,413.54],
[201905,414.86],
[201906,414.16],
[201907,411.97],
[201908,410.18],
[201909,408.76],
[201910,408.75],
[201911,410.48],
[201912,411.98],
[202001,413.61],
[202002,414.34],
[202003,414.74],
[202004,416.45],
[202005,417.31],
[202006,416.60],
[202007,414.62],
[202008,412.78],
[202009,411.52],
[202010,411.51],
[202011,413.12],
[202012,414.26],
[202101,415.52],
[202102,416.75],
[202103,417.64],
[202104,419.05],
[202105,419.13],
[202106,418.94],
[202107,416.96],
[202108,414.47],
[202109,413.30],
[202110,413.93],
[202111,415.01],
[202112,416.71],
[202201,418.19],
[202202,419.28],
[202203,418.81],
[202204,420.23],
[202205,420.99],
[202206,420.99],
[202207,418.90],
[202208,417.19]
    ];
    for(let i=0;i<co2_list.length;i++){
        console.log(year,co2_list[i][0])
        if(year==co2_list[i][0]){
            alert(8070);
            return co2_list[i][1];
        }
    }
}