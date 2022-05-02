class InputData {                                                                       // Giving all the values from dataLoader.js meaning
    constructor(
        datTime,
        datLat,
        datLong,
        datGPSAlt,
        datBMPAlt,
        datBMPPres,
        datBMPTmp,
        datDigTmp,
        datCSSTmp,
        datCSSCO2,
        datCSSTVOC,
        datUV,
        datAccX,
        datAccY,
        datAccZ,
        datMagX,
        datMagY,
        datMagZ,
        datGyrX,
        datGyrY,
        datGyrZ,
    ) {                                                                                 // Relating all the values in the paranthesis of the constructor to the variables they belong to.
        this.datTime = datTime;
        this.datLat = datLat;
        this.datLong = datLong;
        this.datGPSAlt = datGPSAlt;
        this.datBMPAlt = datBMPAlt;
        this.datBMPPres = datBMPPres;
        this.datBMPTmp = datBMPTmp;
        this.datDigTmp = datDigTmp;
        this.datCSSTmp = datCSSTmp;
        this.datCSSCO2 = datCSSCO2;
        this.datCSSTVOC = datCSSTVOC;
        this.datUV = datUV;
        this.datAccX = datAccX;
        this.datAccY = datAccY;
        this.datAccZ = datAccZ;
        this.datMagX = datMagX;
        this.datMagY = datMagY;
        this.datMagZ = datMagZ;
        this.datGyrX = datGyrX;
        this.datGyrY = datGyrY;
        this.datGyrZ = datGyrZ;
    }
}

function getData(){                                                                     // A function to load the data from dataLoader.js
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){                                                 // A function to format the data into the proper cells, taking the data type and adding a colon, then in the next cell posting the raw data.
    msg = "<td>";                                                                       // Opening cell
    msg += legend;                                                                      // The first value returned by the function (data type)
    msg += ": </td><td>";                                                               // Adding a colon, closing that cell and opening the second row cell
    msg += value;                                                                       // The raw data
    msg += " " + units;                                                                 // A space and units if there are any
    msg += "</td>"                                                                      // Closing cell
    return msg;                                                                         // Fitting it all into 'msg' variable
}                                                                                       //

function updateDisplay(){                                                               // The main function to update the data in the table
    var timeElapsed = data[index].datTime;                                              // Setting the timeElapsed variable to the datTime variable (first row in data -- the time)
    console.log(index);                                                                 // Tracks the iteration of this function being ran
                                                                                        //
    if(timeElapsed >= 10){                                                              // if timeElapsed is 10 or higher (data starts at 10)
        document.getElementById("data").rows["Time"].innerHTML =                        // Finding the row labeled Time in the table
            dataRow("Time Elapsed", data[index].datTime, "seconds");                    // Runs dataRow function feeding it:
        document.getElementById("data").rows["Lat"].innerHTML =                         //      legend = data type (for this example it's Time Elapsed)
            dataRow("Latitude", data[index].datLat, " ");                               //      data[index].datTime 
        document.getElementById("data").rows["Long"].innerHTML =                        //              the 'index' variable is the iteration, incrementing by one every time the function is ran, therefore scrubbing through the array defined in dataLoader.js
            dataRow("Longtitude", data[index].datLong, " ");                            //              the 'datTime' variable was defined in the class and refers to the location in the 'data' value that the relevant data can be found (i.e. datLong is third in class, and third in location in the data value)
        document.getElementById("data").rows["GPSAlt"].innerHTML =                      //      units
            dataRow("GPS Altitude", data[index].datGPSAlt, " ");
        document.getElementById("data").rows["BMPAlt"].innerHTML = 
            dataRow("BMP Sensor Altitude", data[index].datBMPAlt, " ");
        document.getElementById("data").rows["BMPPres"].innerHTML = 
            dataRow("BMP Sensor Pressure", data[index].datBMPPres, " ");
        document.getElementById("data").rows["BMPTmp"].innerHTML = 
            dataRow("BMP Sensor Temperature", data[index].datBMPTmp, " ");
        document.getElementById("data").rows["DigTmp"].innerHTML = 
            dataRow("Digital Sensor Temperature", data[index].datDigTmp, " ");
        document.getElementById("data").rows["CSSTmp"].innerHTML = 
            dataRow("CSS Sensor Temperature", data[index].datCSSTmp, " ");
        document.getElementById("data").rows["CSSCO2"].innerHTML = 
            dataRow("CSS Sensor eCO2", data[index].datCSSCO2, " ");
        document.getElementById("data").rows["CSSTVOC"].innerHTML = 
            dataRow("CSS Sensor TVOC", data[index].datCSSTVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML = 
            dataRow("UV", data[index].datUV, " ");
        document.getElementById("data").rows["AccX"].innerHTML = 
            dataRow("Accel X", data[index].datAccX, " ");
        document.getElementById("data").rows["AccY"].innerHTML = 
            dataRow("Accel Y", data[index].datAccY, " ");
        document.getElementById("data").rows["AccZ"].innerHTML = 
            dataRow("Accel Z", data[index].datAccZ, " ");
        document.getElementById("data").rows["MagX"].innerHTML = 
            dataRow("Magnetic X", data[index].datMagX, " ");
        document.getElementById("data").rows["MagY"].innerHTML = 
            dataRow("Magnetic Y", data[index].datMagY, " ");
        document.getElementById("data").rows["MagZ"].innerHTML = 
            dataRow("Magnetic Z", data[index].datMagZ, " ");
        document.getElementById("data").rows["GyrX"].innerHTML = 
            dataRow("Gyro X", data[index].datGyrX, " ");
        document.getElementById("data").rows["GyrY"].innerHTML = 
            dataRow("Gyro Y", data[index].datGyrY, " ");
        document.getElementById("data").rows["GyrZ"].innerHTML = 
            dataRow("Gyro Z", data[index].datGyrZ, " ");
    }
    if(index >= 500){index = 0;}                                                        // Data only has 500 lines, therefore this function loops back to 0 at that point.
    else {index++}                                                                      // What handles incremenetinghe index value every iteration.
}