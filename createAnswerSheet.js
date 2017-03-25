/**
 * Created by HyunArm on 2017. 3. 26..
 */

$(document).ready(function () {
    var wrap = $('#wrap');
    var html = '';
    var answerText = "<b>①</b><b>②</b><b>③</b><b>④</b>"

    for (var i = 0; i < samples.length; i++) {
        var big = samples[i];
        html += "<div class='part'>";
        html += "<h1>&lt; Part" + (i + 1) + ". " + big[0] + " &gt;</h1>";

        for (var j = 0; j < big[1].length; j++) {
            var mid = big[1][j];
            html += "<div class='mid'>";
            html += "<h2>" + (j + 1) + ". " + mid[0] + "</h2>"
            html += "<table>" +
                "<tr class='table_header'>" +
                "<td class='wrong_count'>틀린<br>횟수</td>" +
                "<td class='sample_num'>번호</td>" +
                "<td class='choice_num'>답안</td>" +
                "</tr>";

            for (var x = 0; x < mid[1].length; x++) {
                var small = mid[1][x];
                html += "<tr>" +
                    "<th colspan='3'>" +
                    leadingZeros((x + 1), 2) + ". " + small[0] +
                    "</th>" +
                    "</tr>";

                for (var y = small[1]; y <= small[2]; y++) {
                    html += "<tr>" +
                        "<td class='wrong_count'></td>" +
                        "<td class='sample_num'>" + leadingZeros(y, 3) + "</td>" +
                        "<td class='choice_num'>" + answerText + "</td>" +
                        "</tr>";
                }
            }

            html += "</table>" +
                "</div>";
        }

        html += "</div>";
    }

    wrap.html(html);
})


function leadingZeros(n, digits) {
    var zero = '';
    n = n.toString();

    if (n.length < digits) {
        for (var i = 0; i < digits - n.length; i++)
            zero += '0';
    }
    return zero + n;
}