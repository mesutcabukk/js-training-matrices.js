/**
 * Please provide all your functions in this file.
 * Consider using extending built-in objects.
 */

"use strict";

function add(matrix1, matrix2) {
 var result = [];  
    result = new Array(matrix1.length);
    for ( var i = 0; i < result.length; i++ ){
        result [i] = new Array ( matrix1[i].length );
        for (var k = 0; k < result[i].length; k++) {
            result [i][k] = matrix1[i][k] + matrix2[i][k];
        }
    }
    return result;
}

function substract(matrix1, matrix2) {
    var result = [];  
    result = new Array(matrix1.length);
    for ( var i = 0; i < result.length; i++ ){
        result [i] = new Array ( matrix1[i].length );
        for (var k = 0; k < result[i].length; k++) {
            result [i][k] = matrix1[i][k] - matrix2[i][k];
        }
    }
    return result;
}

function multiply(matrix1, matrix2) {
    var result = new Array(matrix1.length);
    for (var i = 0; i < result.length; i++) {
        result[i] = new Array(matrix2[i].length);
        for (var j = 0; j < matrix1.length; j++) {
            result[i][j] = 0;
            for (var k = 0; k < matrix2.length; k++) {
                result[i][j] += matrix1[i][k] * matrix2[k][j];
            }
        }
    }
    return result;
}

function display() {}
