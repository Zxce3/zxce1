function QR8bitByte(a) {
    this.mode = QRMode.MODE_8BIT_BYTE, this.data = a
}

function QRCode(a, b) {
    this.typeNumber = a, this.errorCorrectLevel = b, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = new Array
}

function QRPolynomial(a, b) {
    if (void 0 == a.length) throw new Error(a.length + "/" + b);
    for (var c = 0; c < a.length && 0 == a[c];) c++;
    this.num = new Array(a.length - c + b);
    for (var d = 0; d < a.length - c; d++) this.num[d] = a[d + c]
}

function QRRSBlock(a, b) {
    this.totalCount = a, this.dataCount = b
}

function QRBitBuffer() {
    this.buffer = new Array, this.length = 0
}

function lipsumize() {
    var a = [parseInt($("#wps_low").val()), parseInt($("#wps_hi").val())],
        b = [parseInt($("#spp_low").val()), parseInt($("#spp_hi").val())];
    paragraphs = $("#paragraphs").val(), $("#lipsum-text").animate({
        height: "toggle"
    }, 200, "swing", function () {
        $(this).addClass("bottom-border"), $(this).lipsumize({
            paragraphs: paragraphs,
            wordsPerSentence: a,
            sentencesPerParagraph: b
        }), $(this).delay(200).animate({
            height: "toggle"
        }, 200), $("#isList").is(":checked") && $("#lipsum-text p").each(function () {
            $(this).stringToList("ul")
        })
    })
}

function doStrLen() {
    showResult(inputStr().length)
}

function toLowerCase() {
    showResult(inputStr().toLowerCase())
}

function toUpperCase() {
    showResult(inputStr().toUpperCase())
}

function doReverse() {
    var a = inputStr(),
        b = "";
    for (i = a.length - 1; i >= 0; i--) b += a.charAt(i);
    showResult(b)
}

function wordCount() {
    var a = inputStr();
    if ("" == a) return void showResult(0);
    var b = a.split(" ");
    showResult(b.length)
}

function doCharCount() {
    var a = inputStr();
    return "" == a ? void showResult(0) : void showResult(a.length)
}

function doHiddenCharacters() {
    for (var a = inputStr(), b = "", c = 0; c < a.length; c++) {
        var d = a.charAt(c),
            e = a.charCodeAt(c);
        13 >= e || 27 == e || 32 == e || 127 == e ? (b += "[" + getHiddenCharNameByCode(e) + "]", 10 == e && (b += "\n")) : b += d
    }
    showResult(b)
}

function getHiddenCharNameByCode(a) {
    switch (a) {
        case 9:
            return "Tab";
        case 10:
            return "End of Line(LF)";
        case 13:
            return "End of Line(CR)";
        case 0:
            return "NULL";
        case 7:
            return "Bell";
        case 8:
            return "Backspace";
        case 12:
            return "Form Feed";
        case 27:
            return "Escape";
        case 32:
            return "Space";
        case 127:
            return "Delete";
        default:
            return a
    }
}

function split() {
    for (var a = inputStr(), b = inputStr(2), c = "", d = a.split(b), e = 0; e < d.length; e++) c += $.trim(d[e]) + "\n";
    showResult(c)
}

function inputStr(a) {
    return a ? $.trim($("#string" + a).val()) : $.trim($("#string").val())
}

function showResult(a, b, c) {
    c || (c = ""), 1 == b ? $("#outcome" + c).html(a) : $("#outcome" + c).text(a)
}

function myEscape(a) {
    return a = a.replace(new RegExp("&", "g"), "%26"), a = a.replace(new RegExp("\\+", "g"), "%2b")
}

function myJSEscape(a) {
    return a = a.replace(new RegExp("'", "g"), "\\'")
}

function enDecodeUrl() {
    var a = inputStr();
    if ("" == a) return void showResult("");
    var b = $("#enDecodeUrl").attr("data-type");
    1 == b ? showResult(encodeURIComponent(a)) : 2 == b && showResult(decodeURIComponent(a))
}

function enDecode() {
    var a = inputStr();
    if ("" == a) return void showResult("");
    var b = $("#enDecode").attr("data-type");
    1 == b ? showResult($.base64.btoa(a)) : 2 == b && showResult($.base64.atob(a, !0))
}

function reset() {
    $('input[type="text"]').val(""), $("textarea").val(""), $("#string[type='text']").html(""), $("#outcome").html("")
}

function createqr(a) {
    $("#qrcodeCanvas").empty();
    var b = "";
    1 == a ? b = inputStr(a) : 2 == a ? b = inputStr(a) : 3 == a ? b = "smsto:" + inputStr(3) + ":" + inputStr(4) : 4 == a ? b = "MATMSG:TO:" + inputStr(5) + ";SUB:" + inputStr(6) + ";BODY:" + inputStr(7) + ";" : 5 == a && (b = "BEGIN:VCARD\nVERSION:3.0\nN:" + inputStr(9) + ";" + inputStr(8) + "\nFN:" + inputStr(8) + " " + inputStr(9) + "\nORG:" + inputStr(10) + "\nTITLE:" + inputStr(11) + "\nEMAIL;type=WORK:" + inputStr(26) + "\nEMAIL;type=HOME:" + inputStr(25) + "\nTEL;type=WORK:" + inputStr(24) + "\nTEL;type=HOME:" + inputStr(23) + "\nTEL;type=CELL:" + inputStr(22) + "\nTEL;type=FAX:" + inputStr(27) + "\nADR;type=WORK:" + inputStr(17) + ";" + inputStr(18) + ";" + inputStr(19) + ";" + inputStr(20) + ";" + inputStr(21) + "\nADR;type=HOME:" + inputStr(12) + ";" + inputStr(13) + ";" + inputStr(14) + ";" + inputStr(15) + ";" + inputStr(16) + "\nURL:" + inputStr(28) + "\nEND:VCARD", console.log(b)), $("#qrcodeCanvas").qrcode({
        text: b
    })
}

function randString(a) {
    var b = $('input[name="pwdOpt"]:checked'),
        c = $("#password-length").val(),
        d = [],
        e = "";
    $.each(b, function (a, b) {
        d.push($(b).val())
    }), $.inArray("1", d) >= 0 && (e += "@%+#$?*&^_-!="), $.inArray("2", d) >= 0 && (e += "0123456789"), $.inArray("3", d) >= 0 && (e += "abcdefghijklmnopqrstuvwxyz"), $.inArray("4", d) >= 0 && (e += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"), $.inArray("5", d) >= 0 && (e += "{}[]()/'\"`~,;:.<>");
    for (var f = "", g = 0; c > g; g++) f += e.charAt(Math.floor(Math.random() * e.length));
    return f
}

function jsonParser() {
    var a = $("#json-input").val();
    $("#json-output").text(a), "" == $.trim(a) ? $(".output-container").addClass("hide") : $(".output-container").removeClass("hide"), $("#json-output").jsonFrill({
        toolbar: !0
    })
}

function htmlFormatter() {
    var a = inputStr(),
        b = html_beautify(a);
    $("#string").val(b)
}

function javascriptFormatter() {
    var a = inputStr(),
        b = js_beautify(a);
    $("#string").val(b)
}

function cssFormatter() {
    $("#string").format({
        method: "css"
    })
}

function sqlFormatter() {
    $("#string").format({
        method: "sql"
    })
}

function xmlFormatter() {
    $("#string").format({
        method: "xml"
    })
}

function jsonFormatter() {
    $("#string").format({
        method: "json"
    })
}

function Calculate(a) {
    var b = 0;
    for (i = 0; i < a.length; i++) b += parseInt(a.substring(i, i + 1));
    var c = new Array(0, 1, 2, 3, 4, -4, -3, -2, -1, 0);
    for (i = a.length - 1; i >= 0; i -= 2) {
        var d = parseInt(a.substring(i, i + 1)),
            e = c[d];
        b += e
    }
    var f = b % 10;
    return f = 10 - f, 10 == f && (f = 0), f
}

function Validate(a) {
    a = a.replace(/\s/g, "");
    var b = parseInt(a.substring(a.length - 1, a.length)),
        c = a.substring(0, a.length - 1);
    return Calculate(c) == parseInt(b) ? !0 : !1
}

function validateCreditCard() {
    var a = $("#string").val(),
        b = Validate(a);
    showResult(b ? "The number is valid!" : "The number is NOT valid!")
}

function convert(a) {
    $.ajax({
        url: "functions.php",
        method: "POST",
        data: {
            s: inputStr(),
            s1: inputStr(1),
            t: a
        },
        dataType: "text",
        success: function (a) {
            showResult(a)
        }
    })
}

function htmlEncodeDecode() {
    var a = $("#htmlEncodeDecode").attr("data-type");
    $.ajax({
        url: "functions.php",
        method: "POST",
        data: {
            s: inputStr(),
            t: a
        },
        dataType: "text",
        success: function (a) {
            showResult(a)
        }
    })
}

function doRemoveDL() {
    var a = inputStr();
    if (0 != a.trim().length) {
        var b = a.split("\n"),
            c = [];
        $.each(b, function (a, b) {
            -1 === $.inArray(b, c) && c.push(b)
        }), showResult(c.join("\n"))
    }
}

function doRemoveEL() {
    var a = inputStr();
    if (0 != a.trim().length) {
        var b = a.split("\n"),
            c = [];
        $.each(b, function (a, b) {
            0 != b.trim().length && c.push(b)
        }), showResult(c.join("\n"))
    }
}

function doRemoveES() {
    var a = inputStr();
    0 != a.trim().length && showResult(a.replace(/\s+/g, " ").trim())
}

function doRemoveLB() {
    var a = inputStr();
    0 != a.trim().length && showResult(a.split("\n").join(""))
}

function doRemoveLC() {
    var a = inputStr(),
        b = inputStr(2);
    if (0 != a.trim().length) {
        var c = a.split("\n"),
            d = [];
        $.each(c, function (a, c) {
            if (0 != c.trim().length) {
                var e = c.trim().length,
                    f = 0;
                if ($("#isCaseSensitive").is(":checked")) {
                    var g = new RegExp("(" + b + ")", "gi");
                    f = c.trim().replace(g, "").length
                } else f = c.trim().replace(b, "").length;
                e == f && d.push(c)
            }
        }), showResult(d.join("\n"))
    }
}

function doTexttorot() {
    var a = inputStr();
    0 != a.trim().length && showResult(a.rot13())
}

function doRottotext() {
    var a = inputStr();
    0 != a.trim().length && showResult(a.rot13())
}

function doWordToHtml() {
    var a;
    if ("Plain" == inputStr(2)) {
        a = $.trim($(".Editor-editor").html()), a = a.replace(new RegExp("\r\n", "gi"), " ").replace(new RegExp("\n", "gi"), " ").replace(new RegExp("	", "gi"), " ").replace(new RegExp("&nbsp;", "gi"), " ").replace(/\s+/g, " ").replace(/\s+/g, " ").replace(/&amp;/g, "&amp;amp;").replace(/&gt;/g, "&amp;gt;").replace(/&lt;/g, "&amp;lt;").replace(/<!(?:--[\s\S]*?--\s*)?>\s*/g, "").replace(new RegExp("\\<\\?xmls*.*?/>", "gi"), "").replace(new RegExp("<[A-Za-z]:.*?>", "gi"), "").replace(new RegExp("</[A-Za-z]:.*?>", "gi"), "").replace(new RegExp("<[A-Za-z][A-Za-z]:.*?>", "gi"), "").replace(new RegExp("</[A-Za-z][A-Za-z]:.*?>", "gi"), "").replace(new RegExp("<[A-Za-z][A-Za-z][0-9]:.*?>", "gi"), "").replace(new RegExp("</[A-Za-z][A-Za-z][0-9]:.*?>", "gi"), "").replace(new RegExp(' style=""', "gi"), "").replace(new RegExp('style=""', "gi"), "").replace(new RegExp("<s*/?s*metas*.*?>", "gi"), "").replace(new RegExp("<s*/?s*links*.*?>", "gi"), "").replace(new RegExp("<s*/?s*styles*.*?>", "gi"), "").replace(new RegExp("<s*/?s*img s*.*?>", "gi"), "").replace(new RegExp("<s*/?s*div s*.*?>", "gi"), "").replace(new RegExp("<s*/s*divs*.*?>", "gi"), "").replace(new RegExp("<div>", "gi"), "").replace(new RegExp("<s*/?s*spans*.*?>", "gi"), "").replace(new RegExp("<s*/s*spans*.*?>", "gi"), "").replace(new RegExp("<span>", "gi"), "").replace(new RegExp("<s*/?s*font s*.*?>", "gi"), "").replace(new RegExp("<s*/s*fonts*.*?>", "gi"), "").replace(new RegExp("<font>", "gi"), "").replace(new RegExp("<u>", "gi"), "").replace(new RegExp("</u>", "gi"), "").replace(new RegExp('class=".*?"', "gi"), "").replace(new RegExp("class='.*?'", "gi"), "").replace(new RegExp("class=.*? ", "gi"), "").replace(new RegExp('style=".*?"', "gi"), "").replace(new RegExp("style='.*?'", "gi"), "").replace(new RegExp("style=.*? ", "gi"), " ").replace(new RegExp("<s*/?s*HR s*.*?>", "gi"), "<hr />").replace(new RegExp("<HR>", "gi"), "<hr />").replace(new RegExp("<s*/?s*BR s*.*?>", "gi"), "<br />").replace(new RegExp("<BR>", "gi"), "<br />").replace(new RegExp("</p>", "gi"), "<---/p--->").replace(new RegExp("<s*/?s*p s*.*?>", "gi"), "<p>").replace(new RegExp("<---/p--->", "gi"), "</p>").replace(new RegExp("<P>", "gi"), "<p>").replace(new RegExp("</b>", "gi"), "<---/b--->").replace(new RegExp("<s*/?s*b s*.*?>", "gi"), "<b>").replace(new RegExp("<---/b--->", "gi"), "</b>").replace(new RegExp("<B>", "gi"), "<b>").replace(new RegExp("</i>", "gi"), "<---/i--->").replace(new RegExp("<s*/?s*I s*.*?>", "gi"), "<i>").replace(new RegExp("<---/i--->", "gi"), "</i>").replace(new RegExp("<I>", "gi"), "<i>").replace(new RegExp("</ul>", "gi"), "<---/ul--->").replace(new RegExp("<s*/?s*UL s*.*?>", "gi"), "<ul>").replace(new RegExp("<---/ul--->", "gi"), "</ul>").replace(new RegExp("<UL>", "gi"), "<ul>").replace(new RegExp("<OL", "gi"), "<ol").replace(new RegExp("</OL>", "gi"), "</ol>").replace(new RegExp("</li>", "gi"), "<---/li--->").replace(new RegExp("<s*/?s*LI s*.*?>", "gi"), "<li>").replace(new RegExp("<---/li--->", "gi"), "</li>").replace(new RegExp("<LI>", "gi"), "<li>").replace(new RegExp('border="0"', "gi"), 'border="1"').replace(new RegExp("border=0", "gi"), 'border="1"').replace(new RegExp('width="[0-9][0-9][0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("width=[0-9][0-9][0-9][0-9][0-9]", "gi"), "").replace(new RegExp('width="[0-9][0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("width=[0-9][0-9][0-9][0-9]", "gi"), "").replace(new RegExp('width="[0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("width=[0-9][0-9][0-9]", "gi"), "").replace(new RegExp('width="[0-9][0-9]"', "gi"), "").replace(new RegExp("width=[0-9][0-9]", "gi"), "").replace(new RegExp('width="[0-9]"', "gi"), "").replace(new RegExp("width=[0-9]", "gi"), "").replace(new RegExp('height="[0-9][0-9][0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("height=[0-9][0-9][0-9][0-9][0-9]", "gi"), "").replace(new RegExp('height="[0-9][0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("height=[0-9][0-9][0-9][0-9]", "gi"), "").replace(new RegExp('height="[0-9][0-9][0-9]"', "gi"), "").replace(new RegExp("height=[0-9][0-9][0-9]", "gi"), "").replace(new RegExp('height="[0-9][0-9]"', "gi"), "").replace(new RegExp("height=[0-9][0-9]", "gi"), "").replace(new RegExp('height="[0-9]"', "gi"), "").replace(new RegExp("height=[0-9]", "gi"), "").replace(new RegExp('bgcolor=".*?"', "gi"), "");
        var b = a.match(/a href=\".*?\"/gi);
        if (b)
            for (var c = b.length - 1; c > -1; c--)
                if (-1 != b[c].indexOf("#")) {
                    var d, e = new Array;
                    e = b[c].split("#"), d = 'href="#' + e[1], a = a.replace(b[c], d)
                } a = a.replace(new RegExp("<p >", "gi"), "<p>").replace(new RegExp("<p> ", "gi"), "<p>").replace(new RegExp("<h1 >", "gi"), "<h1>").replace(new RegExp("<h2 >", "gi"), "<h2>").replace(new RegExp("<h3 >", "gi"), "<h3>").replace(new RegExp("<h4 >", "gi"), "<h4>").replace(new RegExp("<h5 >", "gi"), "<h5>").replace(new RegExp("<h6 >", "gi"), "<h6>").replace(new RegExp("<table", "gi"), "<table").replace(new RegExp("</table", "gi"), "</table").replace(new RegExp("<tbody", "gi"), "<tbody").replace(new RegExp("</tbody", "gi"), "</tbody").replace(new RegExp("<tr >", "gi"), "<tr>").replace(new RegExp("<tr", "gi"), "<tr").replace(new RegExp("<td  >", "gi"), "<td>").replace(new RegExp("<td >", "gi"), "<td>").replace(new RegExp("<td", "gi"), "<td").replace(new RegExp("<td> <p>", "gi"), "<td><p>").replace(new RegExp("<b >", "gi"), "<b>").replace(new RegExp("<b", "gi"), "<b").replace(new RegExp("</b>", "gi"), "</b>").replace(new RegExp("<i >", "gi"), "<i>").replace(new RegExp("<i", "gi"), "<i").replace(new RegExp("</i>", "gi"), "</i>").replace(new RegExp("<em >", "gi"), "<em>").replace(new RegExp("<em", "gi"), "<em").replace(new RegExp("</em>", "gi"), "</em>").replace(new RegExp("<sup", "gi"), "<sup").replace(new RegExp("</sup>", "gi"), "</sup>").replace(new RegExp("<dfn", "gi"), "<dfn").replace(new RegExp("</dfn>", "gi"), "</dfn>").replace(new RegExp("<strong", "gi"), "<strong").replace(new RegExp("</strong>", "gi"), "</strong>").replace(new RegExp("<a ", "gi"), "<a ").replace(new RegExp("</a>", "gi"), "</a>").replace(new RegExp("vAlign", "gi"), "valign").replace(new RegExp("colSpan", "gi"), "colspan").replace(new RegExp("rowSpan", "gi"), "rowspan").replace(new RegExp("cellSpacing", "gi"), "cellspacing").replace(new RegExp("cellPadding", "gi"), "cellpadding").replace(new RegExp("<h", "gi"), "<h").replace(new RegExp("</h", "gi"), "</h").replace(new RegExp("<pre", "gi"), "<pre").replace(new RegExp("</pre>", "gi"), "</pre>").replace(new RegExp("<tt", "gi"), "<tt").replace(new RegExp("</tt>", "gi"), "</tt>").replace(new RegExp("</b><b>", "gi"), "").replace(new RegExp("</strong><strong>", "gi"), "").replace(new RegExp("</i><i>", "gi"), "").replace(new RegExp("</em><em>", "gi"), "").replace(new RegExp("<td><br /></td>", "gi"), "<td></td>").replace(new RegExp("<b> </b>", "gi"), "").replace(new RegExp("<b></b>", "gi"), "").replace(new RegExp("<strong> </strong>", "gi"), "").replace(new RegExp("<strong></strong>", "gi"), "").replace(new RegExp("<i> </i>", "gi"), "").replace(new RegExp("<i></i>", "gi"), "").replace(new RegExp("<em> </em>", "gi"), "").replace(new RegExp("<em></em>", "gi"), "").replace(new RegExp("<p>  </p>", "gi"), "").replace(new RegExp("<p> </p>", "gi"), "").replace(new RegExp("<p></p>", "gi"), "").replace(new RegExp(">  <p>", "gi"), "><p>").replace(new RegExp("> <p>", "gi"), "><p>").replace(new RegExp("<h1> </h1>", "gi"), "").replace(new RegExp("<h1></h1>", "gi"), "").replace(new RegExp("<h2> </h2>", "gi"), "").replace(new RegExp("<h2></h2>", "gi"), "").replace(new RegExp("<h3> </h3>", "gi"), "").replace(new RegExp("<h3></h3>", "gi"), "").replace(new RegExp("</p> </td>", "gi"), "</p></td>").replace(new RegExp("</p></td>", "gi"), "</pppzppp></td>").replace(new RegExp("</p>", "gi"), "</p>x---rn---xx---rn---x").replace(new RegExp("</pppzppp></td>", "gi"), "</p></td>").replace(new RegExp("</ul>", "gi"), "</ul>x---rn---xx---rn---x").replace(new RegExp("<ul>", "gi"), "<ul>x---rn---x").replace(new RegExp("</li>", "gi"), "</li>x---rn---x").replace(new RegExp("<br />", "gi"), "<br />x---rn---x").replace(new RegExp("</td>", "gi"), "</td>x---rn---x").replace(new RegExp("</tr>", "gi"), "</tr>x---rn---xx---rn---x").replace(new RegExp("<tr>", "gi"), "<tr>x---rn---x").replace(new RegExp("<tbody>", "gi"), "x---rn---x<tbody>x---rn---x").replace(new RegExp("</tbody>", "gi"), "</tbody>x---rn---x").replace(new RegExp("</table>", "gi"), "</table>x---rn---xx---rn---x").replace(new RegExp("</h1>", "gi"), "</h1>x---rn---xx---rn---x").replace(new RegExp("</h2>", "gi"), "</h2>x---rn---xx---rn---x").replace(new RegExp("</h3>", "gi"), "</h3>x---rn---xx---rn---x").replace(new RegExp("</h4>", "gi"), "</h4>x---rn---xx---rn---x").replace(new RegExp("</h5>", "gi"), "</h5>x---rn---xx---rn---x").replace(new RegExp("</h6>", "gi"), "</h6>x---rn---xx---rn---x").replace(new RegExp("�", "gi"), "&amp;cent;").replace(new RegExp("�", "gi"), "&amp;pound;").replace(new RegExp("�", "gi"), "&amp;yen;").replace(new RegExp("�", "gi"), "&amp;euro;").replace(new RegExp("�", "gi"), "&amp;copy;").replace(new RegExp("�", "gi"), "&amp;reg;").replace(new RegExp("�", "gi"), "&amp;&trade;").replace(new RegExp("<", "gi"), "&lt;").replace(new RegExp(">", "gi"), "&gt;").replace(new RegExp("x---rn---x", "gi"), "<br />\n"), showResult(a, !0)
    } else a = $.trim($(".Editor-editor").html()), showResult(a)
}

function doUrlToHtml() {
    var a = inputStr(),
        b = inputStr(2),
        c = inputStr(3),
        d = "",
        e = "",
        f = "";
    "paragraph" == c ? (d = "<p>", e = "</p>") : "br" == c ? (d = "", e = "<br />") : "div" == c ? (d = "<div>", e = "</div>") : "ul" == c ? (d = "<li>", e = "</li>") : "ol" == c ? (d = "<li>", e = "</li>") : (d = "", e = ""), "nope" != b && (f = ' target="' + b + '"');
    var g = "X<C>Xli-nk-se-pe-ra-teX<C>X";
    a = a.replace(/(\n\r|\n|\r)/gm, g), a = a.replace(/\s+/g, g), a = a.replace(/\|/g, g), a = a.replace(/\,/g, g), a = a.trim(), a = a.split(g);
    for (var h = "", i = 0; i < a.length; i++) "" != a[i] && (i == a.length - 1 && "br" == c ? a[i] = d + '<a href="' + a[i] + '"' + f + ">" + a[i] + "</a>\n" : a[i] = d + '<a href="' + a[i] + '"' + f + ">" + a[i] + "</a>" + e + "\n", h += a[i]);
    "ul" == c ? h = "<ul>\n" + h + "</ul>" : "ol" == c && (h = "<ol>\n" + h + "</ol>"), showResult(h)
}

function doCSVtoTable() {
    var a = inputStr(),
        b = inputStr(2);
    a = a.split("\n");
    var c = "";
    for (i = 0; i < a.length; i++) a[i] = a[i].replace(/\r/, ""), a[i] = a[i].replace(/^\'/, ""), a[i] = a[i].replace(/^\"/, ""), a[i] = a[i].replace(/"$/, ""), a[i] = a[i].replace(/'$/, ""), a[i] = "<tr><td>" + a[i] + "</td></tr>";
    if ("TAB" == b) var d = "	";
    else if ("COMMA" == b) var d = ",";
    else if ("PIPE" == b) var d = "\\|";
    else if ("SPACE" == b) var d = " ";
    else var d = "	";
    for (i = 0; i < a.length; i++) a[i] = a[i].replace(new RegExp(d, "gi"), "</td><td>"), c = c + a[i] + "\n";
    c = "<table>\n" + c + "</table>\n", showResult(c)
}

function doBrToParagraph() {
    var a = inputStr(),
        b = inputStr(2);
    a = a.trim(), a = a.replace(/(\r\n|\n|\r)/gm, "\r\n\r\n"), a = a.replace(/(\r\n|\r|\n){2,}/g, "$1\n"), "p" == b ? (a = a.replace(/(\n\n)/gm, "</p><p>"), a = a.replace(/(\r\n|\n|\r)/gm, ""), a = a.replace(/<\/p>/gm, "</p>\n\n"), a = "<p>" + a + "</p>") : "div" == b && (a = a.replace(/(\n\n)/gm, "</div><div>"), a = a.replace(/(\r\n|\n|\r)/gm, ""), a = a.replace(/<\/div>/gm, "</div>\n\n"), a = "<div>" + a + "</div>"), showResult(a)
}

function doRandomWord() {
    for (var a, b, c = ["abandon", "abandoned", "abattoir", "abducted", "abduction", "abilities", "ability", "abnormal", "abnormality", "abnormally", "abomination", "above", "aboveground", "abrasive", "absence", "absent", "absently", "absentness", "absolution", "absorb", "absorbable", "absorbing", "abstinence", "abstinent", "abstract", "abstractly", "absurd", "absurdities", "absurdity", "absurdly", "abuse", "abusive", "academic", "academy", "accepting", "accessories", "accident", "accidental", "accommodation", "accomplice", "accord", "accountable", "accuracy", "accursed", "ache", "acid", "acidic", "acoustic", "acrobat", "acrobatic", "action", "actor", "actress", "actuality", "acute", "adaptive", "addict", "addiction", "addictive", "address", "adequate", "adherence", "adhesive", "adjustable", "admiral", "admission", "adopter", "adoption", "adorable", "adornment", "adrenaline", "adsorbable", "adult", "advancement", "advantage", "adventure", "advertisement", "advisor", "advocate", "aerial", "aerobatic", "aerodynamic", "affair", "affliction", "affordable", "aficionado", "afraid", "after", "afterlife", "aftermath", "afternoon", "aftershock", "aftertaste", "afterwards", "afterworld", "again", "against", "age", "aged", "ageless", "agency", "agenda", "agent", "aggression", "aggressive", "agility", "agitator", "agonizing", "agony", "agreeable", "aim", "aimless", "air", "airport", "airship", "airspace", "airtight", "alarm", "alarming", "alcohol", "alcoholic", "alibi", "alien", "alienate", "align", "alignment", "allergenic", "alley", "alliance", "allied", "alligator", "allotment", "allow", "allowable", "almighty", "almond", "almost", "alphabet", "alphabetic", "alphabetical", "already", "also", "altercation", "alternate", "aluminium", "always", "amateur", "amazement", "amazing", "amazingly", "amber", "ambidextrous", "ambient", "ambiguous", "ambition", "ambitious", "ambivalent", "ambulance", "ambulatory", "ambush", "american", "americana", "ammonia", "ammunition", "amnesia", "amnesiac", "amoeba", "amoebic", "among", "amongst", "amoral", "amphibian", "amplitude", "amputate", "amputation", "amulet", "amuse", "amusement", "amusing", "analysis", "analyst", "analytical", "analyze", "anatomy", "ancestor", "anchovies", "androgynous", "angel", "anger", "angriest", "angry", "anguish", "animal", "animalistic", "animatronic", "ankh", "ankle", "annihilate", "annoying", "annual", "anonymous", "answer", "anteater", "antelope", "antelopes", "anticlimactic", "antidemocratic", "antique", "antiviral", "anxiety", "anxious", "any", "anybody", "anyone", "anyplace", "anything", "anytime", "anyways", "anywhere", "apartment", "ape", "apocalypse", "apocalyptic", "apology", "appalling", "apparatus", "apparent", "apparently", "apparition", "appeal", "appear", "appearance", "appetite", "applause", "apple", "application", "applied", "appointment", "approaching", "approximation", "apricot", "aquamarine", "aquarium", "aquatic", "arbitrary", "arcane", "arch", "archer", "architect", "archive", "area", "ark", "arm", "armchair", "armor", "arms", "army", "aroma", "arrival", "arrogant", "arrow", "arrows", "arson", "arsonist", "art", "artificial", "artist", "ash", "ashes", "assassin", "assassination", "assault", "assembly", "associate", "association", "astounding", "astronaut", "atmosphere", "atomic", "atonement", "atrocities", "atrocity", "attachment", "attack", "attacker", "attacking", "attempt", "attic", "attitude", "attribute", "auction", "audacity", "audience", "audio", "augmentation", "authentic", "authority", "automatic", "automatons", "autonomous", "autopilot", "autopsy", "auxiliary", "available", "avenging", "average", "aversion", "aviator", "avocado", "avoid", "awakening", "award", "awesome", "awesomeness", "awful", "awkward", "axe", "axiom", "axis", "babble", "babbling", "baboon", "baby", "babysitter", "bachelor", "back", "backbone", "background", "backward", "backyard", "bacon", "bacteria", "bad", "badge", "badger", "badlands", "badmouth", "baffling", "bag", "bags", "bait", "bake", "balance", "balcony", "bald", "ball", "ballerina", "ballet", "ballistic", "ballistics", "balloon", "ballroom", "baloney", "bamboo", "banana", "bananas", "bandsaw", "bang", "bank", "bankroll", "banquet", "baptism", "bar", "barbarian", "barbaric", "barbell", "barber", "barbershop", "barbwire", "bare", "bareknuckle", "barge", "bark", "barn", "barnacle", "barnburner", "barnyard", "baron", "barren", "barricade", "bars", "barter", "base", "baseline", "basement", "bases", "bash", "basic", "basin", "basket", "baster", "bastion", "bat", "batch", "battalion", "battery", "battle", "battleground", "bauble", "bawling", "bayonet", "bazooka", "beach", "beacon", "bead", "beads", "beak", "beam", "bean", "bear", "beard", "bearskin", "beast", "beastly", "beat", "beaten", "beautiful", "beauty", "beaver", "became", "because", "become", "becoming", "bed", "bedtime", "beefcake", "beehive", "beekeeper", "beeswax", "beggar", "begging", "begin", "beginner", "beginning", "behavior", "behead", "behind", "behold", "beholder", "being", "believable", "believe", "believer", "believing", "bell", "belly", "bellyache", "bellybutton", "bellyful", "belong", "belongings", "below", "belt", "bench", "bend", "beneath", "benefit", "benevolent", "bent", "berserk", "berserker", "best", "bestial", "bet", "betray", "betrayal", "better", "between", "bewitching", "beyond", "bible", "biblical", "big", "biggest", "bighead", "bigmouth", "bigwig", "bike", "bikini", "billion", "billionaire", "bin", "binding", "binge", "binocular", "biological", "biology", "bionic", "biplane", "bird", "birthday", "birthmark", "birthplace", "bit", "bite", "biter", "bitter", "bitterness", "bittersweet", "bizarre", "blabbermouth", "black", "blackheart", "blacklist", "blackmail", "blackness", "blackout", "blackwater", "bladder", "blade", "blame", "bland", "blank", "blankly", "blankness", "blast", "blasted", "blaster", "blasting", "blaze", "bleak", "bleakly", "bleakness", "bleed", "bleeder", "bleeding", "bleep", "blemish", "blend", "blended", "blender", "bless", "blessing", "blimp", "blind", "blindfold", "blinding", "blindly", "blindness", "blink", "blinking", "blinks", "blip", "bliss", "blissfully", "blister", "blizzard", "bloat", "blob", "block", "blockade", "blocker", "blockhead", "bloke", "blonde", "blood", "bloodlust", "bloodsport", "bloodstain", "bloodstream", "bloodsucker", "bloodthirsty", "bloody", "bloom", "blooper", "blossom", "blouse", "blow", "blowgun", "blowtorch", "blubber", "bludgeon", "blue", "blueberry", "blueprint", "bluff", "bluish", "blunder", "blunt", "bluntness", "blur", "blurb", "blurry", "blurt", "blush", "blushing", "bluster", "boa", "boar", "boarder", "boardinghouse", "boardroom", "boast", "bodies", "body", "bogeyman", "bold", "boldly", "bomb", "bombastic", "bomber", "bone", "bonus", "boom", "bootlegger", "booze", "border", "born", "bottle", "bottom", "bottomless", "boulevard", "bounce", "bouncy", "boundary", "boutique", "bovine", "bowyer", "box", "brain", "braincase", "brainwash", "brainwasher", "branch", "brand", "brass", "brave", "brawler", "breakable", "breakaway", "breakwater", "breath", "breathless", "bribery", "brick", "bridge", "brigade", "bright", "brightly", "brilliant", "brimstone", "bring", "bringer", "broken", "bronze", "brood", "brother", "brown", "brush", "brutal", "brutally", "brute", "brutish", "bubble", "bucket", "buffer", "buffet", "bug", "bughouse", "building", "bulging", "bull", "bulldog", "bulldozer", "bullet", "bulletin", "bullwhip", "bully", "bumble", "bump", "bumper", "bunny", "burden", "burglary", "burial", "buried", "burn", "burning", "burnt", "business", "butcher", "buzz", "bye", "cable", "cadaver", "cage", "calculation", "calendar", "calibration", "call", "calling", "camel", "candle", "candy", "candymaker", "cannibal", "cannibalism", "cannon", "canvas", "canyon", "capsule", "captain", "captive", "captivity", "capture", "captured", "caramel", "caravan", "carbon", "carcass", "carcinogenic", "cardinal", "caregiver", "careless", "caress", "cargo", "caribou", "carnal", "carnies", "carnival", "carnivore", "carnivorous", "carriage", "carrion", "carrot", "cartel", "carver", "case", "cashbox", "casino", "casket", "cast", "castle", "cat", "catch", "category", "caterpillar", "cathedral", "cattle", "cave", "cavity", "ceaseless", "celebration", "celebrity", "cell", "cellblock", "cellular", "cement", "centaur", "center", "central", "century", "ceramic", "ceremonial", "ceremony", "chain", "chair", "chalk", "challenge", "chamber", "chameleon", "champion", "channel", "chant", "chaos", "chaotic", "chapter", "chapterhouse", "charade", "chargeable", "charisma", "charismatic", "charm", "charming", "chart", "checkpoint", "cheerful", "chef", "chemical", "cherry", "chewable", "chicken", "chief", "chieftain", "child", "childish", "children", "chill", "chilly", "chisel", "choke", "choker", "choking", "cholera", "chop", "chops", "chromatic", "chromosome", "chronological", "chunk", "chunky", "church", "cinder", "cinnamon", "circle", "circling", "circuit", "circuitry", "circus", "citizen", "city", "civilization", "clairvoyant", "clam", "classic", "claw", "clay", "clean", "cleanup", "clear", "clever", "climax", "clinic", "clock", "closeup", "closing", "clot", "cloth", "cloud", "clover", "club", "clubfoot", "clubhouse", "cluster", "coal", "coast", "coastal", "coat", "cobra", "coconut", "cocoon", "coddle", "code", "coercion", "coffin", "cognitive", "coil", "coincidence", "coincidental", "cola", "cold", "collapsing", "collar", "collarbone", "collectable", "collection", "collide", "collider", "collision", "colonel", "colony", "color", "colors", "colt", "column", "coma", "comatose", "combat", "combatant", "combustible", "comet", "comfortable", "command", "commando", "commercial", "committee", "common", "communication", "communion", "compact", "companion", "company", "compartment", "compassionate", "compelling", "complete", "complicated", "composite", "compound", "compulsion", "compulsive", "computation", "computer", "comrade", "concave", "concept", "conceptual", "concert", "conclusion", "concrete", "concussion", "condemn", "condemned", "condition", "condo", "confidence", "confident", "confidential", "conflict", "confrontational", "confuse", "confused", "confusion", "connectedness", "connection", "connectivity", "conqueror", "conquest", "conscious", "conservative", "console", "conspiracy", "constant", "consultant", "consumer", "consumption", "contagious", "container", "contaminant", "contamination", "contempt", "content", "contest", "contestant", "continental", "continuous", "contortionist", "contractual", "contradiction", "contrast", "control", "controller", "controversial", "conversation", "conversion", "convertible", "convext", "convict", "convulsion", "copper", "cords", "corduroy", "corporation", "corpse", "correlation", "corrosion", "corrosive", "corruption", "cortex", "cosmetic", "cosmic", "cosmically", "cosmonaut", "costume", "costumed", "contemporary", "cottage", "cotton", "couch", "cougar", "cough", "council", "country", "countryside", "couple", "courage", "courageous", "coward", "cows", "coyotes", "crab", "crabs", "crack", "crackdown", "crackpot", "cradle", "crafty", "cranberry", "crash", "crasher", "crater", "crawl", "crawler", "crawling", "crayon", "crazy", "creation", "creative", "creator", "creature", "credenza", "creep", "creeper", "creepy", "crew", "cricket", "crime", "criminal", "crimson", "crisis", "crisp", "crispy", "critical", "crocodile", "crook", "crooked", "crop", "crossfire", "crowd", "crown", "crucifier", "crucifix", "crucifixion", "crude", "cruel", "cruelty", "cruise", "crumply", "crunch", "crush", "crusher", "crushing", "crust", "crutch", "cry", "crypt", "cryptic", "crystal", "cube", "cuddle", "cuddly", "cultish", "cultural", "cunning", "curator", "curfew", "curiosities", "curious", "curse", "cursed", "curve", "curved", "cut", "cuteness", "cyanide", "cybernetic", "cyclical", "cyclops", "cynic", "cynical", "daddy", "daisies", "daisy", "damage", "damn", "damnation", "dancer", "dancing", "danger", "dangerous", "daredevil", "daring", "dark", "dart", "data", "daughter", "day", "daydream", "daydreamer", "daylight", "days", "daytime", "dazzling", "dead", "deadbeat", "deadly", "death", "deathly", "deathtrap", "debate", "debauchery", "debug", "decade", "decadence", "decadent", "decapitation", "decay", "deceit", "decent", "deception", "decipherer", "decode", "decoder", "decomposition", "decontamination", "deduction", "deep", "deepwater", "deer", "defect", "defection", "defector", "definitive", "deformer", "deformity", "degenerate", "degeneration", "degrader", "degrading", "delete", "deletion", "delicacy", "delicate", "delicatessen", "delicious", "delight", "deliverance", "democracy", "democratic", "demolishment", "demolition", "demon", "demonstration", "dense", "dent", "department", "dependent", "deplorable", "depression", "derelict", "describes", "description", "design", "desire", "desolate", "despair", "desperate", "despisable", "destiny", "destroy", "destruction", "destructive", "detachable", "details", "detainee", "determined", "detonator", "detox", "devastation", "develop", "devices", "devil", "devoid", "devour", "devout", "dexterity", "diabolatry", "diabolic", "diagonal", "dial", "diametric", "diamond", "diary", "dictator", "different", "difficult", "digital", "dignitary", "dilemma", "dimension", "dimensional", "diminished", "dinner", "dinosaur", "diplomacy", "diplomat", "diplomatic", "direct", "direction", "director", "dirt", "dirty", "disaster", "disbeliever", "disc", "discharge", "disciple", "discipline", "disclosure", "disconnect", "discontent", "discord", "discovery", "discussion", "disease", "disfigured", "disfigurement", "disgusting", "dishonest", "disintegration", "disk", "dislikable", "dismember", "dismemberment", "dismissal", "disobey", "disorientation", "dispatch", "disputed", "disrupt", "disrupter", "dissolve", "distancing", "distant", "distilery", "distinct", "distort", "distortion", "distribution", "district", "disturbance", "ditch", "diva", "diversion", "divine", "divinity", "division", "divorce", "dizzy", "doberman", "doctor", "document", "dog", "dogs", "dogtooth", "doll", "dolphin", "dolphins", "dome", "domesticated", "dominant", "domination", "domino", "donation", "donkey", "donut", "doom", "doomsday", "door", "dope", "dormant", "dosage", "dot", "double", "doubtless", "dove", "down", "downcast", "downfall", "downhill", "downriver", "downtown", "downward", "dozen", "dozens", "drag", "drain", "drama", "dramatic", "dread", "dream", "dreamer", "dreamland", "dreamless", "drench", "dress", "drift", "drifter", "drifting", "drill", "drimys", "drink", "drip", "drive", "driver", "drone", "drop", "droplet", "dropping", "droppings", "drops", "drown", "drowned", "drowsy", "drug", "drugstore", "drum", "drumbeat", "drunk", "drunken", "dry", "dual", "duck", "duel", "duke", "dumb", "dump", "duplicate", "dusk", "dust", "dynamic", "dynamite", "dynasty", "eagle", "ear", "early", "earthborn", "earthmen", "easier", "east", "eastern", "easy", "eat", "eating", "ebony", "echo", "edge", "edit", "eel", "eerie", "effective", "egg", "ego", "egocentric", "eigenvector", "eight", "elaborate", "elastic", "elbow", "electric", "electrode", "electron", "elegant", "element", "elephant", "elephants", "elevation", "elevator", "eliminate", "elimination", "elite", "elongation", "elsewhere", "embrace", "emerge", "emergency", "emotion", "emotional", "empathic", "emperor", "empire", "empirical", "empowerment", "empty", "encounter", "encrypt", "encryption", "end", "endless", "endorsement", "enemies", "enemy", "energy", "enforcer", "engine", "enjoy", "enlarge", "enlighten", "enormous", "enrage", "enter", "enterprise", "entertain", "entity", "entrance", "entropy", "envelope", "enzyme", "ephemeral", "episode", "equal", "equation", "equipment", "equivalent", "eraser", "erotic", "erotica", "error", "eruption", "escalator", "escape", "escapist", "esoteric", "essence", "essential", "establishment", "estate", "estimate", "eternal", "eternity", "ether", "ethical", "eunuch", "evacuate", "evacuation", "evaluate", "evectional", "even", "event", "eventual", "everlasting", "every", "everyday", "everyone", "evidence", "evil", "evoke", "evolution", "exact", "examiner", "excellent", "exception", "excess", "excessive", "exchange", "excitement", "exclusive", "excuse", "execute", "executioner", "executive", "exhibit", "exhibition", "exile", "existent", "existing", "exit", "exorcism", "expansion", "experiment", "expert", "explicit", "explosion", "export", "expose", "exposition", "expression", "expressive", "exquisite", "extensive", "external", "extortion", "extra", "extract", "extravagant", "extreme", "extremist", "eye", "eyes", "eyetooth", "fabric", "fabrication", "facade", "face", "faction", "factory", "factual", "fade", "fail", "faint", "fairytale", "faith", "faithless", "fake", "falcon", "fall", "falling", "fallout", "falls", "false", "family", "famous", "fanatic", "fanatical", "fancy", "fang", "fantastic", "farm", "fashion", "fashionable", "fast", "fat", "fatal", "fatality", "fate", "fathead", "father", "favor", "favorable", "fear", "fearless", "fearsome", "feast", "feather", "featherweight", "feature", "federal", "federation", "feed", "feel", "feeling", "feelings", "feet", "fellow", "felon", "felony", "felt", "femur", "fence", "ferment", "fermentation", "ferocious", "fertile", "fertility", "festival", "fetish", "feudal", "fever", "fiasco", "fibreglass", "fictional", "field", "fiend", "fiendish", "fierce", "fiery", "fight", "fighter", "fighting", "figurehead", "filament", "film", "filter", "filth", "filthy", "fin", "final", "finale", "financial", "finch", "find", "finger", "fingertip", "finish", "finishing", "finite", "fire", "firearm", "firecracker", "firm", "first", "firstborn", "fish", "fist", "fistfight", "five", "fix", "fizz", "flag", "flags", "flake", "flamboyant", "flamethrower", "flaming", "flammable", "flap", "flash", "flat", "flatness", "flatten", "flavor", "flavoring", "flaw", "flawless", "flesh", "flicker", "flight", "flimsy", "flinch", "flip", "flirt", "flirtation", "flood", "flophouse", "floppy", "floral", "flower", "flowers", "fluctuation", "fluent", "fluid", "flunk", "flush", "flutter", "flux", "fly", "flytrap", "foam", "focus", "fog", "foggy", "fold", "folding", "folk", "fool", "foot", "footwork", "forbidden", "force", "forearm", "foreign", "forest", "forger", "forgery", "forgiven", "forgotten", "fork", "forlornness", "form", "formal", "formula", "formulation", "fornicator", "fort", "fortress", "fortunate", "fortune", "fortuneteller", "forty", "fossil", "foul", "foundation", "founder", "fountain", "four", "fraction", "fracture", "fragile", "fragment", "frame", "frantic", "fraud", "fraudulent", "freak", "freakish", "freaky", "freckled", "free", "freedom", "freewill", "freeze", "freezing", "french", "frequency", "frequent", "fresh", "fried", "friend", "friendless", "fright", "frightening", "frigid", "fringe", "frisky", "frog", "frogs", "front", "frontier", "frost", "frozen", "frustration", "frying", "fuel", "fugitive", "fully", "fumbling", "functional", "fundamental", "funeral", "funnel", "furious", "furry", "fuse", "future", "futureless", "futuristic", "fuzz", "fuzzy", "gadget", "galactic", "gallery", "galloping", "gamble", "gambler", "game", "gang", "gangland", "gaping", "garage", "garden", "gargantuan", "gargoyle", "gasmask", "gate", "gateway", "gaunt", "gauntlet", "gazelle", "gear", "gems", "general", "generation", "genetic", "genuine", "geometric", "geometrical", "geometry", "germ", "gestural", "getaway", "ghetto", "ghost", "ghostly", "ghoul", "ghoulish", "giant", "gibberish", "gift", "gifted", "gigantic", "gimmick", "ginger", "giver", "giving", "glacial", "glacier", "gladness", "glamor", "glamorous", "gland", "glandular", "glass", "glider", "glimmer", "glitter", "glittery", "global", "gloomy", "glory", "glossy", "gloves", "glow", "glumly", "glutton", "gluttonous", "goat", "gobbling", "god", "godless", "godsent", "goggles", "going", "gold", "goldbricker", "goldfish", "gone", "good", "goodbye", "goofball", "goon", "gorgeous", "gorilla", "gossip", "governor", "grab", "grabbing", "graceful", "grade", "gradient", "graffiti", "grain", "grainy", "grand", "grandiose", "granite", "granularity", "grape", "graphic", "grappler", "grasp", "grasshopper", "grateful", "grave", "gravel", "graveyard", "gravitational", "gravy", "gray", "grease", "greasy", "great", "greatest", "greed", "greedy", "green", "grenade", "grey", "grid", "grieving", "grill", "grim", "grin", "grind", "grinder", "grinding", "grinning", "grip", "gripping", "grit", "gritty", "grizzly", "groan", "groaner", "groaning", "groove", "groovy", "gross", "grotesque", "ground", "grounds", "groundwave", "group", "growl", "grunting", "guaranteed", "guard", "guerilla", "guest", "guide", "guidebook", "guideline", "guild", "guillotine", "guilt", "guilty", "gulf", "gum", "gun", "gunk", "gunplay", "gunrunner", "guns", "gurgle", "gurgling", "guru", "gushing", "gutless", "guts", "gutsy", "gutter", "guzzling", "gymnast", "gymnastic", "habit", "habitual", "hack", "hacksaw", "hairless", "hairy", "half", "halfway", "halloween", "hallucination", "halting", "hammerhead", "hamster", "hand", "handlebars", "handler", "hands", "handsaw", "hangar", "hangman", "hangover", "happiness", "happy", "harbor", "hard", "harlot", "harm", "harmless", "harmonic", "harmony", "harness", "harplike", "harpoon", "harsh", "harvest", "hash", "hat", "hatch", "hatchet", "hate", "haunt", "haunting", "hawk", "haywire", "hazard", "hazy", "head", "headache", "headlock", "headphones", "headquarters", "headstrong", "heal", "healer", "healing", "healthy", "hear", "hearing", "hearse", "heart", "heartbeat", "heartbroken", "heartless", "hearts", "heartsick", "heat", "heater", "heating", "heatstroke", "heaven", "heavenly", "heaviest", "heaving", "heavy", "heavyhearted", "heavyset", "heavyweight", "hectic", "heelbone", "heist", "helicopter", "hell", "hellfire", "helmet", "help", "helpless", "hemlock", "herald", "herb", "herd", "heretic", "heretical", "heritage", "hermit", "hero", "heroes", "heroic", "hesitation", "hex", "hibernation", "hickory", "hidden", "hide", "hideaway", "hideous", "hideout", "high", "highway", "hill", "hills", "hinge", "hipbone", "hippo", "hirsute", "hiss", "historic", "history", "hit", "hitchhiker", "hive", "hoax", "hoaxer", "hobby", "hogtied", "hogwash", "hoist", "hold", "holding", "holdup", "holes", "holiday", "holiest", "hollow", "hollowness", "holy", "home", "homeland", "homeless", "homemade", "homesick", "hometown", "homewards", "homicidal", "homicide", "honest", "honesty", "honey", "honeybee", "honeydew", "honeymoon", "honeypot", "honor", "honorary", "hood", "hoodwink", "hoof", "hoofs", "hook", "hooligan", "hoop", "hoopla", "hooves", "hop", "hope", "hopeless", "hopper", "hopscotch", "horizon", "horizontal", "hormonal", "horn", "horoscope", "horrible", "horrific", "horror", "horrors", "horse", "horseback", "horseplay", "horsepower", "horseradish", "horses", "hose", "hospital", "host", "hostage", "hostility", "hot", "hotel", "hothead", "hotly", "hotter", "hottest", "hound", "hour", "house", "houseguest", "hover", "how", "however", "howling", "huffy", "hug", "huge", "human", "humanlike", "humanly", "humble", "humid", "humility", "humming", "hump", "hunchback", "hundred", "hunger", "hungry", "hunk", "hunt", "hunter", "hunting", "hurdle", "hush", "hustle", "hyaena", "hybrid", "hymn", "hype", "hypnotic", "ideal", "identical", "identity", "ignorant", "iguana", "illegal", "imaginary", "immunity", "implant", "imposter", "imprint", "improper", "impure", "indecent", "industrial", "industry", "infinite", "initial", "injury", "injustice", "ink", "inner", "innocent", "insane", "insanity", "insect", "insecure", "insurance", "internal", "intimate", "intoxicant", "intruder", "invader", "invention", "inverse", "invisible", "invitation", "iron", "islamism", "island", "ivory", "ivy", "jackknife", "jade", "jagged", "jar", "jerid", "jerk", "jewel", "jigsaw", "joypop", "joyride", "joystick", "judgment", "juice", "jump", "junior", "junk", "junkyard", "justice", "juvenile", "kangaroo", "key", "kick", "kidnapper", "kill", "killjoy", "kind", "king", "kingdom", "kissing", "kitten", "knot", "knowing", "knuckle", "knuckles", "lady", "ladybug", "land", "lands", "landscape", "lantern", "large", "largest", "laser", "lasso", "last", "lavender", "leaf", "leather", "left", "legend", "legendary", "legion", "lemon", "lethal", "level", "levitating", "liberal", "liberating", "liberation", "lick", "licker", "life", "light", "lightning", "lights", "lime", "limitless", "limousine", "linear", "link", "lion", "liqueur", "liquid", "liquor", "little", "live", "liver", "lizard", "lock", "lockbox", "locus", "locust", "logic", "logical", "lollipop", "loneliness", "lonely", "loner", "lonesome", "long", "loop", "loophole", "lord", "loser", "lottery", "love", "lovesick", "low", "loyal", "lubricant", "luck", "lucky", "lullaby", "luminous", "lump", "lurker", "lust", "lustre", "luxurious", "luxury", "machine", "mad", "magic", "magnet", "magnetic", "magnificent", "major", "marble", "marginal", "marsh", "martingale", "martini", "martyr", "mary", "mask", "massacre", "massive", "master", "maximum", "meat", "mechanical", "medicine", "medusa", "megacity", "melody", "melt", "memory", "menace", "mental", "messenger", "messiah", "metal", "metallic", "mightiest", "mighty", "military", "milky", "mind", "mindless", "minimal", "minipill", "mirror", "miserable", "misshapen", "missing", "mission", "mistaken", "mix", "mixer", "moan", "moaning", "mob", "mobster", "model", "modern", "mohawk", "moist", "molecular", "molten", "moment", "momentary", "monarchy", "money", "mongrel", "monkey", "monochrome", "mood", "moon", "moonbeam", "morbid", "more", "morsel", "mortal", "moth", "mother", "mountain", "mouth", "murder", "murderer", "murderous", "murky", "muscle", "muscleman", "muscular", "mushroom", "mustache", "mutagen", "mutant", "mutation", "mutilation", "muzzle", "mysterious", "mystery", "mystical", "mythical", "naive", "naked", "narcotic", "nasty", "national", "natural", "near", "nebula", "neck", "necrotic", "nectar", "needle", "negative", "neon", "nerve", "nervous", "neurotic", "new", "nice", "night", "nightfall", "nightmare", "nineteen", "nitro", "noble", "noir", "noise", "noisemaker", "nomad", "nomadic", "norm", "normal", "north", "northern", "nuclear", "nude", "number", "numbskull", "numeric", "nurse", "obey", "object", "observer", "obsession", "ocean", "octopus", "odd", "offender", "officer", "official", "old", "omnivore", "one", "open", "operatic", "opposition", "optimum", "optional", "orange", "orangutang", "orb", "orchard", "ordeal", "original", "ornamental", "orphan", "orphanage", "orthodox", "overt", "owl", "ox", "pagan", "pageant", "pain", "painkiller", "painless", "pale", "pandemic", "panic", "paper", "parachute", "parade", "paradise", "paradox", "parallel", "paralysed", "paralysis", "parasite", "parasitic", "parcel", "parrot", "passenger", "passion", "paste", "pastoral", "patient", "patrol", "pattern", "pavement", "peach", "pearl", "peepshow", "pelvic", "penguin", "peppermint", "perception", "percussive", "perfect", "perfection", "perfume", "perilous", "periodic", "perplexing", "personal", "pervert", "perverted", "pesky", "pessimist", "pest", "phantom", "pharaoh", "phase", "phenomena", "phenomenal", "philosophy", "phonetic", "phonograph", "photograph", "pick", "picnic", "pictorial", "piece", "pieces", "pig", "pigeon", "pigsticker", "pilgrim", "pill", "pillbox", "pilot", "pimp", "pin", "pinch", "pineapple", "pink", "pinwheel", "pipe", "pipes", "pistol", "pitch", "pity", "plaid", "planet", "planetary", "plant", "plantation", "plasma", "plastic", "play", "playground", "plaything", "playtime", "pleasant", "plush", "pneumatic", "pocket", "poet", "poetic", "poetry", "poison", "poisoner", "poisonous", "polar", "polite", "pony", "poor", "popular", "pork", "port", "portal", "portrait", "position", "positive", "possess", "possession", "potential", "pound", "pounding", "powder", "power", "powerful", "powerless", "practical", "pragmatic", "prank", "prayer", "predator", "predatory", "predict", "prediction", "prefab", "present", "preserve", "president", "pressure", "presumed", "pretend", "primate", "prime", "primitive", "prior", "private", "privilege", "privileged", "probe", "process", "production", "profile", "profound", "program", "project", "projection", "promise", "promised", "prong", "proof", "propaganda", "propellant", "propeller", "proper", "property", "prophesy", "prophet", "prophetic", "prophets", "proposal", "protect", "protection", "protest", "proud", "proven", "provider", "psycho", "public", "pull", "pulse", "punch", "puppet", "pure", "purple", "purpose", "push", "puzzle", "pyramids", "python", "quantum", "queen", "quick", "rabbit", "racket", "racoon", "rage", "raid", "rain", "rainfall", "ranch", "ransom", "rapid", "rare", "raspberry", "rassling", "raster", "rastle", "rastled", "rastling", "rat", "rattle", "raven", "raw", "ray", "really", "rear", "reason", "rebel", "recent", "reckless", "recluse", "record", "red", "refugee", "regional", "regret", "relearn", "release", "repeat", "reptile", "republic", "rerun", "research", "retreat", "revenge", "reversal", "reverse", "revolt", "rib", "rich", "riddle", "right", "rights", "ring", "riot", "ripe", "risky", "rival", "roast", "robber", "robbery", "robot", "robotic", "rodent", "room", "root", "rose", "rot", "rotten", "rough", "round", "royal", "royalty", "rubber", "ruby", "rude", "rum", "rust", "sabotage", "sacred", "sad", "sadistic", "sadness", "saint", "salt", "salty", "sand", "sanitary", "sauce", "savage", "sawdust", "scanner", "scar", "scenic", "scheme", "schemer", "scream", "screamer", "search", "section", "sector", "seducer", "seed", "selfish", "sentinel", "serenity", "series", "serpent", "serum", "servant", "settler", "setup", "seven", "several", "severe", "sewage", "sex", "sexiest", "sexless", "sexual", "shack", "shackle", "shadow", "shag", "shake", "shaman", "shameful", "shark", "sharp", "shine", "shipment", "shock", "shocking", "short", "shotgun", "show", "shrimp", "sick", "sideshow", "sideways", "signal", "silence", "silver", "simple", "sink", "siren", "sissy", "six", "skin", "skull", "sky", "skyline", "slap", "slave", "sleep", "slippery", "small", "smallpox", "smart", "smile", "smoke", "smooth", "smuggler", "smut", "snail", "snake", "social", "soft", "solid", "solitary", "some", "someone", "song", "sonic", "soon", "sorrow", "soul", "sound", "soup", "source", "south", "southern", "sparkle", "sparkler", "sparrow", "speed", "spell", "sphere", "spider", "spike", "spirit", "spirits", "sponge", "sprite", "sprites", "square", "stage", "stallion", "star", "starfish", "state", "station", "stealthy", "steel", "sticky", "stiff", "stone", "strange", "strong", "stun", "suave", "subsonic", "subway", "suckle", "sudden", "sugar", "sun", "sunrise", "super", "surgeon", "surgical", "surreal", "swamp", "swarm", "sweat", "sweet", "swindler", "switch", "swollen", "symbol", "symbolic", "system", "tactic", "tactical", "talk", "tank", "taste", "teargas", "teen", "teeth", "ten", "tense", "tenth", "terminus", "terrific", "terror", "thick", "thief", "thin", "thing", "things", "think", "threat", "thumb", "thunder", "tiger", "tight", "time", "timeless", "timid", "tin", "tiny", "tongue", "tooth", "top", "torch", "tornado", "torpedo", "total", "toy", "tragic", "trap", "trauma", "treason", "treasure", "tree", "treed", "tremor", "trial", "triangle", "true", "trust", "truth", "twelve", "twin", "twisted", "two", "tyrant", "ugly", "ultimate", "under", "undersea", "union", "unit", "unliving", "unsure", "uprising", "uptown", "urban", "useless", "vacant", "vampire", "vast", "vibrator", "victory", "village", "villain", "vinyl", "violence", "violent", "viper", "virgin", "virtual", "vision", "visitor", "vixen", "voice", "void", "volcanic", "volcano", "volume", "vulture", "wake", "wall", "war", "warm", "warmth", "warning", "warp", "warrior", "wartime", "wasp", "watch", "water", "waveform", "wax", "weak", "wealthy", "weapon", "wearable", "weasel", "web", "weed", "weird", "weirdo", "wept", "werewolf", "west", "western", "westwork", "wet", "whale", "whales", "whip", "whisper", "wife", "wig", "wild", "wilderness", "willow", "winter", "wire", "wisdom", "wise", "wish", "witch", "witness", "wizard", "wolf", "wolves", "wonder", "world", "worm", "wreck", "wreckage", "wrong", "young", "zebra", "zero", "zipper", "zombie", "zoo"], d = "", e = inputStr(2), f = c.length; f; a = parseInt(Math.random() * f),
        b = c[--f], c[f] = c[a], c[a] = b);
    for (var g = 0; e > g;) d = d + " <span>" + c[g] + "</span>", g++;
    showResult(d, !0)
}

function doRandomSentence() {
    for (var a = ["ability", "abroad", "abuse", "access", "accident", "account", "act", "action", "active", "activity", "actor", "addition", "address", "administration", "adult", "advance", "advantage", "advice", "affair", "affect", "afternoon", "age", "agency", "agent", "agreement", "air", "airline", "airport", "alarm", "alcohol", "alternative", "ambition", "amount", "analysis", "analyst", "anger", "angle", "animal", "annual", "answer", "anxiety", "anybody", "anything", "anywhere", "apartment", "appeal", "appearance", "apple", "application", "appointment", "area", "argument", "arm", "army", "arrival", "art", "article", "aside", "aspect", "assignment", "assist", "assistance", "assistant", "associate", "association", "assumption", "atmosphere", "attack", "attempt", "attention", "attitude", "audience", "author", "average", "award", "awareness", "baby", "back", "background", "bag", "bake", "balance", "ball", "band", "bank", "bar", "base", "baseball", "basis", "basket", "bat", "bath", "bathroom", "battle", "beach", "bear", "beat", "beautiful", "bed", "bedroom", "beer", "bell", "belt", "bench", "bend", "benefit", "bet", "beyond", "bicycle", "bid", "big", "bike", "bill", "bird", "birth", "birthday", "bit", "bite", "bitter", "black", "blame", "blank", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bone", "bonus", "book", "boot", "border", "boss", "bother", "bottle", "bottom", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brave", "bread", "break", "breakfast", "breast", "breath", "brick", "bridge", "brief", "brilliant", "broad", "brother", "brown", "brush", "buddy", "budget", "bug", "building", "bunch", "burn", "bus", "business", "button", "buy", "buyer", "cabinet", "cable", "cake", "calendar", "call", "calm", "camera", "camp", "campaign", "can", "cancel", "cancer", "candidate", "candle", "candy", "cap", "capital", "car", "card", "care", "career", "carpet", "carry", "case", "cash", "cat", "catch", "category", "cause", "celebration", "cell", "chain", "chair", "challenge", "champion", "championship", "chance", "change", "channel", "chapter", "character", "charge", "charity", "chart", "check", "cheek", "chemical", "chemistry", "chest", "chicken", "child", "childhood", "chip", "chocolate", "choice", "church", "cigarette", "city", "claim", "class", "classic", "classroom", "clerk", "click", "client", "climate", "clock", "closet", "clothes", "cloud", "club", "clue", "coach", "coast", "coat", "code", "coffee", "cold", "collar", "collection", "college", "combination", "combine", "comfort", "comfortable", "command", "comment", "commercial", "commission", "committee", "common", "communication", "community", "company", "comparison", "competition", "complaint", "complex", "computer", "concentrate", "concept", "concern", "concert", "conclusion", "condition", "conference", "confidence", "conflict", "confusion", "connection", "consequence", "consideration", "consist", "constant", "construction", "contact", "contest", "context", "contract", "contribution", "control", "conversation", "convert", "cook", "cookie", "copy", "corner", "cost", "count", "counter", "country", "county", "couple", "courage", "course", "court", "cousin", "cover", "cow", "crack", "craft", "crash", "crazy", "cream", "creative", "credit", "crew", "criticism", "cross", "cry", "culture", "cup", "currency", "current", "curve", "customer", "cut", "cycle", "dad", "damage", "dance", "dare", "dark", "data", "database", "date", "daughter", "day", "dead", "deal", "dealer", "dear", "death", "debate", "debt", "decision", "deep", "definition", "degree", "delay", "delivery", "demand", "department", "departure", "dependent", "deposit", "depression", "depth", "description", "design", "designer", "desire", "desk", "detail", "development", "device", "devil", "diamond", "diet", "difference", "difficulty", "dig", "dimension", "dinner", "direction", "director", "dirt", "disaster", "discipline", "discount", "discussion", "disease", "dish", "disk", "display", "distance", "distribution", "district", "divide", "doctor", "document", "dog", "door", "dot", "double", "doubt", "draft", "drag", "drama", "draw", "drawer", "dream", "dress", "drink", "drive", "driver", "drop", "drunk", "due", "dump", "dust", "duty", "ear", "earth", "ease", "east", "eat", "economics", "economy", "edge", "editor", "education", "effect", "effective", "efficiency", "effort", "egg", "election", "elevator", "emergency", "emotion", "emphasis", "employ", "employee", "employer", "employment", "energy", "engine", "engineer", "entertainment", "enthusiasm", "entrance", "entry", "environment", "equal", "equipment", "equivalent", "error", "escape", "essay", "establishment", "estate", "estimate", "evening", "event", "evidence", "exam", "examination", "example", "exchange", "excitement", "excuse", "exercise", "exit", "experience", "expert", "explanation", "expression", "extension", "extent", "external", "extreme", "eye", "face", "fact", "factor", "fail", "failure", "fall", "familiar", "family", "fan", "farm", "farmer", "fat", "father", "fault", "fear", "feature", "fee", "feed", "feedback", "feel", "female", "few", "field", "fight", "figure", "file", "fill", "film", "final", "finance", "finger", "finish", "fire", "fish", "fix", "flight", "floor", "flow", "flower", "fly", "focus", "fold", "food", "foot", "football", "force", "forever", "formal", "fortune", "foundation", "frame", "freedom", "friend", "friendship", "front", "fruit", "fuel", "fun", "function", "funeral", "funny", "future", "gain", "game", "gap", "garage", "garbage", "garden", "gas", "gate", "gather", "gear", "gene", "general", "gift", "girl", "girlfriend", "give", "glad", "glass", "glove", "go", "goal", "god", "gold", "golf", "good", "government", "grab", "grade", "grand", "grandfather", "grandmother", "grass", "great", "green", "grocery", "ground", "group", "growth", "guarantee", "guard", "guess", "guest", "guidance", "guide", "guitar", "guy", "habit", "hair", "half", "hall", "hand", "handle", "hang", "harm", "hat", "hate", "head", "health", "heart", "heavy", "height", "hell", "hello", "help", "hide", "high", "highlight", "highway", "hire", "historian", "history", "hit", "hold", "hole", "holiday", "home", "homework", "honey", "hook", "hope", "horror", "horse", "hospital", "host", "hotel", "hour", "house", "housing", "human", "hunt", "hurry", "hurt", "husband", "ice", "idea", "ideal", "if", "illegal", "image", "imagination", "impact", "implement", "importance", "impress", "impression", "improvement", "incident", "income", "increase", "independence", "independent", "indication", "individual", "industry", "inevitable", "inflation", "influence", "information", "initial", "initiative", "injury", "insect", "inside", "inspection", "inspector", "instance", "instruction", "insurance", "intention", "interaction", "interest", "internal", "international", "internet", "interview", "introduction", "investment", "invite", "iron", "island", "issue", "it", "item", "jacket", "job", "join", "joint", "joke", "judge", "judgment", "juice", "jump", "junior", "jury", "keep", "key", "kick", "kid", "kill", "kind", "king", "kiss", "kitchen", "knee", "knife", "knowledge", "lab", "lack", "ladder", "lady", "lake", "land", "landscape", "language", "laugh", "law", "lawyer", "lay", "layer", "lead", "leader", "leadership", "league", "leather", "leave", "lecture", "leg", "length", "lesson", "let", "letter", "level", "library", "lie", "life", "lift", "light", "limit", "line", "link", "lip", "list", "listen", "literature", "load", "loan", "local", "location", "lock", "log", "long", "look", "loss", "love", "low", "luck", "lunch", "machine", "magazine", "mail", "main", "maintenance", "major", "make", "male", "mall", "man", "management", "manager", "manner", "manufacturer", "many", "map", "march", "mark", "market", "marriage", "master", "match", "mate", "material", "math", "matter", "maximum", "maybe", "meal", "measurement", "meat", "media", "medicine", "medium", "meet", "meeting", "member", "membership", "memory", "mention", "menu", "mess", "message", "metal", "method", "middle", "midnight", "might", "milk", "mind", "mine", "minimum", "minor", "minute", "mirror", "miss", "mission", "mistake", "mix", "mixture", "mobile", "mode", "model", "mom", "moment", "money", "monitor", "month", "mood", "morning", "mortgage", "most", "mother", "motor", "mountain", "mouse", "mouth", "move", "movie", "mud", "muscle", "music", "nail", "name", "nasty", "nation", "national", "native", "natural", "nature", "neat", "necessary", "neck", "negative", "negotiation", "nerve", "net", "network", "news", "newspaper", "night", "nobody", "noise", "normal", "north", "nose", "note", "nothing", "notice", "novel", "nurse", "object", "objective", "obligation", "occasion", "offer", "office", "officer", "official", "oil", "one", "operation", "opinion", "opportunity", "opposite", "option", "orange", "order", "ordinary", "organization", "original", "other", "outcome", "outside", "oven", "owner", "pace", "pack", "package", "page", "pain", "paint", "pair", "panic", "paper", "parent", "park", "parking", "part", "particular", "partner", "party", "pass", "passage", "passenger", "passion", "past", "path", "patience", "patient", "pattern", "pause", "pay", "payment", "peace", "peak", "pen", "penalty", "pension", "people", "percentage", "perception", "performance", "period", "permission", "permit", "person", "personal", "personality", "perspective", "phase", "philosophy", "phone", "photo", "phrase", "physical", "physics", "piano", "pick", "picture", "pie", "piece", "pin", "pipe", "pitch", "pizza", "plan", "plane", "plant", "plastic", "plate", "platform", "play", "player", "pleasure", "plenty", "poem", "poet", "poetry", "point", "police", "policy", "politics", "pollution", "pool", "pop", "population", "position", "positive", "possession", "possibility", "possible", "post", "pot", "potato", "potential", "pound", "power", "practice", "preference", "preparation", "presence", "present", "presentation", "president", "press", "pressure", "price", "pride", "priest", "primary", "principle", "print", "prior", "priority", "private", "prize", "problem", "procedure", "produce", "product", "profession", "professional", "professor", "profile", "profit", "program", "progress", "project", "promise", "promotion", "prompt", "proof", "property", "proposal", "protection", "psychology", "public", "pull", "punch", "purchase", "purple", "purpose", "push", "put", "quality", "quantity", "quarter", "queen", "question", "quiet", "quit", "quote", "race", "radio", "rain", "raise", "range", "rate", "ratio", "raw", "reach", "reaction", "read", "reality", "reason", "reception", "recipe", "recognition", "recommendation", "record", "recover", "red", "reference", "reflection", "refrigerator", "refuse", "region", "register", "regret", "regular", "relation", "relationship", "relative", "release", "relief", "remote", "remove", "rent", "repair", "repeat", "replacement", "reply", "report", "representative", "republic", "reputation", "request", "requirement", "research", "reserve", "resident", "resist", "resolution", "resolve", "resort", "resource", "respect", "respond", "response", "responsibility", "rest", "restaurant", "result", "return", "reveal", "revenue", "review", "revolution", "reward", "rice", "rich", "ride", "ring", "rip", "rise", "risk", "river", "road", "rock", "role", "roll", "roof", "room", "rope", "rough", "round", "routine", "row", "royal", "rub", "ruin", "rule", "run", "rush", "sad", "safe", "safety", "sail", "salad", "salary", "sale", "salt", "sample", "sand", "sandwich", "satisfaction", "save", "savings", "scale", "scene", "schedule", "scheme", "school", "science", "score", "scratch", "screen", "screw", "script", "sea", "search", "season", "seat", "secret", "secretary", "section", "sector", "security", "selection", "self", "sell", "senior", "sense", "sensitive", "sentence", "series", "serve", "service", "session", "set", "sex", "shake", "shame", "shape", "share", "she", "shelter", "shift", "shine", "ship", "shirt", "shock", "shoe", "shoot", "shop", "shot", "shoulder", "show", "shower", "sick", "side", "sign", "signal", "signature", "significance", "silly", "silver", "simple", "singer", "single", "sink", "sir", "sister", "site", "situation", "size", "skill", "skin", "skirt", "sky", "sleep", "slice", "slide", "slip", "smell", "smile", "smoke", "snow", "society", "sock", "soft", "software", "soil", "solid", "solution", "somewhere", "son", "song", "sort", "sound", "soup", "source", "south", "space", "spare", "speaker", "special", "specialist", "specific", "speech", "speed", "spell", "spend", "spirit", "spiritual", "spite", "split", "sport", "spot", "spray", "spread", "spring", "square", "stable", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "status", "stay", "steak", "steal", "step", "stick", "still", "stock", "stomach", "stop", "storage", "store", "storm", "story", "strain", "stranger", "strategy", "street", "strength", "stress", "stretch", "strike", "string", "strip", "stroke", "structure", "struggle", "student", "studio", "stuff", "stupid", "style", "subject", "substance", "success", "suck", "sugar", "suggestion", "suit", "summer", "sun", "supermarket", "support", "surgery", "surprise", "surround", "survey", "suspect", "sweet", "swim", "switch", "sympathy", "system", "table", "tackle", "tale", "talk", "tank", "tap", "target", "task", "taste", "tax", "tea", "teach", "teacher", "team", "tear", "technology", "telephone", "television", "tell", "temperature", "temporary", "tennis", "tension", "term", "test", "text", "thanks", "theme", "theory", "thing", "thought", "throat", "ticket", "tie", "till", "tip", "title", "today", "toe", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "total", "touch", "tough", "tour", "tourist", "towel", "tower", "town", "track", "trade", "tradition", "traffic", "train", "trainer", "transition", "transportation", "trash", "travel", "treat", "tree", "trick", "trip", "trouble", "truck", "trust", "truth", "try", "tune", "turn", "twist", "two", "type", "uncle", "union", "unique", "unit", "university", "upper", "upstairs", "use", "user", "usual", "vacation", "valuable", "value", "variation", "variety", "vast", "vegetable", "vehicle", "version", "video", "view", "village", "virus", "visit", "visual", "voice", "volume", "wait", "wake", "walk", "wall", "war", "wash", "watch", "water", "wave", "way", "weakness", "wealth", "wear", "weather", "web", "wedding", "week", "weekend", "weight", "weird", "welcome", "west", "western", "wheel", "whereas", "white", "whole", "wife", "will", "win", "wind", "window", "wine", "wing", "winner", "winter", "wish", "witness", "woman", "wonder", "wood", "word", "worker", "world", "worry", "worth", "wrap", "writer", "yard", "year", "yellow", "yesterday", "you", "young", "youth", "zone"], b = ["accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyze", "announce", "annoy", "answer", "apologise", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess", "up", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practice", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zoom"], c = ["aback", "abaft", "abandoned", "abashed", "aberrant", "abhorrent", "abiding", "abject", "ablaze", "able", "abnormal", "aboard", "aboriginal", "abortive", "abounding", "abrasive", "abrupt", "absent", "absolute", "absorbed", "absorbing", "abstracted", "absurd", "abundant", "abusive", "academic", "acceptable", "accessible", "accidental", "acclaimed", "accomplished", "accurate", "aching", "acid", "acidic", "acoustic", "acrid", "acrobatic", "active", "actual", "actually", "ad hoc", "adamant", "adaptable", "addicted", "additional", "adept", "adhesive", "adjoining", "administrative", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "adventurous", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ahead", "ajar", "alarmed", "alarming", "alcoholic", "alert", "alienated", "alike", "alive", "all", "alleged", "alluring", "aloof", "altruistic", "amazing", "ambiguous", "ambitious", "amiable", "ample", "amuck", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annoyed", "annoying", "annual", "another", "antique", "antsy", "anxious", "any", "apathetic", "appetizing", "apprehensive", "appropriate", "apt", "aquatic", "arctic", "arid", "aromatic", "arrogant", "artistic", "ashamed", "asleep", "aspiring", "assorted", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "auspicious", "austere", "authentic", "authorized", "automatic", "available", "avaricious", "average", "awake", "aware", "awesome", "awful", "awkward", "axiomatic", "babyish", "back", "bad", "baggy", "barbarous", "bare", "barren", "bashful", "basic", "batty", "bawdy", "beautiful", "beefy", "befitting", "belated", "belligerent", "beloved", "beneficial", "bent", "berserk", "best", "better", "bewildered", "bewitched", "big", "big-hearted", "billowy", "biodegradable", "bite-sized", "biting", "bitter", "bizarre", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "bloody", "blue", "blue-eyed", "blushing", "bogus", "boiling", "bold", "bony", "boorish", "bored", "boring", "bossy", "both", "bouncy", "boundless", "bountiful", "bowed", "brainy", "brash", "brave", "brawny", "breakable", "breezy", "brief", "bright", "brilliant", "brisk", "broad", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "cagey", "calculating", "callous", "calm", "candid", "canine", "capable", "capital", "capricious", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "ceaseless", "celebrated", "certain", "changeable", "charming", "cheap", "cheeky", "cheerful", "cheery", "chemical", "chief", "childlike", "chilly", "chivalrous", "chubby", "chunky", "circular", "civil", "clammy", "classic", "classy", "clean", "clear", "clear-cut", "clever", "cloistered", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "coherent", "cold", "colorful", "colorless", "colossal", "combative", "comfortable", "common", "compassionate", "competent", "competitive", "complete", "complex", "complicated", "composed", "comprehensive", "concerned", "concrete", "condemned", "condescending", "confident", "confused", "conscious", "considerate", "consistent", "constant", "contemplative", "content", "conventional", "convincing", "convoluted", "cooing", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "cowardly", "crabby", "crafty", "craven", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultural", "cultured", "cumbersome", "curious", "curly", "curved", "curvy", "cut", "cute", "cylindrical", "cynical", "daffy", "daily", "damaged", "damaging", "damp", "dangerous", "dapper", "daring", "dark", "darling", "dashing", "dazzling", "dead", "deadly", "deadpan", "deafening", "dear", "dearest", "debonair", "decayed", "deceitful", "decent", "decimal", "decisive", "decorous", "deep", "deeply", "defeated", "defective", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicate", "delicious", "delightful", "delirious", "demanding", "demonic", "dense", "dental", "dependable", "dependent", "depraved", "depressed", "deranged", "descriptive", "deserted", "desperate", "despicable", "detailed", "determined", "devilish", "devoted", "didactic", "different", "difficult", "digital", "dilapidated", "diligent", "dim", "diminutive", "dimpled", "dimwitted", "direct", "direful", "dirty", "disagreeable", "disastrous", "discreet", "discrete", "disfigured", "disguised", "disgusted", "disgusting", "dishonest", "disillusioned", "disloyal", "dismal", "dispensable", "distant", "distinct", "distorted", "distraught", "distressed", "disturbed", "divergent", "dizzy", "domineering", "dopey", "doting", "double", "doubtful", "downright", "drab", "draconian", "drafty", "drained", "dramatic", "dreary", "droopy", "drunk", "dry", "dual", "dull", "dusty", "dutiful", "dynamic", "dysfunctional", "each", "eager", "early", "earnest", "earsplitting", "earthy", "eastern", "easy", "easy-going", "eatable", "economic", "ecstatic", "edible", "educated", "educational", "efficacious", "efficient", "eight", "elaborate", "elastic", "elated", "elderly", "electric", "electrical", "electronic", "elegant", "elementary", "elfin", "elite", "elliptical", "emaciated", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "encouraging", "endurable", "energetic", "enlightened", "enormous", "enraged", "entertaining", "enthusiastic", "entire", "envious", "environmental", "equable", "equal", "equatorial", "erect", "erratic", "essential", "esteemed", "ethereal", "ethical", "euphoric", "evanescent", "evasive", "even", "evergreen", "everlasting", "every", "evil", "exalted", "exasperated", "excellent", "excitable", "excited", "exciting", "exclusive", "exemplary", "exhausted", "exhilarated", "existing", "exotic", "expensive", "experienced", "expert", "extensive", "extra-large", "extra-small", "extraneous", "extroverted", "exuberant", "exultant", "fabulous", "faded", "failing", "faint", "fair", "faithful", "fake", "fallacious", "false", "familiar", "famous", "fanatical", "fancy", "fantastic", "far", "far-flung", "far-off", "faraway", "fascinated", "fast", "fat", "fatal", "fatherly", "faulty", "favorable", "favorite", "fearful", "fearless", "federal", "feeble", "feigned", "feisty", "feline", "female", "feminine", "fertile", "festive", "few", "fickle", "fierce", "filthy", "financial", "fine", "finicky", "finished", "firm", "first", "firsthand", "fitting", "five", "fixed", "flagrant", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "floppy", "flowery", "fluffy", "flufy", "fluid", "flustered", "fluttering", "foamy", "focused", "fond", "foolhardy", "foolish", "forceful", "foregoing", "foreign", "forgetful", "forked", "formal", "former", "forsaken", "forthright", "fortunate", "four", "fragile", "fragrant", "frail", "frank", "frantic", "frayed", "free", "freezing", "French", "frequent", "fresh", "fretful", "friendly", "frightened", "frightening", "frigid", "frilly", "frivolous", "frizzy", "front", "frosty", "frothy", "frozen", "frugal", "fruitful", "frustrating", "full", "fumbling", "functional", "funny", "furry", "furtive", "fussy", "future", "futuristic", "fuzzy", "gabby", "gainful", "gamy", "gaping", "gargantuan", "garrulous", "gaseous", "gaudy", "general", "generous", "gentle", "genuine", "ghastly", "giant", "giddy", "gifted", "gigantic", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glib", "glistening", "glittering", "global", "gloomy", "glorious", "glossy", "glum", "godly", "golden", "good", "good-natured", "goofy", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "gratis", "grave", "gray", "greasy", "great", "greedy", "green", "gregarious", "grey", "grieving", "grim", "grimy", "gripping", "grizzled", "groovy", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "guilty", "gullible", "gummy", "gusty", "guttural", "habitual", "hairy", "half", "hallowed", "halting", "handmade", "handsome", "handy", "hanging", "hapless", "happy", "happy-go-lucky", "hard", "hard-to-find", "harebrained", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "heady", "healthy", "heartbreaking", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "hellish", "helpful", "helpless", "hesitant", "hidden", "hideous", "high", "high-level", "high-pitched", "highfalutin", "hilarious", "hissing", "historical", "hoarse", "holistic", "hollow", "homeless", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "horrific", "hospitable", "hot", "huge", "hulking", "humble", "humdrum", "humiliating", "humming", "humongous", "humorous", "hungry", "hurried", "hurt", "hurtful", "hushed", "husky", "hypnotic", "hysterical", "icky", "icy", "ideal", "idealistic", "identical", "idiotic", "idle", "idolized", "ignorant", "ill", "ill-fated", "ill-informed", "illegal", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "imminent", "impartial", "impassioned", "impeccable", "imperfect", "imperturbable", "impish", "impolite", "important", "imported", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incandescent", "incomparable", "incompatible", "incompetent", "incomplete", "inconclusive", "inconsequential", "incredible", "indelible", "indolent", "industrious", "inexpensive", "inexperienced", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innate", "inner", "innocent", "inquisitive", "insecure", "insidious", "insignificant", "insistent", "instinctive", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "intrigued", "invincible", "irate", "ironclad", "irresponsible", "irritable", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jazzy", "jealous", "jittery", "jobless", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbled", "jumbo", "jumpy", "junior", "juvenile", "kaleidoscopic", "kaput", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowing", "knowledgeable", "known", "kooky", "kosher", "labored", "lackadaisical", "lacking", "lame", "lamentable", "languid", "lanky", "large", "last", "lasting", "late", "latter", "laughable", "lavish", "lawful", "lazy", "leading", "leafy", "lean", "learned", "left", "legal", "legitimate", "lethal", "level", "lewd", "light", "lighthearted", "likable", "like", "likeable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "literate", "little", "live", "lively", "livid", "living", "loathsome", "logical", "lone", "lonely", "long", "long-term", "longing", "loose", "lopsided", "lost", "loud", "loutish", "lovable", "lovely", "loving", "low", "lowly", "loyal", "lucky", "ludicrous", "lumbering", "luminous", "lumpy", "lush", "lustrous", "luxuriant", "luxurious", "lying", "lyrical", "macabre", "macho", "mad", "maddening", "made-up", "madly", "magenta", "magical", "magnificent", "majestic", "major", "makeshift", "male", "malicious", "mammoth", "maniacal", "many", "marked", "married", "marvelous", "masculine", "massive", "material", "materialistic", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "melancholy", "mellow", "melodic", "melted", "memorable", "menacing", "mental", "merciful", "mere", "merry", "messy", "metallic", "mighty", "mild", "military", "milky", "mindless", "miniature", "minor", "minty", "minute", "miscreant", "miserable", "miserly", "misguided", "mistaken", "misty", "mixed", "moaning", "modern", "modest", "moist", "moldy", "momentous", "monstrous", "monthly", "monumental", "moody", "moral", "mortified", "motherly", "motionless", "mountainous", "muddled", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "mute", "muted", "mysterious", "naive", "nappy", "narrow", "nasty", "natural", "naughty", "nauseating", "nautical", "near", "neat", "nebulous", "necessary", "needless", "needy", "negative", "neglected", "negligible", "neighboring", "neighborly", "nervous", "new", "next", "nice", "nifty", "nimble", "nine", "nippy", "nocturnal", "noiseless", "noisy", "nonchalant", "nondescript", "nonsensical", "nonstop", "normal", "nostalgic", "nosy", "notable", "noted", "noteworthy", "novel", "noxious", "null", "numb", "numberless", "numerous", "nutritious", "nutty", "oafish", "obedient", "obeisant", "obese", "oblivious", "oblong", "obnoxious", "obscene", "obsequious", "observant", "obsolete", "obtainable", "obvious", "occasional", "oceanic", "odd", "oddball", "offbeat", "offensive", "official", "oily", "old", "old-fashioned", "omniscient", "one", "onerous", "only", "open", "opposite", "optimal", "optimistic", "opulent", "orange", "orderly", "ordinary", "organic", "original", "ornate", "ornery", "ossified", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overconfident", "overcooked", "overdue", "overjoyed", "overlooked", "overrated", "overt", "overwrought", "painful", "painstaking", "palatable", "pale", "paltry", "panicky", "panoramic", "parallel", "parched", "parsimonious", "partial", "passionate", "past", "pastel", "pastoral", "pathetic", "peaceful", "penitent", "peppery", "perfect", "perfumed", "periodic", "perky", "permissible", "perpetual", "perplexed", "personal", "pertinent", "pesky", "pessimistic", "petite", "petty", "phobic", "phony", "physical", "picayune", "piercing", "pink", "piquant", "pitiful", "placid", "plain", "plaintive", "plastic", "plausible", "playful", "pleasant", "pleased", "pleasing", "plucky", "plump", "plush", "pointed", "pointless", "poised", "polished", "polite", "political", "pompous", "poor", "popular", "portly", "posh", "positive", "possessive", "possible", "potable", "powerful", "powerless", "practical", "precious", "pregnant", "premium", "present", "prestigious", "pretty", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "protective", "proud", "prudent", "psychedelic", "psychological", "psychotic", "public", "puffy", "pumped", "punctual", "pungent", "puny", "pure", "purple", "purring", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quickest", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "rabid", "racial", "radiant", "ragged", "rainy", "rambunctious", "rampant", "rapid", "rare", "rash", "raspy", "ratty", "raw", "ready", "real", "realistic", "reasonable", "rebel", "recent", "receptive", "reckless", "recondite", "rectangular", "red", "redundant", "reflecting", "reflective", "regal", "regular", "relevant", "reliable", "relieved", "remarkable", "reminiscent", "remorseful", "remote", "repentant", "repulsive", "required", "resolute", "resonant", "respectful", "responsible", "responsive", "revolving", "rewarding", "rhetorical", "rich", "right", "righteous", "rightful", "rigid", "ringed", "ripe", "ritzy", "roasted", "robust", "romantic", "roomy", "rosy", "rotating", "rotten", "rotund", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rude", "rundown", "runny", "rural", "rustic", "rusty", "ruthless", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "sassy", "satisfied", "satisfying", "savory", "scaly", "scandalous", "scant", "scarce", "scared", "scary", "scattered", "scented", "scholarly", "scientific", "scintillating", "scornful", "scratchy", "scrawny", "screeching", "second", "second-hand", "secondary", "secret", "secretive", "sedate", "seemly", "selective", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "sexual", "shabby", "shadowy", "shady", "shaggy", "shaky", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shivering", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shut", "shy", "sick", "significant", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sincere", "sinful", "single", "six", "sizzling", "skeletal", "skillful", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "sloppy", "slow", "slushy", "small", "smarmy", "smart", "smelly", "smiling", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snobbish", "snoopy", "snotty", "sociable", "soft", "soggy", "solid", "somber", "some", "sophisticated", "sordid", "sore", "sorrowful", "sorry", "soulful", "soupy", "sour", "southern", "Spanish", "sparkling", "sparse", "special", "specific", "spectacular", "speedy", "spherical", "spicy", "spiffy", "spiky", "spirited", "spiritual", "spiteful", "splendid", "spooky", "spotless", "spotted", "spotty", "spry", "spurious", "squalid", "square", "squeaky", "squealing", "squeamish", "squiggly", "stable", "staid", "stained", "staking", "stale", "standard", "standing", "starchy", "stark", "starry", "statuesque", "steadfast", "steady", "steel", "steep", "stereotyped", "sticky", "stiff", "stimulating", "stingy", "stormy", "stout", "straight", "strange", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "subsequent", "substantial", "subtle", "suburban", "successful", "succinct", "succulent", "sudden", "sufficient", "sugary", "suitable", "sulky", "sunny", "super", "superb", "superficial", "superior", "supportive", "supreme", "sure-footed", "surprised", "suspicious", "svelte", "swanky", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "symptomatic", "synonymous", "taboo", "tacit", "tacky", "talented", "talkative", "tall", "tame", "tan", "tangible", "tangy", "tart", "tasteful", "tasteless", "tasty", "tattered", "taut", "tawdry", "tearful", "technical", "tedious", "teeming", "teeny", "teeny-tiny", "telling", "temporary", "tempting", "ten", "tender", "tense", "tenuous", "tepid", "terrible", "terrific", "tested", "testy", "thankful", "therapeutic", "thick", "thin", "thinkable", "third", "thirsty", "thorny", "thorough", "thoughtful", "thoughtless", "threadbare", "threatening", "three", "thrifty", "thundering", "thunderous", "tidy", "tight", "tightfisted", "timely", "tinted", "tiny", "tired", "tiresome", "toothsome", "torn", "torpid", "total", "tough", "towering", "traditional", "tragic", "trained", "tranquil", "trashy", "traumatic", "treasured", "tremendous", "triangular", "tricky", "trifling", "trim", "trite", "trivial", "troubled", "truculent", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "two", "typical", "ubiquitous", "ugliest", "ugly", "ultimate", "ultra", "unable", "unacceptable", "unaccountable", "unarmed", "unaware", "unbecoming", "unbiased", "uncomfortable", "uncommon", "unconscious", "uncovered", "understated", "understood", "undesirable", "unequal", "unequaled", "uneven", "unfair", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "uninterested", "unique", "united", "unkempt", "unknown", "unlawful", "unlikely", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsuitable", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "uppity", "upright", "upset", "uptight", "urban", "usable", "used", "useful", "useless", "utilized", "utopian", "utter", "uttermost", "vacant", "vacuous", "vague", "vain", "valid", "valuable", "vapid", "variable", "various", "vast", "velvety", "venerated", "vengeful", "venomous", "verdant", "verifiable", "versed", "vexed", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violent", "violet", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voiceless", "volatile", "voluminous", "voracious", "vulgar", "wacky", "waggish", "waiting", "wakeful", "wan", "wandering", "wanting", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "weak", "wealthy", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "whispering", "white", "whole", "wholesale", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "wistful", "witty", "wobbly", "woebegone", "woeful", "womanly", "wonderful", "wooden", "woozy", "wordy", "workable", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "xenophobic", "yawning", "yearly", "yellow", "yellowish", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy"], d = "", e = [], f = inputStr(2), g = 0, h = 0, i = 5, j = 0; f > g;) {
        var k = Math.floor(1481 * Math.random()),
            l = Math.floor(632 * Math.random()),
            m = Math.floor(1903 * Math.random()),
            n = Math.floor(1481 * Math.random()),
            o = Math.floor(632 * Math.random()),
            p = Math.floor(1903 * Math.random()),
            q = Math.floor(1481 * Math.random()),
            r = (Math.floor(632 * Math.random()), Math.floor(1903 * Math.random())),
            s = Math.floor(1481 * Math.random()),
            t = Math.floor(632 * Math.random()),
            u = Math.floor(632 * Math.random()),
            v = (Math.floor(632 * Math.random()), Math.floor(632 * Math.random())),
            w = (Math.floor(1903 * Math.random()), Math.floor(1903 * Math.random())),
            x = Math.floor(1903 * Math.random()),
            y = Math.floor(1903 * Math.random()),
            z = Math.floor(1481 * Math.random()),
            A = Math.floor(1481 * Math.random()),
            B = Math.floor(1481 * Math.random()),
            C = Math.floor(1481 * Math.random()),
            D = Math.floor(1481 * Math.random()),
            E = Math.floor(1481 * Math.random()),
            F = Math.floor(1481 * Math.random()),
            G = Math.floor(1481 * Math.random());
        e[0] = "The " + c[m] + " " + a[k] + " can't " + b[l] + " the " + a[n] + ".", e[1] = "Did the " + c[p] + " " + a[q] + " really " + b[o] + " the " + a[s] + "?", e[2] = "The " + c[y] + " " + a[z] + " " + b[v] + "s into the " + c[r] + " " + a[A] + ".", e[3] = "What if the " + c[t] + " " + a[B] + " ate the " + a[C] + "?", e[4] = "Is the " + b[u] + " " + a[D] + " better than the " + a[E] + "?", e[5] = "It was then the " + c[w] + " " + a[F] + " met the " + c[x] + " " + a[G] + ".", j = Math.floor(Math.random() * (+i - +h) + +h), d = d + " <p>" + e[j] + "</p>", g++
    }
    showResult(d, !0)
}

function doRandomChoice() {
    var a = inputStr();
    a = a.trim();
    var b = [" ", ",", ";", "/", ":", "\n"],
        c = a.split(new RegExp(b.join("|"), "g")),
        d = c.length,
        e = Math.floor(Math.random() * d);
    showResult(c[e])
}

function doAlphabeticalOrder() {
    function a(b, c) {
        var d, e, f = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi,
            g = /(^[ ]*|[ ]*$)/g,
            h = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
            i = /^0x[0-9a-f]+$/i,
            j = /^0/,
            k = function (b) {
                return a.insensitive && ("" + b).toLowerCase() || "" + b
            },
            l = k(b).replace(g, "") || "",
            m = k(c).replace(g, "") || "",
            n = l.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
            o = m.replace(f, "\x00$1\x00").replace(/\0$/, "").replace(/^\0/, "").split("\x00"),
            p = parseInt(l.match(i)) || 1 != n.length && l.match(h) && Date.parse(l),
            q = parseInt(m.match(i)) || p && m.match(h) && Date.parse(m) || null;
        if (q) {
            if (q > p) return -1;
            if (p > q) return 1
        }
        for (var r = 0, s = Math.max(n.length, o.length); s > r; r++) {
            if (d = !(n[r] || "").match(j) && parseFloat(n[r]) || n[r] || 0, e = !(o[r] || "").match(j) && parseFloat(o[r]) || o[r] || 0, isNaN(d) !== isNaN(e)) return isNaN(d) ? 1 : -1;
            if (typeof d != typeof e && (d += "", e += ""), e > d) return -1;
            if (d > e) return 1
        }
        return 0
    }
    var b, c = [];
    b = inputStr(), b = b.trim(), b = b.replace(/(\r\n|\n|\r)/gm, " "), nodsp = /\s+/g, b = b.replace(nodsp, " "), c = b.split(" ");
    for (var d = 0; d < c.length; d++) c[d] = c[d].trim();
    c.sort(), 1 == inputStr(2) && (a.insensitive = !0, c.sort(a)), 2 == inputStr(2) && c.reverse(), b = c.join(" "), b = b.trim(), showResult(b)
}

function doCapitalizeFirstLetter() {
    var a = inputStr();
    a = a.trim(), a = a.replace(/\!\s/g, "##!. "), a = a.replace(/\?\s/g, "##?. ");
    var b = inputStr(2);
    if (5 != b && 6 != b) {
        if (2 != b && 4 != b && (a = a.toLowerCase()), 3 == b || 4 == b) {
            a = a.replace(/\n/g, ". [-<br>-] "), re1 = /\s+/g, a = a.replace(re1, " ");
            var c = " "
        } else {
            a = a.replace(/\.\n/g, ".[-<br>-]. "), a = a.replace(/\.\s\n/g, ". [-<br>-]. "), re1 = /\s+/g, a = a.replace(re1, " ");
            var c = ". "
        }
        var d = a.split(c),
            e = d.length;
        for (x = 0; x < e; x++) d[x] = d[x].replace(d[x].charAt(0), d[x].charAt(0).toUpperCase()), 3 == b || 4 == b ? 0 == x ? a = d[x] + " " : x != e - 1 ? a = a + d[x] + " " : x == e - 1 && (a += d[x]) : 0 == x ? a = d[x] + ". " : x != e - 1 ? a = a + d[x] + ". " : x == e - 1 && (a += d[x]);
        3 == b || 4 == b ? (a = a.replace(/\.\s\[-<br>-\]\s/g, "\n"), a = a.replace(/\.\s\[-<br>-\]/g, "\n")) : a = a.replace(/\[-<br>-\]\.\s/g, "\n")
    } else a = 5 == b ? a.toUpperCase() : a.toLowerCase();
    a = a.replace(/\si\s/g, " I ");
    var a = a.replace(/\##\?\./gm, "?"),
        a = a.replace(/\##\!\./gm, "!");
    showResult(a)
}

function doTableGenerator() {
    var a = "",
        b = "",
        c = "",
        d = "",
        e = "",
        f = "",
        g = "",
        h = "",
        i = "",
        j = "",
        k = "",
        l = "";
    c = inputStr(2), d = inputStr(1), a = inputStr(4), b = inputStr(3), e = inputStr(5), "dsthead-dark" == d && (l = "dsthead-dark", c = "", d = ""), h = '<table class="dstable ' + d + " " + c + '" cellpadding="0" cellspacing="0">\n';
    var m = 0,
        n = 0,
        o = 0;
    for (h += "<thead class='" + l + "'>\n", h += "<tr>\n"; a > m;) n = m + 1, h += "<th>Header " + n + "</th>", m++;
    h += "</tr>\n", h += "</thead>\n", h += "<tbody>\n";
    for (var p = 0; b - 1 > p;) {
        h += "<tr>";
        for (var m = 0; a > m;) n = p + 1, o = m + 1, "Yes" == e ? h = h + "<td>Row:" + n + " Cell:" + o + "</td>" : h += "<td> </td>", m++;
        h += "</tr>\n", p++
    }
    h += "</tbody>\n", h += "</table>\n\n", i = "Yes" == e ? '<table class="dstable ' + d + " " + c + '" cellpadding="0" cellspacing="0"><thead class="' + l + '"><tr><th>Header 1</th><th>Header 2</th><th>Header 3</th><th>Header 4</th><th>Header 5</th></tr></thead><tbody><tr><td>Row:1 Cell:1</td><td>Row:1 Cell:2</td><td>Row:1 Cell:3</td><td>Row:1 Cell:4</td><td>Row:1 Cell:5</td></tr><tr><td>Row:2 Cell:1</td><td>Row:2 Cell:2</td><td>Row:2 Cell:3</td><td>Row:2 Cell:4</td><td>Row:2 Cell:5</td></tr><tr><td>Row:3 Cell:1</td><td>Row:3 Cell:2</td><td>Row:3 Cell:3</td><td>Row:3 Cell:4</td><td>Row:3 Cell:5</td></tr><tr><td>Row:4 Cell:1</td><td>Row:4 Cell:2</td><td>Row:4 Cell:3</td><td>Row:4 Cell:4</td><td>Row:4 Cell:5</td></tr><tr><td>Row:5 Cell:1</td><td>Row:5 Cell:2</td><td>Row:5 Cell:3</td><td>Row:5 Cell:4</td><td>Row:5 Cell:5</td></tr><tr><td>Row:6 Cell:1</td><td>Row:6 Cell:2</td><td>Row:6 Cell:3</td><td>Row:6 Cell:4</td><td>Row:6 Cell:5</td></tr></tbody></table>' : '<table class="dstable ' + d + " " + c + '" cellpadding="0" cellspacing="0"><thead class="' + l + '"><tr><th> </th><th> </th><th> </th><th> </th><th> </th></tr></thead><tbody><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr><tr><td> </td><td> </td><td> </td><td> </td><td> </td></tr></tbody></table>', g = "<style>\n", g += ".dstable {width: 100%;margin-bottom: 1rem;background-color: transparent;border: none;}.dstable td, .dstable th {padding: .75rem;vertical-align: top;border-top: 1px solid #dee2e6;border-color: #dee2e6;text-align: left;}.dstable thead th {vertical-align: bottom;border-bottom: 2px solid #dee2e6;}", "dstable-sm" == d ? g += ".dstable-sm td, .dstable-sm th {padding: .3rem;}" : "dstable-bordered" == d ? g += ".dstable-bordered {border: 1px solid #dee2e6;}.dstable-bordered td, .dstable-bordered th {border: 1px solid #dee2e6;}.dstable-bordered thead td, .dstable-bordered thead th {border-bottom-width: 2px }" : "dstable-borderless" == d ? g += ".dstable-borderless tbody + tbody, .dstable-borderless td, .dstable-borderless th, .dstable-borderless thead th {border: 0 }" : "dstable-striped" == d ? g += ".dstable-striped tbody tr:nth-of-type(odd) {background-color: rgba(0, 0, 0, .05) }" : "dstable-hover" == d ? (g += ".dstable-hover tbody tr:hover {background-color: rgba(0, 0, 0, .075) }", "dstable-light" == c ? g += ".dstable-hover.dstable-light:hover > td, .dstable-hover.dstable-light:hover > th {background-color: #ececf6 }" : "dstable-primary" == c ? g += ".dstable-hover.dstable-primary:hover > td, .dstable-hover.dstable-primary:hover > th {background-color: #9fcdff }" : "dstable-secondary" == c ? g += ".dstable-hover.dstable-secondary:hover > td, .dstable-hover.dstable-secondary:hover > th {background-color: #c8cbcf }" : "dstable-success" == c ? g += ".dstable-hover.dstable-success:hover > td, .dstable-hover.dstable-success:hover > th {background-color: #b1dfbb }" : "dstable-info" == c ? g += ".dstable-hover.dstable-info:hover > td, .dstable-hover.dstable-info:hover > th {background-color: #abdde5 }" : "dstable-warning" == c ? g += ".dstable-hover.dstable-warning:hover > td, .dstable-hover.dstable-warning:hover > th {background-color: #ffe8a1 }" : "dstable-danger" == c ? g += ".dstable-hover.dstable-danger:hover > td, .dstable-hover.dstable-danger:hover > th {background-color: #f1b0b7 }" : "dstable-dark" == c ? (g += ".dstable-hover.dstable-dark:hover > td, .dstable-hover.dstable-dark:hover > th {background-color: #b9bbbe }", g += ".dstable-dark.dstable-hover tbody tr:hover {background-color: rgba(255, 255, 255, .075) }") : "dstable-active" == c && (g += ".dstable-hover.dstable-active:hover > td, .dstable-hover.dstable-active:hover > th {background-color: rgba(0, 0, 0, .075) }")) : "dsthead-dark" == l && (g += ".dstable .dsthead-dark th {color: #fff;background-color: #212529;border-color: #32383e }"), "dstable-primary" == c ? g += ".dstable-primary, .dstable-primary > td, .dstable-primary > th {background-color: #b8daff }" : "dstable-secondary" == c ? g += ".dstable-secondary, .dstable-secondary > td, .dstable-secondary > th {background-color: #d6d8db }" : "dstable-success" == c ? g += ".dstable-success, .dstable-success > td, .dstable-success > th {background-color: #c3e6cb }" : "dstable-info" == c ? g += ".dstable-info, .dstable-info > td, .dstable-info > th {background-color: #bee5eb }" : "dstable-warning" == c ? g += ".dstable-warning, .dstable-warning > td, .dstable-warning > th {background-color: #ffeeba }" : "dstable-danger" == c ? g += ".dstable-danger, .dstable-danger > td, .dstable-danger > th {background-color: #f5c6cb }" : "dstable-light" == c ? g += ".dstable-light, .dstable-light > td, .dstable-light > th {background-color: #fdfdfe }" : "dstable-dark" == c ? g += ".dstable-dark, .dstable-dark > td, .dstable-dark > th {background-color: #c6c8ca }.dstable-dark {color: #fff;background-color: #212529 }.dstable-dark td, .dstable-dark th, .dstable-dark thead th {border-color: #32383e }.dstable-dark.dstable-bordered {border: 0 }.dstable-dark.dstable-striped tbody tr:nth-of-type(odd) {background-color: rgba(255, 255, 255, .05) }" : "dstable-active" == c && (g += ".dstable-active, .dstable-active > td, .dstable-active > th {background-color: rgba(0, 0, 0, .075) }"), g += "\n</style>\n\n", j = g + i, k = f + g + h, showResult(j, !0), showResult(k, !1, 2)
}

function doHTMLListGenerator() {
    var a = inputStr(),
        b = inputStr(2),
        c = inputStr(3);
    "1" == b ? b = "\n" : "2" == b ? b = "," : "3" == b ? b = ";" : "4" == b && (b = "|"), a = a.trim(), a = a.replace(new RegExp(b, "gi"), "</li>\n<li>"), a = "<li>" + a + "</li>", a = "2" == c ? "<ol>\n" + a + "\n</ol>" : "<ul>\n" + a + "\n</ul>", showResult(a)
}

function doRandomNouns() {
    for (var a, b, c = ["ability", "abroad", "abuse", "access", "accident", "account", "act", "action", "active", "activity", "actor", "addition", "address", "administration", "adult", "advance", "advantage", "advice", "affair", "affect", "afternoon", "age", "agency", "agent", "agreement", "air", "airline", "airport", "alarm", "alcohol", "alternative", "ambition", "amount", "analysis", "analyst", "anger", "angle", "animal", "annual", "answer", "anxiety", "anybody", "anything", "anywhere", "apartment", "appeal", "appearance", "apple", "application", "appointment", "area", "argument", "arm", "army", "arrival", "art", "article", "aside", "aspect", "assignment", "assist", "assistance", "assistant", "associate", "association", "assumption", "atmosphere", "attack", "attempt", "attention", "attitude", "audience", "author", "average", "award", "awareness", "baby", "back", "background", "bag", "bake", "balance", "ball", "band", "bank", "bar", "base", "baseball", "basis", "basket", "bat", "bath", "bathroom", "battle", "beach", "bear", "beat", "beautiful", "bed", "bedroom", "beer", "bell", "belt", "bench", "bend", "benefit", "bet", "beyond", "bicycle", "bid", "big", "bike", "bill", "bird", "birth", "birthday", "bit", "bite", "bitter", "black", "blame", "blank", "blind", "block", "blood", "blow", "blue", "board", "boat", "body", "bone", "bonus", "book", "boot", "border", "boss", "bother", "bottle", "bottom", "bowl", "box", "boy", "boyfriend", "brain", "branch", "brave", "bread", "break", "breakfast", "breast", "breath", "brick", "bridge", "brief", "brilliant", "broad", "brother", "brown", "brush", "buddy", "budget", "bug", "building", "bunch", "burn", "bus", "business", "button", "buy", "buyer", "cabinet", "cable", "cake", "calendar", "call", "calm", "camera", "camp", "campaign", "can", "cancel", "cancer", "candidate", "candle", "candy", "cap", "capital", "car", "card", "care", "career", "carpet", "carry", "case", "cash", "cat", "catch", "category", "cause", "celebration", "cell", "chain", "chair", "challenge", "champion", "championship", "chance", "change", "channel", "chapter", "character", "charge", "charity", "chart", "check", "cheek", "chemical", "chemistry", "chest", "chicken", "child", "childhood", "chip", "chocolate", "choice", "church", "cigarette", "city", "claim", "class", "classic", "classroom", "clerk", "click", "client", "climate", "clock", "closet", "clothes", "cloud", "club", "clue", "coach", "coast", "coat", "code", "coffee", "cold", "collar", "collection", "college", "combination", "combine", "comfort", "comfortable", "command", "comment", "commercial", "commission", "committee", "common", "communication", "community", "company", "comparison", "competition", "complaint", "complex", "computer", "concentrate", "concept", "concern", "concert", "conclusion", "condition", "conference", "confidence", "conflict", "confusion", "connection", "consequence", "consideration", "consist", "constant", "construction", "contact", "contest", "context", "contract", "contribution", "control", "conversation", "convert", "cook", "cookie", "copy", "corner", "cost", "count", "counter", "country", "county", "couple", "courage", "course", "court", "cousin", "cover", "cow", "crack", "craft", "crash", "crazy", "cream", "creative", "credit", "crew", "criticism", "cross", "cry", "culture", "cup", "currency", "current", "curve", "customer", "cut", "cycle", "dad", "damage", "dance", "dare", "dark", "data", "database", "date", "daughter", "day", "dead", "deal", "dealer", "dear", "death", "debate", "debt", "decision", "deep", "definition", "degree", "delay", "delivery", "demand", "department", "departure", "dependent", "deposit", "depression", "depth", "description", "design", "designer", "desire", "desk", "detail", "development", "device", "devil", "diamond", "diet", "difference", "difficulty", "dig", "dimension", "dinner", "direction", "director", "dirt", "disaster", "discipline", "discount", "discussion", "disease", "dish", "disk", "display", "distance", "distribution", "district", "divide", "doctor", "document", "dog", "door", "dot", "double", "doubt", "draft", "drag", "drama", "draw", "drawer", "dream", "dress", "drink", "drive", "driver", "drop", "drunk", "due", "dump", "dust", "duty", "ear", "earth", "ease", "east", "eat", "economics", "economy", "edge", "editor", "education", "effect", "effective", "efficiency", "effort", "egg", "election", "elevator", "emergency", "emotion", "emphasis", "employ", "employee", "employer", "employment", "energy", "engine", "engineer", "entertainment", "enthusiasm", "entrance", "entry", "environment", "equal", "equipment", "equivalent", "error", "escape", "essay", "establishment", "estate", "estimate", "evening", "event", "evidence", "exam", "examination", "example", "exchange", "excitement", "excuse", "exercise", "exit", "experience", "expert", "explanation", "expression", "extension", "extent", "external", "extreme", "eye", "face", "fact", "factor", "fail", "failure", "fall", "familiar", "family", "fan", "farm", "farmer", "fat", "father", "fault", "fear", "feature", "fee", "feed", "feedback", "feel", "female", "few", "field", "fight", "figure", "file", "fill", "film", "final", "finance", "finger", "finish", "fire", "fish", "fix", "flight", "floor", "flow", "flower", "fly", "focus", "fold", "food", "foot", "football", "force", "forever", "formal", "fortune", "foundation", "frame", "freedom", "friend", "friendship", "front", "fruit", "fuel", "fun", "function", "funeral", "funny", "future", "gain", "game", "gap", "garage", "garbage", "garden", "gas", "gate", "gather", "gear", "gene", "general", "gift", "girl", "girlfriend", "give", "glad", "glass", "glove", "go", "goal", "god", "gold", "golf", "good", "government", "grab", "grade", "grand", "grandfather", "grandmother", "grass", "great", "green", "grocery", "ground", "group", "growth", "guarantee", "guard", "guess", "guest", "guidance", "guide", "guitar", "guy", "habit", "hair", "half", "hall", "hand", "handle", "hang", "harm", "hat", "hate", "head", "health", "heart", "heavy", "height", "hell", "hello", "help", "hide", "high", "highlight", "highway", "hire", "historian", "history", "hit", "hold", "hole", "holiday", "home", "homework", "honey", "hook", "hope", "horror", "horse", "hospital", "host", "hotel", "hour", "house", "housing", "human", "hunt", "hurry", "hurt", "husband", "ice", "idea", "ideal", "if", "illegal", "image", "imagination", "impact", "implement", "importance", "impress", "impression", "improvement", "incident", "income", "increase", "independence", "independent", "indication", "individual", "industry", "inevitable", "inflation", "influence", "information", "initial", "initiative", "injury", "insect", "inside", "inspection", "inspector", "instance", "instruction", "insurance", "intention", "interaction", "interest", "internal", "international", "internet", "interview", "introduction", "investment", "invite", "iron", "island", "issue", "it", "item", "jacket", "job", "join", "joint", "joke", "judge", "judgment", "juice", "jump", "junior", "jury", "keep", "key", "kick", "kid", "kill", "kind", "king", "kiss", "kitchen", "knee", "knife", "knowledge", "lab", "lack", "ladder", "lady", "lake", "land", "landscape", "language", "laugh", "law", "lawyer", "lay", "layer", "lead", "leader", "leadership", "league", "leather", "leave", "lecture", "leg", "length", "lesson", "let", "letter", "level", "library", "lie", "life", "lift", "light", "limit", "line", "link", "lip", "list", "listen", "literature", "load", "loan", "local", "location", "lock", "log", "long", "look", "loss", "love", "low", "luck", "lunch", "machine", "magazine", "mail", "main", "maintenance", "major", "make", "male", "mall", "man", "management", "manager", "manner", "manufacturer", "many", "map", "march", "mark", "market", "marriage", "master", "match", "mate", "material", "math", "matter", "maximum", "maybe", "meal", "measurement", "meat", "media", "medicine", "medium", "meet", "meeting", "member", "membership", "memory", "mention", "menu", "mess", "message", "metal", "method", "middle", "midnight", "might", "milk", "mind", "mine", "minimum", "minor", "minute", "mirror", "miss", "mission", "mistake", "mix", "mixture", "mobile", "mode", "model", "mom", "moment", "money", "monitor", "month", "mood", "morning", "mortgage", "most", "mother", "motor", "mountain", "mouse", "mouth", "move", "movie", "mud", "muscle", "music", "nail", "name", "nasty", "nation", "national", "native", "natural", "nature", "neat", "necessary", "neck", "negative", "negotiation", "nerve", "net", "network", "news", "newspaper", "night", "nobody", "noise", "normal", "north", "nose", "note", "nothing", "notice", "novel", "nurse", "object", "objective", "obligation", "occasion", "offer", "office", "officer", "official", "oil", "one", "operation", "opinion", "opportunity", "opposite", "option", "orange", "order", "ordinary", "organization", "original", "other", "outcome", "outside", "oven", "owner", "pace", "pack", "package", "page", "pain", "paint", "pair", "panic", "paper", "parent", "park", "parking", "part", "particular", "partner", "party", "pass", "passage", "passenger", "passion", "past", "path", "patience", "patient", "pattern", "pause", "pay", "payment", "peace", "peak", "pen", "penalty", "pension", "people", "percentage", "perception", "performance", "period", "permission", "permit", "person", "personal", "personality", "perspective", "phase", "philosophy", "phone", "photo", "phrase", "physical", "physics", "piano", "pick", "picture", "pie", "piece", "pin", "pipe", "pitch", "pizza", "plan", "plane", "plant", "plastic", "plate", "platform", "play", "player", "pleasure", "plenty", "poem", "poet", "poetry", "point", "police", "policy", "politics", "pollution", "pool", "pop", "population", "position", "positive", "possession", "possibility", "possible", "post", "pot", "potato", "potential", "pound", "power", "practice", "preference", "preparation", "presence", "present", "presentation", "president", "press", "pressure", "price", "pride", "priest", "primary", "principle", "print", "prior", "priority", "private", "prize", "problem", "procedure", "produce", "product", "profession", "professional", "professor", "profile", "profit", "program", "progress", "project", "promise", "promotion", "prompt", "proof", "property", "proposal", "protection", "psychology", "public", "pull", "punch", "purchase", "purple", "purpose", "push", "put", "quality", "quantity", "quarter", "queen", "question", "quiet", "quit", "quote", "race", "radio", "rain", "raise", "range", "rate", "ratio", "raw", "reach", "reaction", "read", "reality", "reason", "reception", "recipe", "recognition", "recommendation", "record", "recover", "red", "reference", "reflection", "refrigerator", "refuse", "region", "register", "regret", "regular", "relation", "relationship", "relative", "release", "relief", "remote", "remove", "rent", "repair", "repeat", "replacement", "reply", "report", "representative", "republic", "reputation", "request", "requirement", "research", "reserve", "resident", "resist", "resolution", "resolve", "resort", "resource", "respect", "respond", "response", "responsibility", "rest", "restaurant", "result", "return", "reveal", "revenue", "review", "revolution", "reward", "rice", "rich", "ride", "ring", "rip", "rise", "risk", "river", "road", "rock", "role", "roll", "roof", "room", "rope", "rough", "round", "routine", "row", "royal", "rub", "ruin", "rule", "run", "rush", "sad", "safe", "safety", "sail", "salad", "salary", "sale", "salt", "sample", "sand", "sandwich", "satisfaction", "save", "savings", "scale", "scene", "schedule", "scheme", "school", "science", "score", "scratch", "screen", "screw", "script", "sea", "search", "season", "seat", "secret", "secretary", "section", "sector", "security", "selection", "self", "sell", "senior", "sense", "sensitive", "sentence", "series", "serve", "service", "session", "set", "sex", "shake", "shame", "shape", "share", "she", "shelter", "shift", "shine", "ship", "shirt", "shock", "shoe", "shoot", "shop", "shot", "shoulder", "show", "shower", "sick", "side", "sign", "signal", "signature", "significance", "silly", "silver", "simple", "singer", "single", "sink", "sir", "sister", "site", "situation", "size", "skill", "skin", "skirt", "sky", "sleep", "slice", "slide", "slip", "smell", "smile", "smoke", "snow", "society", "sock", "soft", "software", "soil", "solid", "solution", "somewhere", "son", "song", "sort", "sound", "soup", "source", "south", "space", "spare", "speaker", "special", "specialist", "specific", "speech", "speed", "spell", "spend", "spirit", "spiritual", "spite", "split", "sport", "spot", "spray", "spread", "spring", "square", "stable", "staff", "stage", "stand", "standard", "star", "start", "state", "statement", "station", "status", "stay", "steak", "steal", "step", "stick", "still", "stock", "stomach", "stop", "storage", "store", "storm", "story", "strain", "stranger", "strategy", "street", "strength", "stress", "stretch", "strike", "string", "strip", "stroke", "structure", "struggle", "student", "studio", "stuff", "stupid", "style", "subject", "substance", "success", "suck", "sugar", "suggestion", "suit", "summer", "sun", "supermarket", "support", "surgery", "surprise", "surround", "survey", "suspect", "sweet", "swim", "switch", "sympathy", "system", "table", "tackle", "tale", "talk", "tank", "tap", "target", "task", "taste", "tax", "tea", "teach", "teacher", "team", "tear", "technology", "telephone", "television", "tell", "temperature", "temporary", "tennis", "tension", "term", "test", "text", "thanks", "theme", "theory", "thing", "thought", "throat", "ticket", "tie", "till", "tip", "title", "today", "toe", "tomorrow", "tone", "tongue", "tonight", "tool", "tooth", "top", "topic", "total", "touch", "tough", "tour", "tourist", "towel", "tower", "town", "track", "trade", "tradition", "traffic", "train", "trainer", "transition", "transportation", "trash", "travel", "treat", "tree", "trick", "trip", "trouble", "truck", "trust", "truth", "try", "tune", "turn", "twist", "two", "type", "uncle", "union", "unique", "unit", "university", "upper", "upstairs", "use", "user", "usual", "vacation", "valuable", "value", "variation", "variety", "vast", "vegetable", "vehicle", "version", "video", "view", "village", "virus", "visit", "visual", "voice", "volume", "wait", "wake", "walk", "wall", "war", "wash", "watch", "water", "wave", "way", "weakness", "wealth", "wear", "weather", "web", "wedding", "week", "weekend", "weight", "weird", "welcome", "west", "western", "wheel", "whereas", "white", "whole", "wife", "will", "win", "wind", "window", "wine", "wing", "winner", "winter", "wish", "witness", "woman", "wonder", "wood", "word", "worker", "world", "worry", "worth", "wrap", "writer", "yard", "year", "yellow", "yesterday", "you", "young", "youth", "zone"], d = "", e = inputStr(2), f = c.length; f; a = parseInt(Math.random() * f), b = c[--f], c[f] = c[a], c[a] = b);
    for (var g = 0; e > g;) d = d + " <span>" + c[g] + "</span>", g++;
    showResult(d, !0)
}

function doRandomVerbs() {
    for (var a, b, c = ["accept", "add", "admire", "admit", "advise", "afford", "agree", "alert", "allow", "amuse", "analyze", "announce", "annoy", "answer", "apologise", "appear", "applaud", "appreciate", "approve", "argue", "arrange", "arrest", "arrive", "ask", "attach", "attack", "attempt", "attend", "attract", "avoid", "back", "bake", "balance", "ban", "bang", "bare", "bat", "bathe", "battle", "beam", "beg", "behave", "belong", "bleach", "bless", "blind", "blink", "blot", "blush", "boast", "boil", "bolt", "bomb", "book", "bore", "borrow", "bounce", "bow", "box", "brake", "branch", "breathe", "bruise", "brush", "bubble", "bump", "burn", "bury", "buzz", "calculate", "call", "camp", "care", "carry", "carve", "cause", "challenge", "change", "charge", "chase", "cheat", "check", "cheer", "chew", "choke", "chop", "claim", "clap", "clean", "clear", "clip", "close", "coach", "coil", "collect", "colour", "comb", "command", "communicate", "compare", "compete", "complain", "complete", "concentrate", "concern", "confess", "confuse", "connect", "consider", "consist", "contain", "continue", "copy", "correct", "cough", "count", "cover", "crack", "crash", "crawl", "cross", "crush", "cry", "cure", "curl", "curve", "cycle", "dam", "damage", "dance", "dare", "decay", "deceive", "decide", "decorate", "delay", "delight", "deliver", "depend", "describe", "desert", "deserve", "destroy", "detect", "develop", "disagree", "disappear", "disapprove", "disarm", "discover", "dislike", "divide", "double", "doubt", "drag", "drain", "dream", "dress", "drip", "drop", "drown", "drum", "dry", "dust", "earn", "educate", "embarrass", "employ", "empty", "encourage", "end", "enjoy", "enter", "entertain", "escape", "examine", "excite", "excuse", "exercise", "exist", "expand", "expect", "explain", "explode", "extend", "face", "fade", "fail", "fancy", "fasten", "fax", "fear", "fence", "fetch", "file", "fill", "film", "fire", "fit", "fix", "flap", "flash", "float", "flood", "flow", "flower", "fold", "follow", "fool", "force", "form", "found", "frame", "frighten", "fry", "gather", "gaze", "glow", "glue", "grab", "grate", "grease", "greet", "grin", "grip", "groan", "guarantee", "guard", "guess", "guide", "hammer", "hand", "handle", "hang", "happen", "harass", "harm", "hate", "haunt", "head", "heal", "heap", "heat", "help", "hook", "hop", "hope", "hover", "hug", "hum", "hunt", "hurry", "identify", "ignore", "imagine", "impress", "improve", "include", "increase", "influence", "inform", "inject", "injure", "instruct", "intend", "interest", "interfere", "interrupt", "introduce", "invent", "invite", "irritate", "itch", "jail", "jam", "jog", "join", "joke", "judge", "juggle", "jump", "kick", "kill", "kiss", "kneel", "knit", "knock", "knot", "label", "land", "last", "laugh", "launch", "learn", "level", "license", "lick", "lie", "lighten", "like", "list", "listen", "live", "load", "lock", "long", "look", "love", "man", "manage", "march", "mark", "marry", "match", "mate", "matter", "measure", "meddle", "melt", "memorise", "mend", "mess", "up", "milk", "mine", "miss", "mix", "moan", "moor", "mourn", "move", "muddle", "mug", "multiply", "murder", "nail", "name", "need", "nod", "note", "notice", "number", "obey", "object", "observe", "obtain", "occur", "offend", "offer", "open", "order", "overflow", "owe", "own", "pack", "paddle", "paint", "park", "part", "pass", "paste", "pat", "pause", "peck", "pedal", "peel", "peep", "perform", "permit", "phone", "pick", "pinch", "pine", "place", "plan", "plant", "play", "please", "plug", "point", "poke", "polish", "pop", "possess", "post", "pour", "practice", "pray", "preach", "precede", "prefer", "prepare", "present", "preserve", "press", "pretend", "prevent", "prick", "print", "produce", "program", "promise", "protect", "provide", "pull", "pump", "punch", "puncture", "punish", "push", "question", "queue", "race", "radiate", "rain", "raise", "reach", "realise", "receive", "recognise", "record", "reduce", "reflect", "refuse", "regret", "reign", "reject", "rejoice", "relax", "release", "rely", "remain", "remember", "remind", "remove", "repair", "repeat", "replace", "reply", "report", "reproduce", "request", "rescue", "retire", "return", "rhyme", "rinse", "risk", "rob", "rock", "roll", "rot", "rub", "ruin", "rule", "rush", "sack", "sail", "satisfy", "save", "saw", "scare", "scatter", "scold", "scorch", "scrape", "scratch", "scream", "screw", "scribble", "scrub", "seal", "search", "separate", "serve", "settle", "shade", "share", "shave", "shelter", "shiver", "shock", "shop", "shrug", "sigh", "sign", "signal", "sin", "sip", "ski", "skip", "slap", "slip", "slow", "smash", "smell", "smile", "smoke", "snatch", "sneeze", "sniff", "snore", "snow", "soak", "soothe", "sound", "spare", "spark", "sparkle", "spell", "spill", "spoil", "spot", "spray", "sprout", "squash", "squeak", "squeal", "squeeze", "stain", "stamp", "stare", "start", "stay", "steer", "step", "stir", "stitch", "stop", "store", "strap", "strengthen", "stretch", "strip", "stroke", "stuff", "subtract", "succeed", "suck", "suffer", "suggest", "suit", "supply", "support", "suppose", "surprise", "surround", "suspect", "suspend", "switch", "talk", "tame", "tap", "taste", "tease", "telephone", "tempt", "terrify", "test", "thank", "thaw", "tick", "tickle", "tie", "time", "tip", "tire", "touch", "tour", "tow", "trace", "trade", "train", "transport", "trap", "travel", "treat", "tremble", "trick", "trip", "trot", "trouble", "trust", "try", "tug", "tumble", "turn", "twist", "type", "undress", "unfasten", "unite", "unlock", "unpack", "untidy", "use", "vanish", "visit", "wail", "wait", "walk", "wander", "want", "warm", "warn", "wash", "waste", "watch", "water", "wave", "weigh", "welcome", "whine", "whip", "whirl", "whisper", "whistle", "wink", "wipe", "wish", "wobble", "wonder", "work", "worry", "wrap", "wreck", "wrestle", "wriggle", "x-ray", "yawn", "yell", "zoom"], d = "", e = inputStr(2), f = c.length; f; a = parseInt(Math.random() * f), b = c[--f], c[f] = c[a], c[a] = b);
    for (var g = 0; e > g;) d = d + " <span>" + c[g] + "</span>", g++;
    showResult(d, !0)
}

function doRandomAdjective() {
    for (var a, b, c = ["aback", "abaft", "abandoned", "abashed", "aberrant", "abhorrent", "abiding", "abject", "ablaze", "able", "abnormal", "aboard", "aboriginal", "abortive", "abounding", "abrasive", "abrupt", "absent", "absolute", "absorbed", "absorbing", "abstracted", "absurd", "abundant", "abusive", "academic", "acceptable", "accessible", "accidental", "acclaimed", "accomplished", "accurate", "aching", "acid", "acidic", "acoustic", "acrid", "acrobatic", "active", "actual", "actually", "ad hoc", "adamant", "adaptable", "addicted", "additional", "adept", "adhesive", "adjoining", "administrative", "admirable", "admired", "adolescent", "adorable", "adored", "advanced", "adventurous", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agonizing", "agreeable", "ahead", "ajar", "alarmed", "alarming", "alcoholic", "alert", "alienated", "alike", "alive", "all", "alleged", "alluring", "aloof", "altruistic", "amazing", "ambiguous", "ambitious", "amiable", "ample", "amuck", "amused", "amusing", "anchored", "ancient", "angelic", "angry", "anguished", "animated", "annoyed", "annoying", "annual", "another", "antique", "antsy", "anxious", "any", "apathetic", "appetizing", "apprehensive", "appropriate", "apt", "aquatic", "arctic", "arid", "aromatic", "arrogant", "artistic", "ashamed", "asleep", "aspiring", "assorted", "assured", "astonishing", "athletic", "attached", "attentive", "attractive", "auspicious", "austere", "authentic", "authorized", "automatic", "available", "avaricious", "average", "awake", "aware", "awesome", "awful", "awkward", "axiomatic", "babyish", "back", "bad", "baggy", "barbarous", "bare", "barren", "bashful", "basic", "batty", "bawdy", "beautiful", "beefy", "befitting", "belated", "belligerent", "beloved", "beneficial", "bent", "berserk", "best", "better", "bewildered", "bewitched", "big", "big-hearted", "billowy", "biodegradable", "bite-sized", "biting", "bitter", "bizarre", "black", "black-and-white", "bland", "blank", "blaring", "bleak", "blind", "blissful", "blond", "bloody", "blue", "blue-eyed", "blushing", "bogus", "boiling", "bold", "bony", "boorish", "bored", "boring", "bossy", "both", "bouncy", "boundless", "bountiful", "bowed", "brainy", "brash", "brave", "brawny", "breakable", "breezy", "brief", "bright", "brilliant", "brisk", "broad", "broken", "bronze", "brown", "bruised", "bubbly", "bulky", "bumpy", "buoyant", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "cagey", "calculating", "callous", "calm", "candid", "canine", "capable", "capital", "capricious", "carefree", "careful", "careless", "caring", "cautious", "cavernous", "ceaseless", "celebrated", "certain", "changeable", "charming", "cheap", "cheeky", "cheerful", "cheery", "chemical", "chief", "childlike", "chilly", "chivalrous", "chubby", "chunky", "circular", "civil", "clammy", "classic", "classy", "clean", "clear", "clear-cut", "clever", "cloistered", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "coherent", "cold", "colorful", "colorless", "colossal", "combative", "comfortable", "common", "compassionate", "competent", "competitive", "complete", "complex", "complicated", "composed", "comprehensive", "concerned", "concrete", "condemned", "condescending", "confident", "confused", "conscious", "considerate", "consistent", "constant", "contemplative", "content", "conventional", "convincing", "convoluted", "cooing", "cooked", "cool", "cooperative", "coordinated", "corny", "corrupt", "costly", "courageous", "courteous", "cowardly", "crabby", "crafty", "craven", "crazy", "creamy", "creative", "creepy", "criminal", "crisp", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cultural", "cultured", "cumbersome", "curious", "curly", "curved", "curvy", "cut", "cute", "cylindrical", "cynical", "daffy", "daily", "damaged", "damaging", "damp", "dangerous", "dapper", "daring", "dark", "darling", "dashing", "dazzling", "dead", "deadly", "deadpan", "deafening", "dear", "dearest", "debonair", "decayed", "deceitful", "decent", "decimal", "decisive", "decorous", "deep", "deeply", "defeated", "defective", "defenseless", "defensive", "defiant", "deficient", "definite", "definitive", "delayed", "delectable", "delicate", "delicious", "delightful", "delirious", "demanding", "demonic", "dense", "dental", "dependable", "dependent", "depraved", "depressed", "deranged", "descriptive", "deserted", "desperate", "despicable", "detailed", "determined", "devilish", "devoted", "didactic", "different", "difficult", "digital", "dilapidated", "diligent", "dim", "diminutive", "dimpled", "dimwitted", "direct", "direful", "dirty", "disagreeable", "disastrous", "discreet", "discrete", "disfigured", "disguised", "disgusted", "disgusting", "dishonest", "disillusioned", "disloyal", "dismal", "dispensable", "distant", "distinct", "distorted", "distraught", "distressed", "disturbed", "divergent", "dizzy", "domineering", "dopey", "doting", "double", "doubtful", "downright", "drab", "draconian", "drafty", "drained", "dramatic", "dreary", "droopy", "drunk", "dry", "dual", "dull", "dusty", "dutiful", "dynamic", "dysfunctional", "each", "eager", "early", "earnest", "earsplitting", "earthy", "eastern", "easy", "easy-going", "eatable", "economic", "ecstatic", "edible", "educated", "educational", "efficacious", "efficient", "eight", "elaborate", "elastic", "elated", "elderly", "electric", "electrical", "electronic", "elegant", "elementary", "elfin", "elite", "elliptical", "emaciated", "embarrassed", "embellished", "eminent", "emotional", "empty", "enchanted", "enchanting", "encouraging", "endurable", "energetic", "enlightened", "enormous", "enraged", "entertaining", "enthusiastic", "entire", "envious", "environmental", "equable", "equal", "equatorial", "erect", "erratic", "essential", "esteemed", "ethereal", "ethical", "euphoric", "evanescent", "evasive", "even", "evergreen", "everlasting", "every", "evil", "exalted", "exasperated", "excellent", "excitable", "excited", "exciting", "exclusive", "exemplary", "exhausted", "exhilarated", "existing", "exotic", "expensive", "experienced", "expert", "extensive", "extra-large", "extra-small", "extraneous", "extroverted", "exuberant", "exultant", "fabulous", "faded", "failing", "faint", "fair", "faithful", "fake", "fallacious", "false", "familiar", "famous", "fanatical", "fancy", "fantastic", "far", "far-flung", "far-off", "faraway", "fascinated", "fast", "fat", "fatal", "fatherly", "faulty", "favorable", "favorite", "fearful", "fearless", "federal", "feeble", "feigned", "feisty", "feline", "female", "feminine", "fertile", "festive", "few", "fickle", "fierce", "filthy", "financial", "fine", "finicky", "finished", "firm", "first", "firsthand", "fitting", "five", "fixed", "flagrant", "flaky", "flamboyant", "flashy", "flat", "flawed", "flawless", "flickering", "flimsy", "flippant", "floppy", "flowery", "fluffy", "flufy", "fluid", "flustered", "fluttering", "foamy", "focused", "fond", "foolhardy", "foolish", "forceful", "foregoing", "foreign", "forgetful", "forked", "formal", "former", "forsaken", "forthright", "fortunate", "four", "fragile", "fragrant", "frail", "frank", "frantic", "frayed", "free", "freezing", "French", "frequent", "fresh", "fretful", "friendly", "frightened", "frightening", "frigid", "frilly", "frivolous", "frizzy", "front", "frosty", "frothy", "frozen", "frugal", "fruitful", "frustrating", "full", "fumbling", "functional", "funny", "furry", "furtive", "fussy", "future", "futuristic", "fuzzy", "gabby", "gainful", "gamy", "gaping", "gargantuan", "garrulous", "gaseous", "gaudy", "general", "generous", "gentle", "genuine", "ghastly", "giant", "giddy", "gifted", "gigantic", "giving", "glamorous", "glaring", "glass", "gleaming", "gleeful", "glib", "glistening", "glittering", "global", "gloomy", "glorious", "glossy", "glum", "godly", "golden", "good", "good-natured", "goofy", "gorgeous", "graceful", "gracious", "grand", "grandiose", "granular", "grateful", "gratis", "grave", "gray", "greasy", "great", "greedy", "green", "gregarious", "grey", "grieving", "grim", "grimy", "gripping", "grizzled", "groovy", "gross", "grotesque", "grouchy", "grounded", "growing", "growling", "grown", "grubby", "gruesome", "grumpy", "guarded", "guiltless", "guilty", "gullible", "gummy", "gusty", "guttural", "habitual", "hairy", "half", "hallowed", "halting", "handmade", "handsome", "handy", "hanging", "hapless", "happy", "happy-go-lucky", "hard", "hard-to-find", "harebrained", "harmful", "harmless", "harmonious", "harsh", "hasty", "hateful", "haunting", "heady", "healthy", "heartbreaking", "heartfelt", "hearty", "heavenly", "heavy", "hefty", "hellish", "helpful", "helpless", "hesitant", "hidden", "hideous", "high", "high-level", "high-pitched", "highfalutin", "hilarious", "hissing", "historical", "hoarse", "holistic", "hollow", "homeless", "homely", "honest", "honorable", "honored", "hopeful", "horrible", "horrific", "hospitable", "hot", "huge", "hulking", "humble", "humdrum", "humiliating", "humming", "humongous", "humorous", "hungry", "hurried", "hurt", "hurtful", "hushed", "husky", "hypnotic", "hysterical", "icky", "icy", "ideal", "idealistic", "identical", "idiotic", "idle", "idolized", "ignorant", "ill", "ill-fated", "ill-informed", "illegal", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immaterial", "immediate", "immense", "imminent", "impartial", "impassioned", "impeccable", "imperfect", "imperturbable", "impish", "impolite", "important", "imported", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incandescent", "incomparable", "incompatible", "incompetent", "incomplete", "inconclusive", "inconsequential", "incredible", "indelible", "indolent", "industrious", "inexpensive", "inexperienced", "infamous", "infantile", "infatuated", "inferior", "infinite", "informal", "innate", "inner", "innocent", "inquisitive", "insecure", "insidious", "insignificant", "insistent", "instinctive", "instructive", "insubstantial", "intelligent", "intent", "intentional", "interesting", "internal", "international", "intrepid", "intrigued", "invincible", "irate", "ironclad", "irresponsible", "irritable", "irritating", "itchy", "jaded", "jagged", "jam-packed", "jaunty", "jazzy", "jealous", "jittery", "jobless", "joint", "jolly", "jovial", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbled", "jumbo", "jumpy", "junior", "juvenile", "kaleidoscopic", "kaput", "keen", "key", "kind", "kindhearted", "kindly", "klutzy", "knobby", "knotty", "knowing", "knowledgeable", "known", "kooky", "kosher", "labored", "lackadaisical", "lacking", "lame", "lamentable", "languid", "lanky", "large", "last", "lasting", "late", "latter", "laughable", "lavish", "lawful", "lazy", "leading", "leafy", "lean", "learned", "left", "legal", "legitimate", "lethal", "level", "lewd", "light", "lighthearted", "likable", "like", "likeable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "literate", "little", "live", "lively", "livid", "living", "loathsome", "logical", "lone", "lonely", "long", "long-term", "longing", "loose", "lopsided", "lost", "loud", "loutish", "lovable", "lovely", "loving", "low", "lowly", "loyal", "lucky", "ludicrous", "lumbering", "luminous", "lumpy", "lush", "lustrous", "luxuriant", "luxurious", "lying", "lyrical", "macabre", "macho", "mad", "maddening", "made-up", "madly", "magenta", "magical", "magnificent", "majestic", "major", "makeshift", "male", "malicious", "mammoth", "maniacal", "many", "marked", "married", "marvelous", "masculine", "massive", "material", "materialistic", "mature", "meager", "mealy", "mean", "measly", "meaty", "medical", "mediocre", "medium", "meek", "melancholy", "mellow", "melodic", "melted", "memorable", "menacing", "mental", "merciful", "mere", "merry", "messy", "metallic", "mighty", "mild", "military", "milky", "mindless", "miniature", "minor", "minty", "minute", "miscreant", "miserable", "miserly", "misguided", "mistaken", "misty", "mixed", "moaning", "modern", "modest", "moist", "moldy", "momentous", "monstrous", "monthly", "monumental", "moody", "moral", "mortified", "motherly", "motionless", "mountainous", "muddled", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "mute", "muted", "mysterious", "naive", "nappy", "narrow", "nasty", "natural", "naughty", "nauseating", "nautical", "near", "neat", "nebulous", "necessary", "needless", "needy", "negative", "neglected", "negligible", "neighboring", "neighborly", "nervous", "new", "next", "nice", "nifty", "nimble", "nine", "nippy", "nocturnal", "noiseless", "noisy", "nonchalant", "nondescript", "nonsensical", "nonstop", "normal", "nostalgic", "nosy", "notable", "noted", "noteworthy", "novel", "noxious", "null", "numb", "numberless", "numerous", "nutritious", "nutty", "oafish", "obedient", "obeisant", "obese", "oblivious", "oblong", "obnoxious", "obscene", "obsequious", "observant", "obsolete", "obtainable", "obvious", "occasional", "oceanic", "odd", "oddball", "offbeat", "offensive", "official", "oily", "old", "old-fashioned", "omniscient", "one", "onerous", "only", "open", "opposite", "optimal", "optimistic", "opulent", "orange", "orderly", "ordinary", "organic", "original", "ornate", "ornery", "ossified", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overconfident", "overcooked", "overdue", "overjoyed", "overlooked", "overrated", "overt", "overwrought", "painful", "painstaking", "palatable", "pale", "paltry", "panicky", "panoramic", "parallel", "parched", "parsimonious", "partial", "passionate", "past", "pastel", "pastoral", "pathetic", "peaceful", "penitent", "peppery", "perfect", "perfumed", "periodic", "perky", "permissible", "perpetual", "perplexed", "personal", "pertinent", "pesky", "pessimistic", "petite", "petty", "phobic", "phony", "physical", "picayune", "piercing", "pink", "piquant", "pitiful", "placid", "plain", "plaintive", "plastic", "plausible", "playful", "pleasant", "pleased", "pleasing", "plucky", "plump", "plush", "pointed", "pointless", "poised", "polished", "polite", "political", "pompous", "poor", "popular", "portly", "posh", "positive", "possessive", "possible", "potable", "powerful", "powerless", "practical", "precious", "pregnant", "premium", "present", "prestigious", "pretty", "previous", "pricey", "prickly", "primary", "prime", "pristine", "private", "prize", "probable", "productive", "profitable", "profuse", "proper", "protective", "proud", "prudent", "psychedelic", "psychological", "psychotic", "public", "puffy", "pumped", "punctual", "pungent", "puny", "pure", "purple", "purring", "pushy", "putrid", "puzzled", "puzzling", "quaint", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quickest", "quiet", "quintessential", "quirky", "quixotic", "quizzical", "rabid", "racial", "radiant", "ragged", "rainy", "rambunctious", "rampant", "rapid", "rare", "rash", "raspy", "ratty", "raw", "ready", "real", "realistic", "reasonable", "rebel", "recent", "receptive", "reckless", "recondite", "rectangular", "red", "redundant", "reflecting", "reflective", "regal", "regular", "relevant", "reliable", "relieved", "remarkable", "reminiscent", "remorseful", "remote", "repentant", "repulsive", "required", "resolute", "resonant", "respectful", "responsible", "responsive", "revolving", "rewarding", "rhetorical", "rich", "right", "righteous", "rightful", "rigid", "ringed", "ripe", "ritzy", "roasted", "robust", "romantic", "roomy", "rosy", "rotating", "rotten", "rotund", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rude", "rundown", "runny", "rural", "rustic", "rusty", "ruthless", "sad", "safe", "salty", "same", "sandy", "sane", "sarcastic", "sardonic", "sassy", "satisfied", "satisfying", "savory", "scaly", "scandalous", "scant", "scarce", "scared", "scary", "scattered", "scented", "scholarly", "scientific", "scintillating", "scornful", "scratchy", "scrawny", "screeching", "second", "second-hand", "secondary", "secret", "secretive", "sedate", "seemly", "selective", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serious", "serpentine", "several", "severe", "sexual", "shabby", "shadowy", "shady", "shaggy", "shaky", "shallow", "shameful", "shameless", "sharp", "shimmering", "shiny", "shivering", "shocked", "shocking", "shoddy", "short", "short-term", "showy", "shrill", "shut", "shy", "sick", "significant", "silent", "silky", "silly", "silver", "similar", "simple", "simplistic", "sincere", "sinful", "single", "six", "sizzling", "skeletal", "skillful", "skinny", "sleepy", "slight", "slim", "slimy", "slippery", "sloppy", "slow", "slushy", "small", "smarmy", "smart", "smelly", "smiling", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snobbish", "snoopy", "snotty", "sociable", "soft", "soggy", "solid", "somber", "some", "sophisticated", "sordid", "sore", "sorrowful", "sorry", "soulful", "soupy", "sour", "southern", "Spanish", "sparkling", "sparse", "special", "specific", "spectacular", "speedy", "spherical", "spicy", "spiffy", "spiky", "spirited", "spiritual", "spiteful", "splendid", "spooky", "spotless", "spotted", "spotty", "spry", "spurious", "squalid", "square", "squeaky", "squealing", "squeamish", "squiggly", "stable", "staid", "stained", "staking", "stale", "standard", "standing", "starchy", "stark", "starry", "statuesque", "steadfast", "steady", "steel", "steep", "stereotyped", "sticky", "stiff", "stimulating", "stingy", "stormy", "stout", "straight", "strange", "strict", "strident", "striking", "striped", "strong", "studious", "stunning", "stupendous", "stupid", "sturdy", "stylish", "subdued", "submissive", "subsequent", "substantial", "subtle", "suburban", "successful", "succinct", "succulent", "sudden", "sufficient", "sugary", "suitable", "sulky", "sunny", "super", "superb", "superficial", "superior", "supportive", "supreme", "sure-footed", "surprised", "suspicious", "svelte", "swanky", "sweaty", "sweet", "sweltering", "swift", "sympathetic", "symptomatic", "synonymous", "taboo", "tacit", "tacky", "talented", "talkative", "tall", "tame", "tan", "tangible", "tangy", "tart", "tasteful", "tasteless", "tasty", "tattered", "taut", "tawdry", "tearful", "technical", "tedious", "teeming", "teeny", "teeny-tiny", "telling", "temporary", "tempting", "ten", "tender", "tense", "tenuous", "tepid", "terrible", "terrific", "tested", "testy", "thankful", "therapeutic", "thick", "thin", "thinkable", "third", "thirsty", "thorny", "thorough", "thoughtful", "thoughtless", "threadbare", "threatening", "three", "thrifty", "thundering", "thunderous", "tidy", "tight", "tightfisted", "timely", "tinted", "tiny", "tired", "tiresome", "toothsome", "torn", "torpid", "total", "tough", "towering", "traditional", "tragic", "trained", "tranquil", "trashy", "traumatic", "treasured", "tremendous", "triangular", "tricky", "trifling", "trim", "trite", "trivial", "troubled", "truculent", "true", "trusting", "trustworthy", "trusty", "truthful", "tubby", "turbulent", "twin", "two", "typical", "ubiquitous", "ugliest", "ugly", "ultimate", "ultra", "unable", "unacceptable", "unaccountable", "unarmed", "unaware", "unbecoming", "unbiased", "uncomfortable", "uncommon", "unconscious", "uncovered", "understated", "understood", "undesirable", "unequal", "unequaled", "uneven", "unfair", "unfinished", "unfit", "unfolded", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "uninterested", "unique", "united", "unkempt", "unknown", "unlawful", "unlikely", "unlined", "unlucky", "unnatural", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsuitable", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwitting", "unwritten", "upbeat", "uppity", "upright", "upset", "uptight", "urban", "usable", "used", "useful", "useless", "utilized", "utopian", "utter", "uttermost", "vacant", "vacuous", "vague", "vain", "valid", "valuable", "vapid", "variable", "various", "vast", "velvety", "venerated", "vengeful", "venomous", "verdant", "verifiable", "versed", "vexed", "vibrant", "vicious", "victorious", "vigilant", "vigorous", "villainous", "violent", "violet", "virtual", "virtuous", "visible", "vital", "vivacious", "vivid", "voiceless", "volatile", "voluminous", "voracious", "vulgar", "wacky", "waggish", "waiting", "wakeful", "wan", "wandering", "wanting", "warlike", "warm", "warmhearted", "warped", "wary", "wasteful", "watchful", "waterlogged", "watery", "wavy", "weak", "wealthy", "weary", "webbed", "wee", "weekly", "weepy", "weighty", "weird", "well-documented", "well-groomed", "well-informed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "wet", "which", "whimsical", "whirlwind", "whispered", "whispering", "white", "whole", "wholesale", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "wild", "willing", "wilted", "winding", "windy", "winged", "wiry", "wise", "wistful", "witty", "wobbly", "woebegone", "woeful", "womanly", "wonderful", "wooden", "woozy", "wordy", "workable", "worldly", "worn", "worried", "worrisome", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "xenophobic", "yawning", "yearly", "yellow", "yellowish", "yielding", "young", "youthful", "yummy", "zany", "zealous", "zesty", "zippy"], d = "", e = inputStr(2), f = c.length; f; a = parseInt(Math.random() * f),
        b = c[--f], c[f] = c[a], c[a] = b);
    for (var g = 0; e > g;) d = d + " <span>" + c[g] + "</span>", g++;
    showResult(d, !0)
}

function DoCountryDropdown() {
    var a = "AF:Afghanistan||AX:Åland Islands||AL:Albania||DZ:Algeria||AS:American Samoa||AD:Andorra||AO:Angola||AI:Anguilla||AQ:Antarctica||AG:Antigua and Barbuda||AR:Argentina||AM:Armenia||AW:Aruba||AU:Australia||AT:Austria||AZ:Azerbaijan||BS:Bahamas||BH:Bahrain||BD:Bangladesh||BB:Barbados||BY:Belarus||BE:Belgium||BZ:Belize||BJ:Benin||BM:Bermuda||BT:Bhutan||BO:Bolivia||BA:Bosnia and Herzegovina||BW:Botswana||BV:Bouvet Island||BR:Brazil||IO:British Indian Ocean Territory||BN:Brunei Darussalam||BG:Bulgaria||BF:Burkina Faso||BI:Burundi||KH:Cambodia||CM:Cameroon||CA:Canada||CV:Cape Verde||KY:Cayman Islands||CF:Central African Republic||TD:Chad||CL:Chile||CN:China||CX:Christmas Island||CC:Cocos (Keeling) Islands||CO:Colombia||KM:Comoros||CG:Congo||CD:Congo, The Democratic Republic of The||CK:Cook Islands||CR:Costa Rica||CI:Cote D'ivoire||HR:Croatia||CU:Cuba||CY:Cyprus||CZ:Czechia||DK:Denmark||DJ:Djibouti||DM:Dominica||DO:Dominican Republic||EC:Ecuador||EG:Egypt||SV:El Salvador||GQ:Equatorial Guinea||ER:Eritrea||EE:Estonia||ET:Ethiopia||FK:Falkland Islands (Malvinas)||FO:Faroe Islands||FJ:Fiji||FI:Finland||FR:France||GF:French Guiana||PF:French Polynesia||TF:French Southern Territories||GA:Gabon||GM:Gambia||GE:Georgia||DE:Germany||GH:Ghana||GI:Gibraltar||GR:Greece||GL:Greenland||GD:Grenada||GP:Guadeloupe||GU:Guam||GT:Guatemala||GG:Guernsey||GN:Guinea||GW:Guinea-bissau||GY:Guyana||HT:Haiti||HM:Heard Island and Mcdonald Islands||VA:Holy See (Vatican City State)||HN:Honduras||HK:Hong Kong||HU:Hungary||IS:Iceland||IN:India||ID:Indonesia||IR:Iran, Islamic Republic of||IQ:Iraq||IE:Ireland||IM:Isle of Man||IL:Israel||IT:Italy||JM:Jamaica||JP:Japan||JE:Jersey||JO:Jordan||KZ:Kazakhstan||KE:Kenya||KI:Kiribati||KP:Korea, Democratic People's Republic of||KR:Korea, Republic of||KW:Kuwait||KG:Kyrgyzstan||LA:Lao People's Democratic Republic||LV:Latvia||LB:Lebanon||LS:Lesotho||LR:Liberia||LY:Libyan Arab Jamahiriya||LI:Liechtenstein||LT:Lithuania||LU:Luxembourg||MO:Macao||MK:Macedonia, The Former Yugoslav Republic of||MG:Madagascar||MW:Malawi||MY:Malaysia||MV:Maldives||ML:Mali||MT:Malta||MH:Marshall Islands||MQ:Martinique||MR:Mauritania||MU:Mauritius||YT:Mayotte||MX:Mexico||FM:Micronesia, Federated States of||MD:Moldova, Republic of||MC:Monaco||MN:Mongolia||ME:Montenegro||MS:Montserrat||MA:Morocco||MZ:Mozambique||MM:Myanmar||NA:Namibia||NR:Nauru||NP:Nepal||NL:Netherlands||AN:Netherlands Antilles||NC:New Caledonia||NZ:New Zealand||NI:Nicaragua||NE:Niger||NG:Nigeria||NU:Niue||NF:Norfolk Island||MP:Northern Mariana Islands||NO:Norway||OM:Oman||PK:Pakistan||PW:Palau||PS:Palestinian Territory, Occupied||PA:Panama||PG:Papua New Guinea||PY:Paraguay||PE:Peru||PH:Philippines||PN:Pitcairn||PL:Poland||PT:Portugal||PR:Puerto Rico||QA:Qatar||RE:Reunion||RO:Romania||RU:Russian Federation||RW:Rwanda||SH:Saint Helena||KN:Saint Kitts and Nevis||LC:Saint Lucia||PM:Saint Pierre and Miquelon||VC:Saint Vincent and The Grenadines||WS:Samoa||SM:San Marino||ST:Sao Tome and Principe||SA:Saudi Arabia||SN:Senegal||RS:Serbia||SC:Seychelles||SL:Sierra Leone||SG:Singapore||SK:Slovakia||SI:Slovenia||SB:Solomon Islands||SO:Somalia||ZA:South Africa||GS:South Georgia and The South Sandwich Islands||ES:Spain||LK:Sri Lanka||SD:Sudan||SR:Suriname||SJ:Svalbard and Jan Mayen||SZ:Swaziland||SE:Sweden||CH:Switzerland||SY:Syrian Arab Republic||TW:Taiwan, Province of China||TJ:Tajikistan||TZ:Tanzania, United Republic of||TH:Thailand||TL:Timor-leste||TG:Togo||TK:Tokelau||TO:Tonga||TT:Trinidad and Tobago||TN:Tunisia||TR:Turkey||TM:Turkmenistan||TC:Turks and Caicos Islands||TV:Tuvalu||UG:Uganda||UA:Ukraine||AE:United Arab Emirates||GB:United Kingdom||US:United States||UM:United States Minor Outlying Islands||UY:Uruguay||UZ:Uzbekistan||VU:Vanuatu||VE:Venezuela||VN:Viet Nam||VG:Virgin Islands, British||VI:Virgin Islands, U.S.||WF:Wallis and Futuna||EH:Western Sahara||YE:Yemen||ZM:Zambia||ZW:Zimbabwe",
        b = inputStr(),
        c = inputStr(2),
        d = "",
        e = "",
        f = "";
    if (1 == b) {
        d = a.split("||"), f = "<select>\n";
        for (var g = 0; g < d.length; g++) e = d[g].split(":"), f += 1 == c ? ' <option val="' + e[0] + '">' + e[1] + "</option>\n" : ' <option val="' + e[1] + '">' + e[1] + "</option>\n";
        f += "</select>", showResult(f)
    } else 2 == b ? (d = a.replace(/\|\|/g, ";"), showResult(d)) : 3 == b && (d = a.replace(/\|\|/g, "\n"), showResult(d))
}

function doJavaScriptPopup() {
    var a, b, c, d, e, f, g, h, i, j, k, l;
    a = inputStr("-url"), b = inputStr("-name"), c = inputStr("-scrollbars"), d = inputStr("-resizable"), e = inputStr("-status"), f = inputStr("-location"), g = inputStr("-toolbar"), h = inputStr("-menubar"), i = inputStr("-width"), j = inputStr("-height"), k = inputStr("-left"), l = inputStr("-top");
    var m = "scrollbars=" + c + ",resizable=" + d + ",status=" + e + ",location=" + f + ",toolbar=" + g + ",menubar=" + h + ",width=" + i + ",height=" + j + ",left=" + k + ",top=" + l,
        n = '<a href="' + a + '" onclick="javascript:void window.open(' + a + "," + b + "," + m + ');return false;">Popup Window</a>';
    showResult(n)
}

function doEmailHTMLCode() {
    showResult('<a href="' + strCleanUp(inputStr("-to")) + "?cc=" + strCleanUp(inputStr("-cc")) + "&bcc=" + strCleanUp(inputStr("-bcc")) + "&amp;subject=" + strCleanUp(inputStr("-subject")) + "&amp;body=" + strCleanUp(inputStr("-body")) + '">' + inputStr("-link-text") + "</a>")
}

function doWordFrequencyCounter() {
    var a = inputStr(),
        b = inputStr("-exclude"),
        c = inputStr("-sort"),
        d = ["able", "about", "across", "after", "ain't", "all", "almost", "also", "among", "and", "any", "are", "aren't", "because", "been", "but", "can", "can't", "cannot", "could", "could've", "couldn't", "dear", "did", "didn't", "does", "doesn't", "don't", "either", "else", "ever", "every", "for", "from", "get", "got", "had", "has", "hasn't", "have", "he'd", "he'll", "he's", "her", "hers", "him", "his", "how", "how'd", "how'll", "how's", "however", "i'd", "i'll", "i'm", "i've", "into", "isn't", "it's", "its", "just", "least", "let", "like", "likely", "may", "might", "might've", "mightn't", "most", "must", "must've", "mustn't", "neither", "nor", "not", "off", "often", "only", "other", "our", "own", "rather", "said", "say", "says", "shan't", "she", "she'd", "she'll", "she's", "should", "should've", "shouldn't", "since", "some", "than", "that", "that'll", "that's", "the", "their", "them", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "tis", "too", "twas", "wants", "was", "wasn't", "we'd", "we'll", "we're", "were", "weren't", "what", "what'd", "what's", "when", "when", "when'd", "when'll", "when's", "where", "where'd", "where'll", "where's", "which", "while", "who", "who'd", "who'll", "who's", "whom", "why", "why'd", "why'll", "why's", "will", "with", "won't", "would", "would've", "wouldn't", "yet", "you", "you'd", "you'll", "you're", "you've", "your"];
    a = strCleanUp(a, 1), a = a.toLowerCase();
    
    if(a == null || a == '' || a == undefined){
        return;
    }
   
    for (var e = a.split(" "), f = [], g = 0; g < e.length; g++) f[e[g]] = "undefined" != typeof f[e[g]] ? f[e[g]] += 1 : 1;
    var h = 0,
        i = [];
    for (var j in f)("No" == b || "Yes" == b && -1 == $.inArray(j, d)) && i.push([j, f[j]]);
    "Yes" == c && i.sort(function (a, b) {
        return b[1] - a[1]
    }), f = i;
    var k = "<table class='dstable'>";
    for (key in f) h++, k += "<tr><td width='200'>" + f[key][0] + "</td><td>&nbsp;&nbsp;&nbsp;:&nbsp;<strong>" + f[key][1] + "</strong></td></tr>";
    k += "</table>", k += "<table>", k += "<tr><td width='200'>Number of unique words</td><td>&nbsp;&nbsp;&nbsp;:&nbsp;<strong>" + h + "</strong></td></tr>", k += "<tr><td width='200'>Total number of words</td><td>&nbsp;&nbsp;&nbsp;:&nbsp;<strong>" + e.length + "</strong></td></tr>", k += "</table>", showResult(k, !0)
}

function strCleanUp(a, b) {
    return a.replace(new RegExp('"', "g"), "&quot;").replace(new RegExp("'", "g"), "&#39;").replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("=", "g"), "&61;").replace(new RegExp("\\?", "g"), "&63;")
}

function example(a) {
    var b = "",
        c = "",
        d = 0;
    switch (a) {
        case 1:
            b = "This tools can help you to find String Length!";
            break;
        case 2:
            b = "This tools can help you to reverse your String!";
            break;
        case 3:
            b = "This tools can help you to find Character Count!";
            break;
        case 4:
            b = "This tools can help you to find Hidden Characters!";
            break;
        case 5:
            b = "This tools is a wonderful tool, it can help you to Split String!", c = ", ";
            break;
        case 6:
            b = "This tools CAN HELP YOU TO CONVERT YOUR ENTIRE STRING TO LOWERCASE!";
            break;
        case 7:
            b = "This tools can help you to convert your entire string to uppercase!";
            break;
        case 8:
            b = "This tools can help you to count the words in a string!";
            break;
        case 9:
            break;
        case 10:
            b = 1 == $("#enDecode").attr("data-type") ? "This tools can help you to encode your string into base64 format and vice versa!" : "ZG9TdHJpbmcgY2FuIGhlbHAgeW91IHRvIGVuY29kZSB5b3VyIHN0cmluZyBpbnRvIGJhc2U2NCBmb3JtYXQgYW5kIHZpY2UgdmVyc2Eh";
            var d = 1;
            break;
        case 11:
            b = 1 == $("#enDecodeUrl").attr("data-type") ? "https://zxce1.blogspot.com/url-encode-decode.php" : "https%3A%20%2F%2Fzxce1.blogspot.com%2Furl-encode-decode.php", d = 2;
            break;
        case 12:
            break;
        case 13:
            break;
        case 14:
            break;
        case 15:
            break;
        case 16:
            b = '$(document).ready(function(){$("#mark").css("background", "yellow");});';
            break;
        case 17:
            b = '<style type="text/css">body {padding-left: 11em;font-family: Georgia, "Times New Roman", Times, serif;color: purple;background-color: #d8da3d; }ul.navbar {list-style-type: none;padding: 0;margin: 0;position: absolute;top: 2em;left: 1em;width: 9em; }h1 {font-family: Helvetica, Geneva, Arial,SunSans-Regular, sans-serif; }ul.navbar li {background: white;margin: 0.5em 0;padding: 0.3em;border-right: 1em solid black; }ul.navbar a {text-decoration: none; }a:link {color: blue; }a:visited {color: purple; }</style>';
            break;
        case 18:
            b = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>jQuery Syntax</title><script src="https://code.jquery.com/jquery-1.12.4.min.js"></script><script type="text/javascript">$(document).ready(function(){// Some code to be executed..alert("Hello World!");});</script></head><body><!--Contents will be inserted here--></body></html>';
            break;
        case 19:
            b = '<?xml version="1.0" encoding="UTF-8"?><shiporder orderid="889923"xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"xsi:noNamespaceSchemaLocation="shiporder.xsd"><orderperson>John Smith</orderperson><shipto><name>Ola Nordmann</name><address>Langgt 23</address><city>4000 Stavanger</city><country>Norway</country></shipto><item><title>Empire Burlesque</title><note>Special Edition</note><quantity>1</quantity><price>10.90</price></item><item><title>Hide your heart</title><quantity>1</quantity><price>9.90</price></item></shiporder>';
            break;
        case 20:
            b = "SELECT Orders.OrderID,Customers.CustomerName,Customers.CustomerAddress,Customers.CustomerPhone,Shippers.ShipperName FROM ((Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID) INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);";
            break;
        case 21:
            b = '{"glossary":{"title":"example glossary","GlossDiv":{"title":"S","GlossList":{"GlossEntry":{"ID":"SGML","SortAs":"SGML","GlossTerm":"Standard Generalized Markup Language","Acronym":"SGML","Abbrev":"ISO 8879:1986","GlossDef":{"para":"A meta-markup language, used to create markup languages such as DocBook.","GlossSeeAlso":["GML","XML"]},"GlossSee":"markup"}}}}}';
            break;
        case 22:
            b = "This tools can help you to encode string into hex and vice versa!";
            break;
        case 23:
            b = "646f537472696e672063616e2068656c7020796f7520746f20656e636f646520737472696e6720696e746f2068657820616e64207669636520766572736121";
            break;
        case 24:
            b = "This tools can help you to encode string into binary and vice versa!";
            break;
        case 25:
            b = "01100100 01101111 01010011 01110100 01110010 01101001 01101110 01100111 00100000 01100011 01100001 01101110 00100000 01101000 01100101 01101100 01110000 00100000 01111001 01101111 01110101 00100000 01110100 01101111 00100000 01100101 01101110 01100011 01101111 01100100 01100101 00100000 01110011 01110100 01110010 01101001 01101110 01100111 00100000 01101001 01101110 01110100 01101111 00100000 01100010 01101001 01101110 01100001 01110010 01111001 00100000 01100001 01101110 01100100 00100000 01110110 01101001 01100011 01100101 00100000 01110110 01100101 01110010 01110011 01100001 00100001";
            break;
        case 26:
            b = "12345";
            break;
        case 27:
            b = "1100000 0111001";
            break;
        case 28:
            b = "123456";
            break;
        case 29:
            b = "1e240";
            break;
        case 30:
            c = "This tools can help you to find the occurance of a string within a string.", b = "find";
            break;
        case 31:
            b = "10" == $("#htmlEncodeDecode").attr("data-type") ? "<!DOCTYPE html><html><title>HTML Tutorial</title><body><h1>This is a heading</h1><p>This is a paragraph.</p></body></html>" : "&lt;!DOCTYPE html&gt;&lt;html&gt;&lt;title&gt;HTML Tutorial&lt;/title&gt;&lt;body&gt;&lt;h1&gt;This is a heading&lt;/h1&gt;&lt;p&gt;This is a paragraph.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;", d = 3;
            break;
        case 32:
            break;
        case 33:
            break;
        case 34:
            b = "6011 6029 0652 3730";
            break;
        case 35:
            b = "This tools can help you to generate MD5 hash of any string.";
            break;
        case 36:
            break;
        case 37:
            b = "This tools can help you to remove duplicate line\nThis tools can help you to remove duplicate line\nthis line is not duplicate\n";
            break;
        case 38:
            b = "This tools can help you to remove empty lines\n\ncheck it out by your own\n\nthis is just an example\n";
            break;
        case 39:
            b = "This tools can help you to remove line breaks. \nCheck it out by your own, \nthis is just an example \n";
            break;
        case 40:
            b = "This tools can help you to    remove extra        spaces";
            break;
        case 41:
            b = "This tools can help you to remove empty lines\nwe are going to remove this line\ncheck it out by your own\nthis is just an example\n", c = "we are going to remove this line";
            break;
        case 42:
            b = "This tools can help you to convert ROT13 to Text and vice versa!";
            break;
        case 43:
            b = "qbFgevat pna uryc lbh gb pbaireg EBG13 gb Grkg naq ivpr irefn!";
            break;
        case 44:
            b = '<ul style="margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif; text-align: justify;"><li style="margin: 0px; padding: 0px;"><h4 style="margin-right: 10px; margin-bottom: 5px; margin-left: 10px; padding: 0px; text-align: center; line-height: 18px; font-size: 14px; font-style: italic; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</h4><h5 style="margin: 5px 10px 20px; padding: 0px; text-align: center; font-size: 12px; line-height: 14px; color: rgb(0, 0, 0); font-family: &quot;Open Sans&quot;, Arial, sans-serif;">"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."</h5></li></ul>', c = "Plain", $(".Editor-editor").html(b);
            break;
        case 46:
            b = "https://www.google.com|https://www.yahoo.com,https://www.microsoft.com, https://www.amazon.com/";
            break;
        case 47:
            b = "5K TIMING	400M	600M	800M	1000M	1200M\nIn minutes	In minutes				\n20	0:01:27	0:02:12	0:02:57	0:03:43	0:04:32\n21	0:01:31	0:02:19	0:03:07	0:03:55	0:04:46\n22	0:01:36	0:02:26	0:03:16	0:04:08	0:05:01\n23	0:01:41	0:02:34	0:03:26	0:04:20	0:05:15\n24	0:01:46	0:02:41	0:03:36	0:04:32	0:05:30\n25	0:01:51	0:02:48	0:03:45	0:04:44	0:05:44\n26	0:01:56	0:02:55	0:03:55	0:04:56	0:05:59", c = "TAB";
            break;
        case 48:
            b = "This tools can help you to remove empty lines\nwe are going to remove this line\ncheck it out by your own\nthis is just an example\n", c = "div";
            break;
        case 52:
            b = "This tools can help you to find random choice";
            break;
        case 53:
            b = "This tools can help you to alphabetized your text";
            break;
        case 54:
            b = "Sed lacinia sit ultricies ipsum lorem praesent nec amet. Libero ut consectetur lorem donec vehicula sed non et ipsum quam praesent mattis et ut praesent arcu. Augue egestas sit eget consectetur mattis donec sit lacinia donec libero enim ligula libero sed.";
            break;
        case 56:
            b = "This tools can help you to remove empty lines\nwe are going to remove this line\ncheck it out by your own\nthis is just an example\n";
            break;
        case 68:
            b = "Sed lacinia sit ultricies ipsum lorem praesent nec amet. Libero ut consectetur lorem donec vehicula sed non et ipsum quam praesent mattis et ut praesent arcu. Augue egestas sit eget consectetur mattis donec sit lacinia donec libero enim ligula libero sed.";
            break;
        default:
            b = ""
    }
    $("#string").is('input[type="text"]') ? $("#string").val(b) : $("#string").is("textarea") ? $("#string").val(b) : $("#string").html(b), "" != c && ($("#string1").is('input[type="text"]') || $("#string1").is("select") ? $("#string1").val(c) : $("#string1").html(c)), "" != c && ($("#string2").is('input[type="text"]') || $("#string2").is("select") ? $("#string2").val(c) : $("#string2").html(c)), 0 == d ? $("#doFunctionButton").trigger("click") : 1 == d ? $("#enDecode").trigger("click") : 2 == d ? $("#enDecodeUrl").trigger("click") : 3 == d && $("#htmlEncodeDecode").trigger("click")
}

function exampleData() {}
if (! function (a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
            if (!a.document) throw new Error("jQuery requires a window with a document");
            return b(a)
        } : b(a)
    }("undefined" != typeof window ? window : this, function (a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = ea.type(a);
            return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (ea.isFunction(b)) return ea.grep(a, function (a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return ea.grep(a, function (a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (ma.test(b)) return ea.filter(b, a, c);
                b = ea.filter(b, a)
            }
            return ea.grep(a, function (a) {
                return ea.inArray(a, b) >= 0 !== c
            })
        }

        function e(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }

        function f(a) {
            var b = ua[a] = {};
            return ea.each(a.match(ta) || [], function (a, c) {
                b[c] = !0
            }), b
        }

        function g() {
            oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
        }

        function h() {
            (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(za, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c
                    } catch (e) {}
                    ea.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (ea.acceptData(a)) {
                var e, f, g = ea.expando,
                    h = a.nodeType,
                    i = h ? ea.cache : a,
                    j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
                    toJSON: ea.noop
                }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (ea.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? ea.cache : a,
                    h = f ? a[ea.expando] : ea.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        for (; e--;) delete d[b[e]];
                        if (c ? !j(d) : !ea.isEmptyObject(d)) return
                    }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }

        function m() {
            return !0
        }

        function n() {
            return !1
        }

        function o() {
            try {
                return oa.activeElement
            } catch (a) {}
        }

        function p(a) {
            var b = Ka.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
            return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
        }

        function r(a) {
            Ea.test(a.type) && (a.defaultChecked = a.checked)
        }

        function s(a, b) {
            return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }

        function t(a) {
            return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
        }

        function u(a) {
            var b = Va.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"), a
        }

        function v(a, b) {
            for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
        }

        function w(a, b) {
            if (1 === b.nodeType && ea.hasData(a)) {
                var c, d, e, f = ea._data(a),
                    g = ea._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ea.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                    e = ea._data(b);
                    for (d in e.events) ea.removeEvent(b, d, e.handle);
                    b.removeAttribute(ea.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d, e = ea(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
            return e.detach(), f
        }

        function z(a) {
            var b = oa,
                c = _a[a];
            return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
        }

        function A(a, b) {
            return {
                get: function () {
                    var c = a();
                    return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0
                }
            }
        }

        function B(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
                if (b = mb[e] + c, b in a) return b;
            return d
        }

        function C(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
            for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }

        function D(a, b, c) {
            var d = ib.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }

        function E(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
            return g
        }

        function F(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = ab(a),
                g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
                d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) {
            return new G.prototype.init(a, b, c, d, e)
        }

        function H() {
            return setTimeout(function () {
                nb = void 0
            }), nb = ea.now()
        }

        function I(a, b) {
            var c, d = {
                    height: a
                },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Ca(a),
                p = ea._data(a, "fxshow");
            c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
                h.unqueued || i()
            }), h.unqueued++, l.always(function () {
                l.always(function () {
                    h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
                })
            })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function () {
                n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], pb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || ea.style(a, d)
                } else j = void 0;
            if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function () {
                    ea(a).hide()
                }), l.done(function () {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m) ea.style(a, b, m[b])
                });
                for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
                    f = g.expand(f), delete a[d];
                    for (c in f) c in a || (a[c] = f[c], b[c] = e)
                } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0,
                g = sb.length,
                h = ea.Deferred().always(function () {
                    delete i.elem
                }),
                i = function () {
                    if (e) return !1;
                    for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                    return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                },
                j = h.promise({
                    elem: a,
                    props: ea.extend({}, b),
                    opts: ea.extend(!0, {
                        specialEasing: {}
                    }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function (b, c) {
                        var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                        return j.tweens.push(d), d
                    },
                    stop: function (b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = sb[f].call(j, a, k, j.opts)) return d;
            return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function (b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ta) || [];
                if (ea.isFunction(c))
                    for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) {
                var i;
                return f[h] = !0, ea.each(a[h] || [], function (a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
                }), i
            }
            var f = {},
                g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) {
            var c, d, e = ea.ajaxSettings.flatOptions || {};
            for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
            return c && ea.extend(!0, a, c), a
        }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) {
                        i.unshift(g);
                        break
                    } if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) {
                        f = g;
                        break
                    }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                            break
                        } if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try {
                        b = g(b)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: g ? l : "No conversion from " + i + " to " + f
                        }
                    }
            }
            return {
                state: "success",
                data: b
            }
        }

        function S(a, b, c, d) {
            var e;
            if (ea.isArray(b)) ea.each(b, function (b, e) {
                c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
            });
            else if (c || "object" !== ea.type(b)) d(a, b);
            else
                for (e in b) S(a + "[" + e + "]", b[e], c, d)
        }

        function T() {
            try {
                return new a.XMLHttpRequest
            } catch (b) {}
        }

        function U() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP")
            } catch (b) {}
        }

        function V(a) {
            return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
        }
        var W = [],
            X = W.slice,
            Y = W.concat,
            Z = W.push,
            $ = W.indexOf,
            _ = {},
            aa = _.toString,
            ba = _.hasOwnProperty,
            ca = {},
            da = "1.11.3",
            ea = function (a, b) {
                return new ea.fn.init(a, b)
            },
            fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ga = /^-ms-/,
            ha = /-([\da-z])/gi,
            ia = function (a, b) {
                return b.toUpperCase()
            };
        ea.fn = ea.prototype = {
            jquery: da,
            constructor: ea,
            selector: "",
            length: 0,
            toArray: function () {
                return X.call(this)
            },
            get: function (a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
            },
            pushStack: function (a) {
                var b = ea.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function (a, b) {
                return ea.each(this, a, b)
            },
            map: function (a) {
                return this.pushStack(ea.map(this, function (b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function () {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function () {
                return this.eq(0)
            },
            last: function () {
                return this.eq(-1)
            },
            eq: function (a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function () {
                return this.prevObject || this.constructor(null)
            },
            push: Z,
            sort: W.sort,
            splice: W.splice
        }, ea.extend = ea.fn.extend = function () {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (a) {
                throw new Error(a)
            },
            noop: function () {},
            isFunction: function (a) {
                return "function" === ea.type(a)
            },
            isArray: Array.isArray || function (a) {
                return "array" === ea.type(a)
            },
            isWindow: function (a) {
                return null != a && a == a.window
            },
            isNumeric: function (a) {
                return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isEmptyObject: function (a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function (a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
                try {
                    if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (ca.ownLast)
                    for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            },
            type: function (a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
            },
            globalEval: function (b) {
                b && ea.trim(b) && (a.execScript || function (b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function (a) {
                return a.replace(ga, "ms-").replace(ha, ia)
            },
            nodeName: function (a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function (a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break;
                return a
            },
            trim: function (a) {
                return null == a ? "" : (a + "").replace(fa, "")
            },
            makeArray: function (a, b) {
                var d = b || [];
                return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
            },
            inArray: function (a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function (a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d];) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function (a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function (a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function (a, b) {
                var c, d, e;
                return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
                    return a.apply(b || this, c.concat(X.call(arguments)))
                }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
            },
            now: function () {
                return +new Date
            },
            support: ca
        }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
            _["[object " + b + "]"] = b.toLowerCase()
        });
        var ja = function (a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) {
                            if (9 === h) {
                                if (f = b.getElementById(g), !f || !f.parentNode) return c;
                                if (f.id === g) return c.push(f), c
                            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                        } else {
                            if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                            if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                        } if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try {
                            return $.apply(c, o.querySelectorAll(p)), c
                        } catch (q) {} finally {
                            l || b.removeAttribute("id")
                        }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) {
                    return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
                }
                var b = [];
                return a
            }

            function d(a) {
                return a[N] = !0, a
            }

            function e(a) {
                var b = G.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function f(a, b) {
                for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
            }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function i(a) {
                return function (b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function j(a) {
                return d(function (b) {
                    return b = +b, d(function (c, d) {
                        for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function k(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }

            function l() {}

            function m(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function (b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function o(a) {
                return a.length > 1 ? function (b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) {
                for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
                return d
            }

            function q(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
                        return a === b
                    }, g, !0), j = n(function (a) {
                        return aa(b, a) > -1
                    }, g, !0), k = [function (a, c, d) {
                        var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                        return b = null, e
                    }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                        }
                        k.push(c)
                    } return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function (d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) {
                                        i.push(k);
                                        break
                                    } j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function (a, b) {
                    return a === b && (E = !0), 0
                },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function (a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function (a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                },
                xa = function () {
                    F()
                };
            try {
                $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
            } catch (ya) {
                $ = {
                    apply: X.length ? function (a, b) {
                        Z.apply(a, _.call(b))
                    } : function (a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function (a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, F = b.setDocument = function (a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), v.getElementsByTagName = e(function (a) {
                    return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
                }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
                    return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
                }), v.getById ? (w.find.ID = function (a, b) {
                    if ("undefined" != typeof b.getElementById && I) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, w.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete w.find.ID, w.filter.ID = function (a) {
                    var b = a.replace(va, wa);
                    return function (a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), w.find.TAG = v.getElementsByTagName ? function (a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
                } : function (a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function (a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
                    H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
                }), e(function (a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
                    v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
                }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function (a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function (a, b) {
                    if (a === b) return E = !0, 0;
                    var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
                } : function (a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function (a, c) {
                return b(a, null, null, c)
            }, b.matchesSelector = function (a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                    var d = L.call(a, c);
                    if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function (a, b) {
                return (a.ownerDocument || a) !== G && F(a), M(a, b)
            }, b.attr = function (a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function (a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, b.uniqueSort = function (a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                    for (; b = a[e++];) b === a[e] && (d = c.push(e));
                    for (; d--;) a.splice(c[d], 1)
                }
                return D = null, a
            }, x = b.getText = function (a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) {
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                    } else if (3 === e || 4 === e) return a.nodeValue
                } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (a) {
                        return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function (a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                    },
                    PSEUDO: function (a) {
                        var b, c = !a[6] && a[2];
                        return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (a) {
                        var b = a.replace(va, wa).toLowerCase();
                        return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function (a) {
                        var b = R[a + " "];
                        return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (a, c, d) {
                        return function (e) {
                            var f = b.attr(e, a);
                            return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                        }
                    },
                    CHILD: function (a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [P, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function (a, c) {
                        var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                        return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
                            for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                        }) : function (a) {
                            return f(a, 0, e)
                        }) : f
                    }
                },
                pseudos: {
                    not: d(function (a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function (a, b, c, d) {
                            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, d, f) {
                            return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                        }
                    }),
                    has: d(function (a) {
                        return function (c) {
                            return b(a, c).length > 0
                        }
                    }),
                    contains: d(function (a) {
                        return a = a.replace(va, wa),
                            function (b) {
                                return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                            }
                    }),
                    lang: d(function (a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function (b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function (b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function (a) {
                        return a === H
                    },
                    focus: function (a) {
                        return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function (a) {
                        return a.disabled === !1
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function (a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function (a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function (a) {
                        return !w.pseudos.empty(a)
                    },
                    header: function (a) {
                        return qa.test(a.nodeName)
                    },
                    input: function (a) {
                        return pa.test(a.nodeName)
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function (a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: j(function () {
                        return [0]
                    }),
                    last: j(function (a, b) {
                        return [b - 1]
                    }),
                    eq: j(function (a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: j(function (a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: j(function (a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: j(function (a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) w.pseudos[u] = h(u);
            for (u in {
                    submit: !0,
                    reset: !0
                }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                        value: d,
                        type: e[0].replace(ia, " ")
                    }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                        value: d,
                        type: g,
                        matches: e
                    }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function (a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function (a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                            if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                            break
                        }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
                return 1 & a.compareDocumentPosition(G.createElement("div"))
            }), e(function (a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || f("type|href|height|width", function (a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), v.attributes && e(function (a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || f("value", function (a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), e(function (a) {
                return null == a.getAttribute("disabled")
            }) || f(ba, function (a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), b
        }(a);
        ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
        var ka = ea.expr.match.needsContext,
            la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ma = /^.[^:#\[\.,]*$/;
        ea.filter = function (a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function (a) {
                return 1 === a.nodeType
            }))
        }, ea.fn.extend({
            find: function (a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(ea(a).filter(function () {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) ea.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function (a) {
                return this.pushStack(d(this, a || [], !1))
            },
            not: function (a) {
                return this.pushStack(d(this, a || [], !0))
            },
            is: function (a) {
                return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
            }
        });
        var na, oa = a.document,
            pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            qa = ea.fn.init = function (a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                            for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = oa.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return na.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = oa, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
            };
        qa.prototype = ea.fn, na = ea(oa);
        var ra = /^(?:parents|prev(?:Until|All))/,
            sa = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ea.extend({
            dir: function (a, b, c) {
                for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
                return d
            },
            sibling: function (a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), ea.fn.extend({
            has: function (a) {
                var b, c = ea(a, this),
                    d = c.length;
                return this.filter(function () {
                    for (b = 0; d > b; b++)
                        if (ea.contains(this, c[b])) return !0
                })
            },
            closest: function (a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        } return this.pushStack(f.length > 1 ? ea.unique(f) : f)
            },
            index: function (a) {
                return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function (a, b) {
                return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
            },
            addBack: function (a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        }), ea.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function (a) {
                return ea.dir(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return ea.dir(a, "parentNode", c)
            },
            next: function (a) {
                return e(a, "nextSibling")
            },
            prev: function (a) {
                return e(a, "previousSibling")
            },
            nextAll: function (a) {
                return ea.dir(a, "nextSibling")
            },
            prevAll: function (a) {
                return ea.dir(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return ea.dir(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return ea.dir(a, "previousSibling", c)
            },
            siblings: function (a) {
                return ea.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function (a) {
                return ea.sibling(a.firstChild)
            },
            contents: function (a) {
                return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
            }
        }, function (a, b) {
            ea.fn[a] = function (c, d) {
                var e = ea.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var ta = /\S+/g,
            ua = {};
        ea.Callbacks = function (a) {
            a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function (f) {
                    for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                        if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        } b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function () {
                        if (i) {
                            var d = i.length;
                            ! function f(b) {
                                ea.each(b, function (b, c) {
                                    var d = ea.type(c);
                                    "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), b ? e = i.length : c && (h = d, k(c))
                        }
                        return this
                    },
                    remove: function () {
                        return i && ea.each(arguments, function (a, c) {
                            for (var d;
                                (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                        }), this
                    },
                    has: function (a) {
                        return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
                    },
                    empty: function () {
                        return i = [], e = 0, this
                    },
                    disable: function () {
                        return i = j = c = void 0, this
                    },
                    disabled: function () {
                        return !i
                    },
                    lock: function () {
                        return j = void 0, c || l.disable(), this
                    },
                    locked: function () {
                        return !j
                    },
                    fireWith: function (a, c) {
                        return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
                    },
                    fire: function () {
                        return l.fireWith(this, arguments), this
                    },
                    fired: function () {
                        return !!d
                    }
                };
            return l
        }, ea.extend({
            Deferred: function (a) {
                var b = [
                        ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ea.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function () {
                            return c
                        },
                        always: function () {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function () {
                            var a = arguments;
                            return ea.Deferred(function (c) {
                                ea.each(b, function (b, f) {
                                    var g = ea.isFunction(a[b]) && a[b];
                                    e[f[1]](function () {
                                        var a = g && g.apply(this, arguments);
                                        a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function (a) {
                            return null != a ? ea.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, ea.each(b, function (a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function () {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function (a) {
                var b, c, d, e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : ea.Deferred(),
                    j = function (a, c, d) {
                        return function (e) {
                            c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                        }
                    };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var va;
        ea.fn.ready = function (a) {
            return ea.ready.promise().done(a), this
        }, ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function (a) {
                a ? ea.readyWait++ : ea.ready(!0)
            },
            ready: function (a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body) return setTimeout(ea.ready);
                    ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
                }
            }
        }), ea.ready.promise = function (b) {
            if (!va)
                if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
                else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try {
                    c = null == a.frameElement && oa.documentElement
                } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!ea.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        g(), ea.ready()
                    }
                }()
            }
            return va.promise(b)
        };
        var wa, xa = "undefined";
        for (wa in ea(ca)) break;
        ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function () {
                var a, b, c, d;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function () {
                var a = oa.createElement("div");
                if (null == ca.deleteExpando) {
                    ca.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        ca.deleteExpando = !1
                    }
                }
                a = null
            }(), ea.acceptData = function (a) {
                var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            za = /([A-Z])/g;
        ea.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function (a) {
                return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
            },
            data: function (a, b, c) {
                return k(a, b, c)
            },
            removeData: function (a, b) {
                return l(a, b)
            },
            _data: function (a, b, c) {
                return k(a, b, c, !0)
            },
            _removeData: function (a, b) {
                return l(a, b, !0)
            }
        }), ea.fn.extend({
            data: function (a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function () {
                    ea.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                    ea.data(this, a, b)
                }) : f ? i(f, a, ea.data(f, a)) : void 0
            },
            removeData: function (a) {
                return this.each(function () {
                    ea.removeData(this, a)
                })
            }
        }), ea.extend({
            queue: function (a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = ea.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ea._queueHooks(a, b),
                    g = function () {
                        ea.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function (a, b) {
                var c = b + "queueHooks";
                return ea._data(a, c) || ea._data(a, c, {
                    empty: ea.Callbacks("once memory").add(function () {
                        ea._removeData(a, b + "queue"), ea._removeData(a, c)
                    })
                })
            }
        }), ea.fn.extend({
            queue: function (a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                    var c = ea.queue(this, a, b);
                    ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    ea.dequeue(this, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, b) {
                var c, d = 1,
                    e = ea.Deferred(),
                    f = this,
                    g = this.length,
                    h = function () {
                        --d || e.resolveWith(f, [f])
                    };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ba = ["Top", "Right", "Bottom", "Left"],
            Ca = function (a, b) {
                return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
            },
            Da = ea.access = function (a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === ea.type(c)) {
                    e = !0;
                    for (h in c) ea.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                        return j.call(ea(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ea = /^(?:checkbox|radio)$/i;
        ! function () {
            var a = oa.createElement("input"),
                b = oa.createElement("div"),
                c = oa.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                    ca.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
                ca.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    ca.deleteExpando = !1
                }
            }
        }(),
        function () {
            var b, c, d = oa.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Fa = /^(?:input|select|textarea)$/i,
            Ga = /^key/,
            Ha = /^(?:mouse|pointer|contextmenu)|click/,
            Ia = /^(?:focusinfocus|focusoutblur)$/,
            Ja = /^([^.]*)(?:\.(.+)|)$/;
        ea.event = {
            global: {},
            add: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
                            return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
                        }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
                        type: n,
                        origType: p,
                        data: d,
                        handler: c,
                        guid: c.guid,
                        selector: e,
                        needsContext: e && ea.expr.match.needsContext.test(e),
                        namespace: o.join(".")
                    }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                    a = null
                }
            },
            remove: function (a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                        if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                    ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
                }
            },
            trigger: function (b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || oa],
                    n = ba.call(b, "type") ? b.type : b,
                    o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !ea.isWindow(d)) {
                        for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                        k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0;
                        (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                        k = d[g], k && (d[g] = null), ea.event.triggered = n;
                        try {
                            d[n]()
                        } catch (p) {}
                        ea.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function (a) {
                a = ea.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = X.call(arguments),
                    i = (ea._data(this, "events") || {})[a.type] || [],
                    j = ea.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = ea.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, f = 0;
                            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function (a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                            e.length && g.push({
                                elem: i,
                                handlers: e
                            })
                        } return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }), g
            },
            fix: function (a) {
                if (a[ea.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function (a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function () {
                        if (this !== o() && this.focus) try {
                            return this.focus(), !1
                        } catch (a) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function () {
                        return this === o() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function () {
                        return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function (a) {
                        return ea.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function (a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function (a, b, c, d) {
                var e = ea.extend(new ea.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ea.removeEvent = oa.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
        }, ea.Event = function (a, b) {
            return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
        }, ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function () {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ea.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function (a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ca.submitBubbles || (ea.event.special.submit = {
            setup: function () {
                return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function (a) {
                    var b = a.target,
                        c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                    c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), ea._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function (a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
            },
            teardown: function () {
                return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit")
            }
        }), ca.changeBubbles || (ea.event.special.change = {
            setup: function () {
                return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), ea.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
                })), !1) : void ea.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
                    }), ea._data(b, "changeBubbles", !0))
                })
            },
            handle: function (a) {
                var b = a.target;
                return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function () {
                return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
            }
        }), ca.focusinBubbles || ea.each({
            focus: "focusin",
            blur: "focusout"
        }, function (a, b) {
            var c = function (a) {
                ea.event.simulate(b, a.target, ea.event.fix(a), !0)
            };
            ea.event.special[b] = {
                setup: function () {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b);
                    e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
                },
                teardown: function () {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b) - 1;
                    e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
                }
            }
        }), ea.fn.extend({
            on: function (a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b, b = void 0);
                    for (f in a) this.on(f, b, c, a[f], e);
                    return this
                }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
                else if (!d) return this;
                return 1 === e && (g = d, d = function (a) {
                    return ea().off(a), g.apply(this, arguments)
                }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function () {
                    ea.event.add(this, a, d, c, b)
                })
            },
            one: function (a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function (a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
                if ("object" == typeof a) {
                    for (e in a) this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
                    ea.event.remove(this, a, c, b)
                })
            },
            trigger: function (a, b) {
                return this.each(function () {
                    ea.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                var c = this[0];
                return c ? ea.event.trigger(a, b, c, !0) : void 0
            }
        });
        var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            La = / jQuery\d+="(?:null|\d+)"/g,
            Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
            Na = /^\s+/,
            Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pa = /<([\w:]+)/,
            Qa = /<tbody/i,
            Ra = /<|&#?\w+;/,
            Sa = /<(?:script|style|link)/i,
            Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ua = /^$|\/(?:java|ecma)script/i,
            Va = /^true\/(.*)/,
            Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xa = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ya = p(oa),
            Za = Ya.appendChild(oa.createElement("div"));
        Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
            clone: function (a, b, c) {
                var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            },
            buildFragment: function (a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o], f || 0 === f)
                        if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                        for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                    if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                        for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function (a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                    }
            }
        }), ea.fn.extend({
            text: function (a) {
                return Da(this, function (a) {
                    return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
                }, null, a, arguments.length)
            },
            append: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function () {
                return this.domManip(arguments, function (a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function () {
                return this.domManip(arguments, function (a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function (a, b) {
                for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
                return this
            },
            empty: function () {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function (a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                    return ea.clone(this, a, b)
                })
            },
            html: function (a) {
                return Da(this, function (a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                    if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Oa, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function () {
                var a = arguments[0];
                return this.domManip(arguments, function (b) {
                    a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
                }), a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function (a) {
                return this.remove(a, !0)
            },
            domManip: function (a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = ea.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function (c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null
                }
                return this
            }
        }), ea.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            ea.fn[a] = function (a) {
                for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
                return this.pushStack(e)
            }
        });
        var $a, _a = {};
        ! function () {
            var a;
            ca.shrinkWrapBlocks = function () {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var ab, bb, cb = /^margin/,
            db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
            eb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ab = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }, bb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : oa.documentElement.currentStyle && (ab = function (a) {
            return a.currentStyle
        }, bb = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        }), ! function () {
            function b() {
                var b, c, d, e;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
            }
            var c, d, e, f, g, h, i;
            c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
                reliableHiddenOffsets: function () {
                    return null == h && b(), h
                },
                boxSizingReliable: function () {
                    return null == g && b(), g
                },
                pixelPosition: function () {
                    return null == f && b(), f
                },
                reliableMarginRight: function () {
                    return null == i && b(), i
                }
            }))
        }(), ea.swap = function (a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var fb = /alpha\([^)]*\)/i,
            gb = /opacity\s*=\s*([^)]*)/,
            hb = /^(none|table(?!-c[ea]).+)/,
            ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
            jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
            kb = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            lb = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            mb = ["Webkit", "O", "Moz", "ms"];
        ea.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = bb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ca.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = ea.camelCase(b),
                        i = a.style;
                    if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                        i[b] = c
                    } catch (j) {}
                }
            },
            css: function (a, b, c, d) {
                var e, f, g, h = ea.camelCase(b);
                return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
            }
        }), ea.each(["height", "width"], function (a, b) {
            ea.cssHooks[b] = {
                get: function (a, c, d) {
                    return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function () {
                        return F(a, b, d)
                    }) : F(a, b, d) : void 0
                },
                set: function (a, c, d) {
                    var e = d && ab(a);
                    return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }), ca.opacity || (ea.cssHooks.opacity = {
            get: function (a, b) {
                return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
            },
            set: function (a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
            }
        }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
            return b ? ea.swap(a, {
                display: "inline-block"
            }, bb, [a, "marginRight"]) : void 0
        }), ea.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (a, b) {
            ea.cssHooks[a + b] = {
                expand: function (c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            }, cb.test(a) || (ea.cssHooks[a + b].set = D)
        }), ea.fn.extend({
            css: function (a, b) {
                return Da(this, function (a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (ea.isArray(b)) {
                        for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function () {
                return C(this, !0)
            },
            hide: function () {
                return C(this)
            },
            toggle: function (a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    Ca(this) ? ea(this).show() : ea(this).hide()
                })
            }
        }), ea.Tween = G, G.prototype = {
            constructor: G,
            init: function (a, b, c, d, e, f) {
                this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
            },
            cur: function () {
                var a = G.propHooks[this.prop];
                return a && a.get ? a.get(this) : G.propHooks._default.get(this)
            },
            run: function (a) {
                var b, c = G.propHooks[this.prop];
                return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
            }
        }, G.prototype.init.prototype = G.prototype, G.propHooks = {
            _default: {
                get: function (a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function (a) {
                    ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
            set: function (a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        }, ea.easing = {
            linear: function (a) {
                return a
            },
            swing: function (a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        }, ea.fx = G.prototype.init, ea.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
            rb = /queueHooks$/,
            sb = [K],
            tb = {
                "*": [function (a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = qb.exec(b),
                        f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                        g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        ea.Animation = ea.extend(M, {
                tweener: function (a, b) {
                    ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                    for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
                },
                prefilter: function (a, b) {
                    b ? sb.unshift(a) : sb.push(a)
                }
            }), ea.speed = function (a, b, c) {
                var d = a && "object" == typeof a ? ea.extend({}, a) : {
                    complete: c || !c && b || ea.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !ea.isFunction(b) && b
                };
                return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
                    ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
                }, d
            }, ea.fn.extend({
                fadeTo: function (a, b, c, d) {
                    return this.filter(Ca).css("opacity", 0).show().end().animate({
                        opacity: b
                    }, a, c, d)
                },
                animate: function (a, b, c, d) {
                    var e = ea.isEmptyObject(a),
                        f = ea.speed(b, c, d),
                        g = function () {
                            var b = M(this, ea.extend({}, a), f);
                            (e || ea._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function (a, b, c) {
                    var d = function (a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ea.timers,
                            g = ea._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && ea.dequeue(this, a)
                    })
                },
                finish: function (a) {
                    return a !== !1 && (a = a || "fx"), this.each(function () {
                        var b, c = ea._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ea.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), ea.each(["toggle", "show", "hide"], function (a, b) {
                var c = ea.fn[b];
                ea.fn[b] = function (a, d, e) {
                    return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
                }
            }), ea.each({
                slideDown: I("show"),
                slideUp: I("hide"),
                slideToggle: I("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function (a, b) {
                ea.fn[a] = function (a, c, d) {
                    return this.animate(b, a, c, d)
                }
            }), ea.timers = [], ea.fx.tick = function () {
                var a, b = ea.timers,
                    c = 0;
                for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || ea.fx.stop(), nb = void 0
            }, ea.fx.timer = function (a) {
                ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
            }, ea.fx.interval = 13, ea.fx.start = function () {
                ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
            }, ea.fx.stop = function () {
                clearInterval(ob), ob = null
            }, ea.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, ea.fn.delay = function (a, b) {
                return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function () {
                        clearTimeout(d)
                    }
                })
            },
            function () {
                var a, b, c, d, e;
                b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
            }();
        var ub = /\r/g;
        ea.fn.extend({
            val: function (a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = ea.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
            }
        }), ea.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = ea.find.attr(a, "value");
                        return null != b ? b : ea.trim(ea.text(a))
                    }
                },
                select: {
                    get: function (a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ea(c).val(), f) return b;
                                g.push(b)
                            } return g
                    },
                    set: function (a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                            if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
                                d.selected = c = !0
                            } catch (h) {
                                d.scrollHeight
                            } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), ea.each(["radio", "checkbox"], function () {
            ea.valHooks[this] = {
                set: function (a, b) {
                    return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
                }
            }, ca.checkOn || (ea.valHooks[this].get = function (a) {
                return null === a.getAttribute("value") ? "on" : a.value
            })
        });
        var vb, wb, xb = ea.expr.attrHandle,
            yb = /^(?:checked|selected)$/i,
            zb = ca.getSetAttribute,
            Ab = ca.input;
        ea.fn.extend({
            attr: function (a, b) {
                return Da(this, ea.attr, a, b, arguments.length > 1)
            },
            removeAttr: function (a) {
                return this.each(function () {
                    ea.removeAttr(this, a)
                })
            }
        }), ea.extend({
            attr: function (a, b, c) {
                var d, e, f = a.nodeType;
                return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b)) : void 0
            },
            removeAttr: function (a, b) {
                var c, d, e = 0,
                    f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b
                        }
                    }
                }
            }
        }), wb = {
            set: function (a, b, c) {
                return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
            }
        }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] = Ab && zb || !yb.test(b) ? function (a, b, d) {
                var e, f;
                return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
            } : function (a, b, c) {
                return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
        }), Ab && zb || (ea.attrHooks.value = {
            set: function (a, b, c) {
                return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
            }
        }), zb || (vb = {
            set: function (a, b, c) {
                var d = a.getAttributeNode(c);
                return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
            }
        }, xb.id = xb.name = xb.coords = function (a, b, c) {
            var d;
            return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
        }, ea.valHooks.button = {
            get: function (a, b) {
                var c = a.getAttributeNode(b);
                return c && c.specified ? c.value : void 0
            },
            set: vb.set
        }, ea.attrHooks.contenteditable = {
            set: function (a, b, c) {
                vb.set(a, "" === b ? !1 : b, c)
            }
        }, ea.each(["width", "height"], function (a, b) {
            ea.attrHooks[b] = {
                set: function (a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
                }
            }
        })), ca.style || (ea.attrHooks.style = {
            get: function (a) {
                return a.style.cssText || void 0
            },
            set: function (a, b) {
                return a.style.cssText = b + ""
            }
        });
        var Bb = /^(?:input|select|textarea|button|object)$/i,
            Cb = /^(?:a|area)$/i;
        ea.fn.extend({
            prop: function (a, b) {
                return Da(this, ea.prop, a, b, arguments.length > 1)
            },
            removeProp: function (a) {
                return a = ea.propFix[a] || a, this.each(function () {
                    try {
                        this[a] = void 0, delete this[a]
                    } catch (b) {}
                })
            }
        }), ea.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function (a, b, c) {
                var d, e, f, g = a.nodeType;
                return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (a) {
                        var b = ea.find.attr(a, "tabindex");
                        return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1;
                    }
                }
            }
        }), ca.hrefNormalized || ea.each(["href", "src"], function (a, b) {
            ea.propHooks[b] = {
                get: function (a) {
                    return a.getAttribute(b, 4)
                }
            }
        }), ca.optSelected || (ea.propHooks.selected = {
            get: function (a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
            }
        }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ea.propFix[this.toLowerCase()] = this
        }), ca.enctype || (ea.propFix.enctype = "encoding");
        var Db = /[\t\r\n\f]/g;
        ea.fn.extend({
            addClass: function (a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function (b) {
                    ea(this).addClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = ea.trim(d), c.className !== g && (c.className = g)
                        } return this
            },
            removeClass: function (a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function (b) {
                    ea(this).removeClass(a.call(this, b, this.className))
                });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                        } return this
            },
            toggleClass: function (a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function (c) {
                    ea(this).toggleClass(a.call(this, c, this.className, b), b)
                } : function () {
                    if ("string" === c)
                        for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
                })
            },
            hasClass: function (a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
            ea.fn[b] = function (a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }), ea.fn.extend({
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function (a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function (a, b) {
                return this.off(a, null, b)
            },
            delegate: function (a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function (a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var Eb = ea.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ea.parseJSON = function (b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = ea.trim(b + "");
            return e && !ea.trim(e.replace(Gb, function (a, b, e, f) {
                return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
            })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
        }, ea.parseXML = function (b) {
            var c, d;
            if (!b || "string" != typeof b) return null;
            try {
                a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
            } catch (e) {
                c = void 0
            }
            return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
        };
        var Hb, Ib, Jb = /#.*$/,
            Kb = /([?&])_=[^&]*/,
            Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nb = /^(?:GET|HEAD)$/,
            Ob = /^\/\//,
            Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Qb = {},
            Rb = {},
            Sb = "*/".concat("*");
        try {
            Ib = location.href
        } catch (Tb) {
            Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
        }
        Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ib,
                type: "GET",
                isLocal: Mb.test(Hb[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Sb,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ea.parseJSON,
                    "text xml": ea.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (a, b) {
                return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
            },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function (a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                    o = ea.Deferred(),
                    p = ea.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function (a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function () {
                            return 2 === t ? g : null
                        },
                        setRequestHeader: function (a, b) {
                            var c = a.toLowerCase();
                            return t || (a = s[c] = s[c] || a, r[a] = b), this
                        },
                        overrideMimeType: function (a) {
                            return t || (l.mimeType = a), this
                        },
                        statusCode: function (a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function (a) {
                            var b = a || u;
                            return j && j.abort(b), c(0, b), this
                        }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
                i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) v[e](l[e]);
                if (j = O(Rb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
                        v.abort("timeout")
                    }, l.timeout));
                    try {
                        t = 1, j.send(r, c)
                    } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function (a, b, c) {
                return ea.get(a, b, c, "json")
            },
            getScript: function (a, b) {
                return ea.get(a, void 0, b, "script")
            }
        }), ea.each(["get", "post"], function (a, b) {
            ea[b] = function (a, c, d, e) {
                return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }), ea._evalUrl = function (a) {
            return ea.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, ea.fn.extend({
            wrapAll: function (a) {
                if (ea.isFunction(a)) return this.each(function (b) {
                    ea(this).wrapAll(a.call(this, b))
                });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                return this.each(ea.isFunction(a) ? function (b) {
                    ea(this).wrapInner(a.call(this, b))
                } : function () {
                    var b = ea(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                var b = ea.isFunction(a);
                return this.each(function (c) {
                    ea(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ea.expr.filters.hidden = function (a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
        }, ea.expr.filters.visible = function (a) {
            return !ea.expr.filters.hidden(a)
        };
        var Ub = /%20/g,
            Vb = /\[\]$/,
            Wb = /\r?\n/g,
            Xb = /^(?:submit|button|image|reset|file)$/i,
            Yb = /^(?:input|select|textarea|keygen)/i;
        ea.param = function (a, b) {
            var c, d = [],
                e = function (a, b) {
                    b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                };
            if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function () {
                e(this.name, this.value)
            });
            else
                for (c in a) S(c, a[c], b, e);
            return d.join("&").replace(Ub, "+")
        }, ea.fn.extend({
            serialize: function () {
                return ea.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var a = ea.prop(this, "elements");
                    return a ? ea.makeArray(a) : this
                }).filter(function () {
                    var a = this.type;
                    return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a))
                }).map(function (a, b) {
                    var c = ea(this).val();
                    return null == c ? null : ea.isArray(c) ? ea.map(c, function (a) {
                        return {
                            name: b.name,
                            value: a.replace(Wb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(Wb, "\r\n")
                    }
                }).get()
            }
        }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
        } : T;
        var Zb = 0,
            $b = {},
            _b = ea.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function () {
            for (var a in $b) $b[a](void 0, !0)
        }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function (a) {
            if (!a.crossDomain || ca.cors) {
                var b;
                return {
                    send: function (c, d) {
                        var e, f = a.xhr(),
                            g = ++Zb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                            for (e in a.xhrFields) f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function (c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try {
                                        i = f.statusText
                                    } catch (k) {
                                        i = ""
                                    }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                } j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                    },
                    abort: function () {
                        b && b(void 0, !0)
                    }
                }
            }
        }), ea.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function (a) {
                    return ea.globalEval(a), a
                }
            }
        }), ea.ajaxPrefilter("script", function (a) {
            void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
        }), ea.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var b, c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function (d, e) {
                        b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function () {
                        b && b.onload(void 0, !0)
                    }
                }
            }
        });
        var ac = [],
            bc = /(=)\?(?=&|$)|\?\?/;
        ea.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
                var a = ac.pop() || ea.expando + "_" + Eb++;
                return this[a] = !0, a
            }
        }), ea.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || ea.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
        }), ea.parseHTML = function (a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || oa;
            var d = la.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
        };
        var cc = ea.fn.load;
        ea.fn.load = function (a, b, c) {
            if ("string" != typeof a && cc) return cc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
                url: a,
                type: f,
                dataType: "html",
                data: b
            }).done(function (a) {
                e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
            }).complete(c && function (a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
        }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
            ea.fn[b] = function (a) {
                return this.on(b, a)
            }
        }), ea.expr.filters.animated = function (a) {
            return ea.grep(ea.timers, function (b) {
                return a === b.elem
            }).length
        };
        var dc = a.document.documentElement;
        ea.offset = {
            setOffset: function (a, b, c) {
                var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                    l = ea(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, ea.fn.extend({
            offset: function (a) {
                if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                    ea.offset.setOffset(this, a, b)
                });
                var b, c, d = {
                        top: 0,
                        left: 0
                    },
                    e = this[0],
                    f = e && e.ownerDocument;
                return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d) : void 0
            },
            position: function () {
                if (this[0]) {
                    var a, b, c = {
                            top: 0,
                            left: 0
                        },
                        d = this[0];
                    return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
                        top: b.top - c.top - ea.css(d, "marginTop", !0),
                        left: b.left - c.left - ea.css(d, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
                    return a || dc
                })
            }
        }), ea.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function (d) {
                return Da(this, function (a, d, e) {
                    var f = V(a);
                    return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
                }, a, d, arguments.length, null)
            }
        }), ea.each(["top", "left"], function (a, b) {
            ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
                return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
            })
        }), ea.each({
            Height: "height",
            Width: "width"
        }, function (a, b) {
            ea.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function (c, d) {
                ea.fn[d] = function (d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(this, function (b, c, d) {
                        var e;
                        return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }), ea.fn.size = function () {
            return this.length
        }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ea
        });
        var ec = a.jQuery,
            fc = a.$;
        return ea.noConflict = function (b) {
            return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea
        }, typeof b === xa && (a.jQuery = a.$ = ea), ea
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
    "use strict";

    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }
    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f)
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), + function (a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }
    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d) return;
            var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;
            if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth,
            j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }
        var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;
        var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {
            width: e.right - e.left,
            height: e.bottom - e.top
        }));
        var f = d ? {
                top: 0,
                left: 0
            } : b.offset(),
            g = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            },
            h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return e;
        var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }
    var c = '[data-dismiss="alert"]',
        d = function (b) {
            a(b).on("click", c, this.close)
        };
    d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }
        var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }
    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                }),
                g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: b[0]
                    }), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }
        var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
    "use strict";

    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = {
                    relatedTarget: this
                };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }
    var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function (b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery),
function () {
    var a = this,
        b = a._,
        c = {},
        d = Array.prototype,
        e = Object.prototype,
        f = Function.prototype,
        g = d.push,
        h = d.slice,
        i = d.concat,
        j = e.toString,
        k = e.hasOwnProperty,
        l = d.forEach,
        m = d.map,
        n = d.reduce,
        o = d.reduceRight,
        p = d.filter,
        q = d.every,
        r = d.some,
        s = d.indexOf,
        t = d.lastIndexOf,
        u = Array.isArray,
        v = Object.keys,
        w = f.bind,
        x = function (a) {
            return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.3";
    var y = x.each = x.forEach = function (a, b, d) {
        if (null != a)
            if (l && a.forEach === l) a.forEach(b, d);
            else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++)
                if (b.call(d, a[e], e, a) === c) return
        } else
            for (var g in a)
                if (x.has(a, g) && b.call(d, a[g], g, a) === c) return
    };
    x.map = x.collect = function (a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function (a, e, f) {
            d[d.length] = b.call(c, a, e, f)
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function (a, f, g) {
                e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
            }), !e) throw new TypeError(z);
        return c
    }, x.reduceRight = x.foldr = function (a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a, function (h, i, j) {
                i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
            }), !e) throw new TypeError(z);
        return c
    }, x.find = x.detect = function (a, b, c) {
        var d;
        return A(a, function (a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }), d
    }, x.filter = x.select = function (a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function (a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a)
        }), d)
    }, x.reject = function (a, b, c) {
        return x.filter(a, function (a, d, e) {
            return !b.call(c, a, d, e)
        }, c)
    }, x.every = x.all = function (a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function (a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function (a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function (a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0
        }), !!e)
    };
    x.contains = x.include = function (a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function (a) {
            return a === b
        })
    }, x.invoke = function (a, b) {
        var c = h.call(arguments, 2);
        return x.map(a, function (a) {
            return (x.isFunction(b) ? b : a[b]).apply(a, c)
        })
    }, x.pluck = function (a, b) {
        return x.map(a, function (a) {
            return a[b]
        })
    }, x.where = function (a, b) {
        return x.isEmpty(b) ? [] : x.filter(a, function (a) {
            for (var c in b)
                if (b[c] !== a[c]) return !1;
            return !0
        })
    }, x.max = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1 / 0;
        var d = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.min = function (a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1 / 0;
        var d = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return y(a, function (a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            d.computed > g && (d = {
                value: a,
                computed: g
            })
        }), d.value
    }, x.shuffle = function (a) {
        var b, c = 0,
            d = [];
        return y(a, function (a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a
        }), d
    };
    var B = function (a) {
        return x.isFunction(a) ? a : function (b) {
            return b[a]
        }
    };
    x.sortBy = function (a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function (a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            }
        }).sort(function (a, b) {
            var c = a.criteria,
                d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1
            }
            return a.index < b.index ? -1 : 1
        }), "value")
    };
    var C = function (a, b, c, d) {
        var e = {},
            f = B(b || x.identity);
        return y(a, function (b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b)
        }), e
    };
    x.groupBy = function (a, b, c) {
        return C(a, b, c, function (a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c)
        })
    }, x.countBy = function (a, b, c) {
        return C(a, b, c, function (a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++
        })
    }, x.sortedIndex = function (a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            e > c.call(d, a[h]) ? f = h + 1 : g = h
        }
        return f
    }, x.toArray = function (a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    }, x.size = function (a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
    }, x.first = x.head = x.take = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
    }, x.initial = function (a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    }, x.last = function (a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    }, x.rest = x.tail = x.drop = function (a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    }, x.compact = function (a) {
        return x.filter(a, x.identity)
    };
    var D = function (a, b, c) {
        return y(a, function (a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c
    };
    x.flatten = function (a, b) {
        return D(a, b, [])
    }, x.without = function (a) {
        return x.difference(a, h.call(arguments, 1))
    }, x.uniq = x.unique = function (a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a,
            f = [],
            g = [];
        return y(e, function (c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }), f
    }, x.union = function () {
        return x.uniq(i.apply(d, arguments))
    }, x.intersection = function (a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function (a) {
            return x.every(b, function (b) {
                return x.indexOf(b, a) >= 0
            })
        })
    }, x.difference = function (a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function (a) {
            return !x.contains(b, a)
        })
    }, x.zip = function () {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
        return c
    }, x.object = function (a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    }, x.indexOf = function (a, b, c) {
        if (null == a) return -1;
        var d = 0,
            e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (; e > d; d++)
            if (a[d] === b) return d;
        return -1
    }, x.lastIndexOf = function (a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--;)
            if (a[e] === b) return e;
        return -1
    }, x.range = function (a, b, c) {
        1 >= arguments.length && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); d > e;) f[e++] = a, a += c;
        return f
    };
    var E = function () {};
    x.bind = function (a, b) {
        var c, d;
        if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError;
        return c = h.call(arguments, 2), d = function () {
            if (!(this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f : e
        }
    }, x.bindAll = function (a) {
        var b = h.call(arguments, 1);
        return 0 == b.length && (b = x.functions(a)), y(b, function (b) {
            a[b] = x.bind(a[b], a)
        }), a
    }, x.memoize = function (a, b) {
        var c = {};
        return b || (b = x.identity),
            function () {
                var d = b.apply(this, arguments);
                return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
            }
    }, x.delay = function (a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function () {
            return a.apply(null, c)
        }, b)
    }, x.defer = function (a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    }, x.throttle = function (a, b) {
        var c, d, e, f, g = 0,
            h = function () {
                g = new Date, e = null, f = a.apply(c, d)
            };
        return function () {
            var i = new Date,
                j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
        }
    }, x.debounce = function (a, b, c) {
        var d, e;
        return function () {
            var f = this,
                g = arguments,
                h = function () {
                    d = null, c || (e = a.apply(f, g))
                },
                i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
        }
    }, x.once = function (a) {
        var b, c = !1;
        return function () {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    }, x.wrap = function (a, b) {
        return function () {
            var c = [a];
            return g.apply(c, arguments), b.apply(this, c)
        }
    }, x.compose = function () {
        var a = arguments;
        return function () {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    }, x.after = function (a, b) {
        return 0 >= a ? b() : function () {
            return 1 > --a ? b.apply(this, arguments) : void 0
        }
    }, x.keys = v || function (a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && (b[b.length] = c);
        return b
    }, x.values = function (a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push(a[c]);
        return b
    }, x.pairs = function (a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push([c, a[c]]);
        return b
    }, x.invert = function (a) {
        var b = {};
        for (var c in a) x.has(a, c) && (b[a[c]] = c);
        return b
    }, x.functions = x.methods = function (a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort()
    }, x.extend = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)
                for (var c in b) a[c] = b[c]
        }), a
    }, x.pick = function (a) {
        var b = {},
            c = i.apply(d, h.call(arguments, 1));
        return y(c, function (c) {
            c in a && (b[c] = a[c])
        }), b
    }, x.omit = function (a) {
        var b = {},
            c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b
    }, x.defaults = function (a) {
        return y(h.call(arguments, 1), function (b) {
            if (b)
                for (var c in b) null == a[c] && (a[c] = b[c])
        }), a
    }, x.clone = function (a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
    }, x.tap = function (a, b) {
        return b(a), a
    };
    var F = function (a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
            case "[object String]":
                return a == b + "";
            case "[object Number]":
                return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
            case "[object Date]":
            case "[object Boolean]":
                return +a == +b;
            case "[object RegExp]":
                return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--;)
            if (c[f] == a) return d[f] == b;
        c.push(a), d.push(b);
        var g = 0,
            h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length)
                for (; g-- && (h = F(a[g], b[g], c, d)););
        } else {
            var i = a.constructor,
                k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
            for (var l in a)
                if (x.has(a, l) && (g++, !(h = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (h) {
                for (l in b)
                    if (x.has(b, l) && !g--) break;
                h = !g
            }
        }
        return c.pop(), d.pop(), h
    };
    x.isEqual = function (a, b) {
        return F(a, b, [], [])
    }, x.isEmpty = function (a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a)
            if (x.has(a, b)) return !1;
        return !0
    }, x.isElement = function (a) {
        return !(!a || 1 !== a.nodeType)
    }, x.isArray = u || function (a) {
        return "[object Array]" == j.call(a)
    }, x.isObject = function (a) {
        return a === Object(a)
    }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (a) {
        x["is" + a] = function (b) {
            return j.call(b) == "[object " + a + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function (a) {
        return !(!a || !x.has(a, "callee"))
    }), x.isFunction = function (a) {
        return "function" == typeof a
    }, x.isFinite = function (a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    }, x.isNaN = function (a) {
        return x.isNumber(a) && a != +a
    }, x.isBoolean = function (a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    }, x.isNull = function (a) {
        return null === a
    }, x.isUndefined = function (a) {
        return void 0 === a
    }, x.has = function (a, b) {
        return k.call(a, b)
    }, x.noConflict = function () {
        return a._ = b, this
    }, x.identity = function (a) {
        return a
    }, x.times = function (a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d
    }, x.random = function (a, b) {
        return null == b && (b = a, a = 0), a + (0 | Math.random() * (b - a + 1))
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"], function (a) {
        x[a] = function (b) {
            return null == b ? "" : ("" + b).replace(H[a], function (b) {
                return G[a][b]
            })
        }
    }), x.result = function (a, b) {
        if (null == a) return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    }, x.mixin = function (a) {
        y(x.functions(a), function (b) {
            var c = x[b] = a[b];
            x.prototype[b] = function () {
                var a = [this._wrapped];
                return g.apply(a, arguments), M.call(this, c.apply(x, a))
            }
        })
    };
    var I = 0;
    x.uniqueId = function (a) {
        var b = "" + ++I;
        return a ? a + b : b
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/,
        K = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function (a, b, c) {
        c = x.defaults({}, c, x.templateSettings);
        var d = RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"),
            e = 0,
            f = "__p+='";
        a.replace(d, function (b, c, d, g, h) {
            return f += a.slice(e, h).replace(L, function (a) {
                return "\\" + K[a]
            }), c && (f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), g && (f += "';\n" + g + "\n__p+='"), e = h + b.length, b
        }), f += "';\n", c.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
        try {
            var g = Function(c.variable || "obj", "_", f)
        } catch (h) {
            throw h.source = f, h
        }
        if (b) return g(b, x);
        var i = function (a) {
            return g.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + f + "}", i
    }, x.chain = function (a) {
        return x(a).chain()
    };
    var M = function (a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], M.call(this, c)
        }
    }), y(["concat", "join", "slice"], function (a) {
        var b = d[a];
        x.prototype[a] = function () {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }), x.extend(x.prototype, {
        chain: function () {
            return this._chain = !0, this
        },
        value: function () {
            return this._wrapped
        }
    })
}.call(this),
    function () {
        function a() {
            this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
        }
        a.prototype.diff_main = function (a, b, c, d) {
            if ("undefined" == typeof d && (d = 0 >= this.Diff_Timeout ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout), null == a || null == b) throw Error("Null input. (diff_main)");
            if (a == b) return a ? [
                [0, a]
            ] : [];
            "undefined" == typeof c && (c = !0);
            var e = c,
                f = this.diff_commonPrefix(a, b);
            c = a.substring(0, f), a = a.substring(f), b = b.substring(f);
            var f = this.diff_commonSuffix(a, b),
                g = a.substring(a.length - f);
            return a = a.substring(0, a.length - f), b = b.substring(0, b.length - f), a = this.diff_compute_(a, b, e, d), c && a.unshift([0, c]), g && a.push([0, g]), this.diff_cleanupMerge(a), a
        }, a.prototype.diff_compute_ = function (a, b, c, d) {
            if (!a) return [
                [1, b]
            ];
            if (!b) return [
                [-1, a]
            ];
            var e = a.length > b.length ? a : b,
                f = a.length > b.length ? b : a,
                g = e.indexOf(f);
            return -1 != g ? (c = [
                [1, e.substring(0, g)],
                [0, f],
                [1, e.substring(g + f.length)]
            ], a.length > b.length && (c[0][0] = c[2][0] = -1), c) : 1 == f.length ? [
                [-1, a],
                [1, b]
            ] : (e = this.diff_halfMatch_(a, b)) ? (f = e[0], a = e[1], g = e[2], b = e[3], e = e[4], f = this.diff_main(f, g, c, d), c = this.diff_main(a, b, c, d), f.concat([
                [0, e]
            ], c)) : c && 100 < a.length && 100 < b.length ? this.diff_lineMode_(a, b, d) : this.diff_bisect_(a, b, d)
        }, a.prototype.diff_lineMode_ = function (a, b, c) {
            var d = this.diff_linesToChars_(a, b);
            a = d.chars1, b = d.chars2, d = d.lineArray, a = this.diff_main(a, b, !1, c), this.diff_charsToLines_(a, d), this.diff_cleanupSemantic(a), a.push([0, ""]);
            for (var e = d = b = 0, f = "", g = ""; b < a.length;) {
                switch (a[b][0]) {
                    case 1:
                        e++, g += a[b][1];
                        break;
                    case -1:
                        d++, f += a[b][1];
                        break;
                    case 0:
                        if (d >= 1 && e >= 1) {
                            for (a.splice(b - d - e, d + e), b = b - d - e, d = this.diff_main(f, g, !1, c), e = d.length - 1; e >= 0; e--) a.splice(b, 0, d[e]);
                            b += d.length
                        }
                        d = e = 0, g = f = ""
                }
                b++
            }
            return a.pop(), a
        }, a.prototype.diff_bisect_ = function (a, b, c) {
            for (var d = a.length, e = b.length, f = Math.ceil((d + e) / 2), g = f, h = 2 * f, i = Array(h), j = Array(h), k = 0; h > k; k++) i[k] = -1, j[k] = -1;
            i[g + 1] = 0, j[g + 1] = 0;
            for (var k = d - e, l = 0 != k % 2, m = 0, n = 0, o = 0, p = 0, q = 0; f > q && !((new Date).getTime() > c); q++) {
                for (var r = -q + m; q - n >= r; r += 2) {
                    var s, t = g + r;
                    s = r == -q || r != q && i[t - 1] < i[t + 1] ? i[t + 1] : i[t - 1] + 1;
                    for (var u = s - r; d > s && e > u && a.charAt(s) == b.charAt(u);) s++, u++;
                    if (i[t] = s, s > d) n += 2;
                    else if (u > e) m += 2;
                    else if (l && (t = g + k - r, t >= 0 && h > t && -1 != j[t])) {
                        var v = d - j[t];
                        if (s >= v) return this.diff_bisectSplit_(a, b, s, u, c)
                    }
                }
                for (r = -q + o; q - p >= r; r += 2) {
                    for (t = g + r, v = r == -q || r != q && j[t - 1] < j[t + 1] ? j[t + 1] : j[t - 1] + 1, s = v - r; d > v && e > s && a.charAt(d - v - 1) == b.charAt(e - s - 1);) v++, s++;
                    if (j[t] = v, v > d) p += 2;
                    else if (s > e) o += 2;
                    else if (!l && (t = g + k - r, t >= 0 && h > t && -1 != i[t] && (s = i[t], u = g + s - t, v = d - v, s >= v))) return this.diff_bisectSplit_(a, b, s, u, c)
                }
            }
            return [
                [-1, a],
                [1, b]
            ]
        }, a.prototype.diff_bisectSplit_ = function (a, b, c, d, e) {
            var f = a.substring(0, c),
                g = b.substring(0, d);
            return a = a.substring(c), b = b.substring(d), f = this.diff_main(f, g, !1, e), e = this.diff_main(a, b, !1, e), f.concat(e)
        }, a.prototype.diff_linesToChars_ = function (a, b) {
            function c(a) {
                for (var b = "", c = 0, f = -1, g = d.length; f < a.length - 1;) {
                    f = a.indexOf("\n", c), -1 == f && (f = a.length - 1);
                    var h = a.substring(c, f + 1),
                        c = f + 1;
                    (e.hasOwnProperty ? e.hasOwnProperty(h) : void 0 !== e[h]) ? b += String.fromCharCode(e[h]): (b += String.fromCharCode(g), e[h] = g, d[g++] = h)
                }
                return b
            }
            var d = [],
                e = {};
            d[0] = "";
            var f = c(a),
                g = c(b);
            return {
                chars1: f,
                chars2: g,
                lineArray: d
            }
        }, a.prototype.diff_charsToLines_ = function (a, b) {
            for (var c = 0; c < a.length; c++) {
                for (var d = a[c][1], e = [], f = 0; f < d.length; f++) e[f] = b[d.charCodeAt(f)];
                a[c][1] = e.join("")
            }
        }, a.prototype.diff_commonPrefix = function (a, b) {
            if (!a || !b || a.charAt(0) != b.charAt(0)) return 0;
            for (var c = 0, d = Math.min(a.length, b.length), e = d, f = 0; e > c;) a.substring(f, e) == b.substring(f, e) ? f = c = e : d = e, e = Math.floor((d - c) / 2 + c);
            return e
        }, a.prototype.diff_commonSuffix = function (a, b) {
            if (!a || !b || a.charAt(a.length - 1) != b.charAt(b.length - 1)) return 0;
            for (var c = 0, d = Math.min(a.length, b.length), e = d, f = 0; e > c;) a.substring(a.length - e, a.length - f) == b.substring(b.length - e, b.length - f) ? f = c = e : d = e, e = Math.floor((d - c) / 2 + c);
            return e
        }, a.prototype.diff_commonOverlap_ = function (a, b) {
            var c = a.length,
                d = b.length;
            if (0 == c || 0 == d) return 0;
            if (c > d ? a = a.substring(c - d) : d > c && (b = b.substring(0, c)), c = Math.min(c, d), a == b) return c;
            for (var d = 0, e = 1;;) {
                var f = a.substring(c - e),
                    f = b.indexOf(f);
                if (-1 == f) return d;
                e += f, (0 == f || a.substring(c - e) == b.substring(0, e)) && (d = e, e++)
            }
        }, a.prototype.diff_halfMatch_ = function (a, b) {
            function c(a, b, c) {
                for (var d, e, f, h, i = a.substring(c, c + Math.floor(a.length / 4)), j = -1, k = ""; - 1 != (j = b.indexOf(i, j + 1));) {
                    var l = g.diff_commonPrefix(a.substring(c), b.substring(j)),
                        m = g.diff_commonSuffix(a.substring(0, c), b.substring(0, j));
                    k.length < m + l && (k = b.substring(j - m, j) + b.substring(j, j + l), d = a.substring(0, c - m), e = a.substring(c + l), f = b.substring(0, j - m), h = b.substring(j + l))
                }
                return 2 * k.length >= a.length ? [d, e, f, h, k] : null
            }
            if (0 >= this.Diff_Timeout) return null;
            var d = a.length > b.length ? a : b,
                e = a.length > b.length ? b : a;
            if (4 > d.length || 2 * e.length < d.length) return null;
            var f, g = this,
                h = c(d, e, Math.ceil(d.length / 4)),
                d = c(d, e, Math.ceil(d.length / 2));
            if (!h && !d) return null;
            f = d ? h && h[4].length > d[4].length ? h : d : h;
            var i;
            return a.length > b.length ? (h = f[0], d = f[1], e = f[2], i = f[3]) : (e = f[0], i = f[1], h = f[2], d = f[3]), f = f[4], [h, d, e, i, f]
        }, a.prototype.diff_cleanupSemantic = function (a) {
            for (var b = !1, c = [], d = 0, e = null, f = 0, g = 0, h = 0, i = 0, j = 0; f < a.length;) 0 == a[f][0] ? (c[d++] = f, g = i, h = j, j = i = 0, e = a[f][1]) : (1 == a[f][0] ? i += a[f][1].length : j += a[f][1].length, e && e.length <= Math.max(g, h) && e.length <= Math.max(i, j) && (a.splice(c[d - 1], 0, [-1, e]), a[c[d - 1] + 1][0] = 1, d--, d--, f = d > 0 ? c[d - 1] : -1, j = i = h = g = 0, e = null, b = !0)), f++;
            for (b && this.diff_cleanupMerge(a), this.diff_cleanupSemanticLossless(a), f = 1; f < a.length;) - 1 == a[f - 1][0] && 1 == a[f][0] && (b = a[f - 1][1], c = a[f][1], d = this.diff_commonOverlap_(b, c), e = this.diff_commonOverlap_(c, b), d >= e ? (d >= b.length / 2 || d >= c.length / 2) && (a.splice(f, 0, [0, c.substring(0, d)]), a[f - 1][1] = b.substring(0, b.length - d), a[f + 1][1] = c.substring(d), f++) : (e >= b.length / 2 || e >= c.length / 2) && (a.splice(f, 0, [0, b.substring(0, e)]), a[f - 1][0] = 1, a[f - 1][1] = c.substring(0, c.length - e), a[f + 1][0] = -1, a[f + 1][1] = b.substring(e), f++), f++), f++
        }, a.prototype.diff_cleanupSemanticLossless = function (b) {
            function c(b, c) {
                if (!b || !c) return 6;
                var d = b.charAt(b.length - 1),
                    e = c.charAt(0),
                    f = d.match(a.nonAlphaNumericRegex_),
                    g = e.match(a.nonAlphaNumericRegex_),
                    h = f && d.match(a.whitespaceRegex_),
                    i = g && e.match(a.whitespaceRegex_),
                    d = h && d.match(a.linebreakRegex_),
                    e = i && e.match(a.linebreakRegex_),
                    j = d && b.match(a.blanklineEndRegex_),
                    k = e && c.match(a.blanklineStartRegex_);
                return j || k ? 5 : d || e ? 4 : f && !h && i ? 3 : h || i ? 2 : f || g ? 1 : 0
            }
            for (var d = 1; d < b.length - 1;) {
                if (0 == b[d - 1][0] && 0 == b[d + 1][0]) {
                    var e = b[d - 1][1],
                        f = b[d][1],
                        g = b[d + 1][1],
                        h = this.diff_commonSuffix(e, f);
                    if (h) var i = f.substring(f.length - h),
                        e = e.substring(0, e.length - h),
                        f = i + f.substring(0, f.length - h),
                        g = i + g;
                    for (var h = e, i = f, j = g, k = c(e, f) + c(f, g); f.charAt(0) === g.charAt(0);) {
                        var e = e + f.charAt(0),
                            f = f.substring(1) + g.charAt(0),
                            g = g.substring(1),
                            l = c(e, f) + c(f, g);
                        l >= k && (k = l, h = e, i = f, j = g)
                    }
                    b[d - 1][1] != h && (h ? b[d - 1][1] = h : (b.splice(d - 1, 1), d--), b[d][1] = i, j ? b[d + 1][1] = j : (b.splice(d + 1, 1), d--))
                }
                d++
            }
        }, a.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, a.whitespaceRegex_ = /\s/, a.linebreakRegex_ = /[\r\n]/, a.blanklineEndRegex_ = /\n\r?\n$/, a.blanklineStartRegex_ = /^\r?\n\r?\n/, a.prototype.diff_cleanupEfficiency = function (a) {
            for (var b = !1, c = [], d = 0, e = null, f = 0, g = !1, h = !1, i = !1, j = !1; f < a.length;) 0 == a[f][0] ? (a[f][1].length < this.Diff_EditCost && (i || j) ? (c[d++] = f, g = i, h = j, e = a[f][1]) : (d = 0, e = null), i = j = !1) : (-1 == a[f][0] ? j = !0 : i = !0, e && (g && h && i && j || e.length < this.Diff_EditCost / 2 && 3 == g + h + i + j) && (a.splice(c[d - 1], 0, [-1, e]), a[c[d - 1] + 1][0] = 1, d--, e = null, g && h ? (i = j = !0, d = 0) : (d--, f = d > 0 ? c[d - 1] : -1, i = j = !1), b = !0)), f++;
            b && this.diff_cleanupMerge(a)
        }, a.prototype.diff_cleanupMerge = function (a) {
            a.push([0, ""]);
            for (var b, c = 0, d = 0, e = 0, f = "", g = ""; c < a.length;) switch (a[c][0]) {
                case 1:
                    e++, g += a[c][1], c++;
                    break;
                case -1:
                    d++, f += a[c][1], c++;
                    break;
                case 0:
                    d + e > 1 ? (0 !== d && 0 !== e && (b = this.diff_commonPrefix(g, f), 0 !== b && (c - d - e > 0 && 0 == a[c - d - e - 1][0] ? a[c - d - e - 1][1] += g.substring(0, b) : (a.splice(0, 0, [0, g.substring(0, b)]), c++), g = g.substring(b), f = f.substring(b)), b = this.diff_commonSuffix(g, f), 0 !== b && (a[c][1] = g.substring(g.length - b) + a[c][1], g = g.substring(0, g.length - b), f = f.substring(0, f.length - b))), 0 === d ? a.splice(c - e, d + e, [1, g]) : 0 === e ? a.splice(c - d, d + e, [-1, f]) : a.splice(c - d - e, d + e, [-1, f], [1, g]), c = c - d - e + (d ? 1 : 0) + (e ? 1 : 0) + 1) : 0 !== c && 0 == a[c - 1][0] ? (a[c - 1][1] += a[c][1], a.splice(c, 1)) : c++, d = e = 0, g = f = ""
            }
            for ("" === a[a.length - 1][1] && a.pop(), d = !1, c = 1; c < a.length - 1;) 0 == a[c - 1][0] && 0 == a[c + 1][0] && (a[c][1].substring(a[c][1].length - a[c - 1][1].length) == a[c - 1][1] ? (a[c][1] = a[c - 1][1] + a[c][1].substring(0, a[c][1].length - a[c - 1][1].length), a[c + 1][1] = a[c - 1][1] + a[c + 1][1], a.splice(c - 1, 1), d = !0) : a[c][1].substring(0, a[c + 1][1].length) == a[c + 1][1] && (a[c - 1][1] += a[c + 1][1], a[c][1] = a[c][1].substring(a[c + 1][1].length) + a[c + 1][1], a.splice(c + 1, 1), d = !0)), c++;
            d && this.diff_cleanupMerge(a)
        }, a.prototype.diff_xIndex = function (a, b) {
            var c, d = 0,
                e = 0,
                f = 0,
                g = 0;
            for (c = 0; c < a.length && (1 !== a[c][0] && (d += a[c][1].length), -1 !== a[c][0] && (e += a[c][1].length), !(d > b)); c++) f = d, g = e;
            return a.length != c && -1 === a[c][0] ? g : g + (b - f)
        }, a.prototype.diff_prettyHtml = function (a) {
            for (var b = [], c = /&/g, d = /</g, e = />/g, f = /\n/g, g = 0; g < a.length; g++) {
                var h = a[g][0],
                    i = a[g][1],
                    i = i.replace(c, "&amp;").replace(d, "&lt;").replace(e, "&gt;").replace(f, "&para;<br>");
                switch (h) {
                    case 1:
                        b[g] = '<ins style="background:#e6ffe6;">' + i + "</ins>";
                        break;
                    case -1:
                        b[g] = '<del style="background:#ffe6e6;">' + i + "</del>";
                        break;
                    case 0:
                        b[g] = "<span>" + i + "</span>"
                }
            }
            return b.join("")
        }, a.prototype.diff_text1 = function (a) {
            for (var b = [], c = 0; c < a.length; c++) 1 !== a[c][0] && (b[c] = a[c][1]);
            return b.join("")
        }, a.prototype.diff_text2 = function (a) {
            for (var b = [], c = 0; c < a.length; c++) - 1 !== a[c][0] && (b[c] = a[c][1]);
            return b.join("")
        }, a.prototype.diff_levenshtein = function (a) {
            for (var b = 0, c = 0, d = 0, e = 0; e < a.length; e++) {
                var f = a[e][0],
                    g = a[e][1];
                switch (f) {
                    case 1:
                        c += g.length;
                        break;
                    case -1:
                        d += g.length;
                        break;
                    case 0:
                        b += Math.max(c, d), d = c = 0
                }
            }
            return b += Math.max(c, d)
        }, a.prototype.diff_toDelta = function (a) {
            for (var b = [], c = 0; c < a.length; c++) switch (a[c][0]) {
                case 1:
                    b[c] = "+" + encodeURI(a[c][1]);
                    break;
                case -1:
                    b[c] = "-" + a[c][1].length;
                    break;
                case 0:
                    b[c] = "=" + a[c][1].length
            }
            return b.join("	").replace(/%20/g, " ")
        }, a.prototype.diff_fromDelta = function (a, b) {
            for (var c = [], d = 0, e = 0, f = b.split(/\t/g), g = 0; g < f.length; g++) {
                var h = f[g].substring(1);
                switch (f[g].charAt(0)) {
                    case "+":
                        try {
                            c[d++] = [1, decodeURI(h)]
                        } catch (i) {
                            throw Error("Illegal escape in diff_fromDelta: " + h)
                        }
                        break;
                    case "-":
                    case "=":
                        var j = parseInt(h, 10);
                        if (isNaN(j) || 0 > j) throw Error("Invalid number in diff_fromDelta: " + h);
                        h = a.substring(e, e += j), "=" == f[g].charAt(0) ? c[d++] = [0, h] : c[d++] = [-1, h];
                        break;
                    default:
                        if (f[g]) throw Error("Invalid diff operation in diff_fromDelta: " + f[g])
                }
            }
            if (e != a.length) throw Error("Delta length (" + e + ") does not equal source text length (" + a.length + ").");
            return c
        }, a.prototype.match_main = function (a, b, c) {
            if (null == a || null == b || null == c) throw Error("Null input. (match_main)");
            return c = Math.max(0, Math.min(c, a.length)), a == b ? 0 : a.length ? a.substring(c, c + b.length) == b ? c : this.match_bitap_(a, b, c) : -1
        }, a.prototype.match_bitap_ = function (a, b, c) {
            function d(a, d) {
                var e = a / b.length,
                    g = Math.abs(c - d);
                return f.Match_Distance ? e + g / f.Match_Distance : g ? 1 : e
            }
            if (b.length > this.Match_MaxBits) throw Error("Pattern too long for this browser.");
            var e = this.match_alphabet_(b),
                f = this,
                g = this.Match_Threshold,
                h = a.indexOf(b, c); - 1 != h && (g = Math.min(d(0, h), g), h = a.lastIndexOf(b, c + b.length), -1 != h && (g = Math.min(d(0, h), g)));
            for (var i, j, k, l = 1 << b.length - 1, h = -1, m = b.length + a.length, n = 0; n < b.length; n++) {
                for (i = 0, j = m; j > i;) d(n, c + j) <= g ? i = j : m = j, j = Math.floor((m - i) / 2 + i);
                m = j, i = Math.max(1, c - j + 1);
                var o = Math.min(c + j, a.length) + b.length;
                for (j = Array(o + 2), j[o + 1] = (1 << n) - 1; o >= i; o--) {
                    var p = e[a.charAt(o - 1)];
                    if (j[o] = 0 === n ? (j[o + 1] << 1 | 1) & p : (j[o + 1] << 1 | 1) & p | ((k[o + 1] | k[o]) << 1 | 1) | k[o + 1], j[o] & l && (p = d(n, o - 1), g >= p)) {
                        if (g = p, h = o - 1, !(h > c)) break;
                        i = Math.max(1, 2 * c - h)
                    }
                }
                if (d(n + 1, c) > g) break;
                k = j
            }
            return h
        }, a.prototype.match_alphabet_ = function (a) {
            for (var b = {}, c = 0; c < a.length; c++) b[a.charAt(c)] = 0;
            for (c = 0; c < a.length; c++) b[a.charAt(c)] |= 1 << a.length - c - 1;
            return b
        }, a.prototype.patch_addContext_ = function (a, b) {
            if (0 != b.length) {
                for (var c = b.substring(a.start2, a.start2 + a.length1), d = 0; b.indexOf(c) != b.lastIndexOf(c) && c.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) d += this.Patch_Margin, c = b.substring(a.start2 - d, a.start2 + a.length1 + d);
                d += this.Patch_Margin, (c = b.substring(a.start2 - d, a.start2)) && a.diffs.unshift([0, c]), (d = b.substring(a.start2 + a.length1, a.start2 + a.length1 + d)) && a.diffs.push([0, d]), a.start1 -= c.length, a.start2 -= c.length, a.length1 += c.length + d.length, a.length2 += c.length + d.length
            }
        }, a.prototype.patch_make = function (b, c, d) {
            var e;
            if ("string" == typeof b && "string" == typeof c && "undefined" == typeof d) e = b, c = this.diff_main(e, c, !0), 2 < c.length && (this.diff_cleanupSemantic(c), this.diff_cleanupEfficiency(c));
            else if (b && "object" == typeof b && "undefined" == typeof c && "undefined" == typeof d) c = b, e = this.diff_text1(c);
            else if ("string" == typeof b && c && "object" == typeof c && "undefined" == typeof d) e = b;
            else {
                if ("string" != typeof b || "string" != typeof c || !d || "object" != typeof d) throw Error("Unknown call format to patch_make.");
                e = b, c = d
            }
            if (0 === c.length) return [];
            d = [], b = new a.patch_obj;
            for (var f = 0, g = 0, h = 0, i = e, j = 0; j < c.length; j++) {
                var k = c[j][0],
                    l = c[j][1];
                switch (!f && 0 !== k && (b.start1 = g, b.start2 = h), k) {
                    case 1:
                        b.diffs[f++] = c[j], b.length2 += l.length, e = e.substring(0, h) + l + e.substring(h);
                        break;
                    case -1:
                        b.length1 += l.length, b.diffs[f++] = c[j], e = e.substring(0, h) + e.substring(h + l.length);
                        break;
                    case 0:
                        l.length <= 2 * this.Patch_Margin && f && c.length != j + 1 ? (b.diffs[f++] = c[j], b.length1 += l.length, b.length2 += l.length) : l.length >= 2 * this.Patch_Margin && f && (this.patch_addContext_(b, i), d.push(b), b = new a.patch_obj, f = 0, i = e, g = h)
                }
                1 !== k && (g += l.length), -1 !== k && (h += l.length)
            }
            return f && (this.patch_addContext_(b, i), d.push(b)), d
        }, a.prototype.patch_deepCopy = function (b) {
            for (var c = [], d = 0; d < b.length; d++) {
                var e = b[d],
                    f = new a.patch_obj;
                f.diffs = [];
                for (var g = 0; g < e.diffs.length; g++) f.diffs[g] = e.diffs[g].slice();
                f.start1 = e.start1, f.start2 = e.start2, f.length1 = e.length1, f.length2 = e.length2, c[d] = f
            }
            return c
        }, a.prototype.patch_apply = function (a, b) {
            if (0 == a.length) return [b, []];
            a = this.patch_deepCopy(a);
            var c = this.patch_addPadding(a);
            b = c + b + c, this.patch_splitMax(a);
            for (var d = 0, e = [], f = 0; f < a.length; f++) {
                var g, h = a[f].start2 + d,
                    i = this.diff_text1(a[f].diffs),
                    j = -1;
                if (i.length > this.Match_MaxBits ? (g = this.match_main(b, i.substring(0, this.Match_MaxBits), h), -1 != g && (j = this.match_main(b, i.substring(i.length - this.Match_MaxBits), h + i.length - this.Match_MaxBits), -1 == j || g >= j) && (g = -1)) : g = this.match_main(b, i, h), -1 == g) e[f] = !1, d -= a[f].length2 - a[f].length1;
                else if (e[f] = !0, d = g - h, h = -1 == j ? b.substring(g, g + i.length) : b.substring(g, j + this.Match_MaxBits), i == h) b = b.substring(0, g) + this.diff_text2(a[f].diffs) + b.substring(g + i.length);
                else if (h = this.diff_main(i, h, !1), i.length > this.Match_MaxBits && this.diff_levenshtein(h) / i.length > this.Patch_DeleteThreshold) e[f] = !1;
                else {
                    this.diff_cleanupSemanticLossless(h);
                    for (var k, i = 0, j = 0; j < a[f].diffs.length; j++) {
                        var l = a[f].diffs[j];
                        0 !== l[0] && (k = this.diff_xIndex(h, i)), 1 === l[0] ? b = b.substring(0, g + k) + l[1] + b.substring(g + k) : -1 === l[0] && (b = b.substring(0, g + k) + b.substring(g + this.diff_xIndex(h, i + l[1].length))), -1 !== l[0] && (i += l[1].length)
                    }
                }
            }
            return b = b.substring(c.length, b.length - c.length), [b, e]
        }, a.prototype.patch_addPadding = function (a) {
            for (var b = this.Patch_Margin, c = "", d = 1; b >= d; d++) c += String.fromCharCode(d);
            for (d = 0; d < a.length; d++) a[d].start1 += b, a[d].start2 += b;
            var d = a[0],
                e = d.diffs;
            if (0 == e.length || 0 != e[0][0]) e.unshift([0, c]), d.start1 -= b, d.start2 -= b, d.length1 += b, d.length2 += b;
            else if (b > e[0][1].length) {
                var f = b - e[0][1].length;
                e[0][1] = c.substring(e[0][1].length) + e[0][1], d.start1 -= f, d.start2 -= f, d.length1 += f, d.length2 += f
            }
            return d = a[a.length - 1], e = d.diffs, 0 == e.length || 0 != e[e.length - 1][0] ? (e.push([0, c]), d.length1 += b, d.length2 += b) : b > e[e.length - 1][1].length && (f = b - e[e.length - 1][1].length, e[e.length - 1][1] += c.substring(0, f), d.length1 += f, d.length2 += f), c
        }, a.prototype.patch_splitMax = function (b) {
            for (var c = this.Match_MaxBits, d = 0; d < b.length; d++)
                if (!(b[d].length1 <= c)) {
                    var e = b[d];
                    b.splice(d--, 1);
                    for (var f = e.start1, g = e.start2, h = ""; 0 !== e.diffs.length;) {
                        var i = new a.patch_obj,
                            j = !0;
                        for (i.start1 = f - h.length, i.start2 = g - h.length, "" !== h && (i.length1 = i.length2 = h.length, i.diffs.push([0, h])); 0 !== e.diffs.length && i.length1 < c - this.Patch_Margin;) {
                            var h = e.diffs[0][0],
                                k = e.diffs[0][1];
                            1 === h ? (i.length2 += k.length, g += k.length, i.diffs.push(e.diffs.shift()), j = !1) : -1 === h && 1 == i.diffs.length && 0 == i.diffs[0][0] && k.length > 2 * c ? (i.length1 += k.length, f += k.length, j = !1, i.diffs.push([h, k]), e.diffs.shift()) : (k = k.substring(0, c - i.length1 - this.Patch_Margin), i.length1 += k.length, f += k.length, 0 === h ? (i.length2 += k.length, g += k.length) : j = !1, i.diffs.push([h, k]), k == e.diffs[0][1] ? e.diffs.shift() : e.diffs[0][1] = e.diffs[0][1].substring(k.length))
                        }
                        h = this.diff_text2(i.diffs), h = h.substring(h.length - this.Patch_Margin), k = this.diff_text1(e.diffs).substring(0, this.Patch_Margin), "" !== k && (i.length1 += k.length, i.length2 += k.length, 0 !== i.diffs.length && 0 === i.diffs[i.diffs.length - 1][0] ? i.diffs[i.diffs.length - 1][1] += k : i.diffs.push([0, k])), j || b.splice(++d, 0, i)
                    }
                }
        }, a.prototype.patch_toText = function (a) {
            for (var b = [], c = 0; c < a.length; c++) b[c] = a[c];
            return b.join("")
        }, a.prototype.patch_fromText = function (b) {
            var c = [];
            if (!b) return c;
            b = b.split("\n");
            for (var d = 0, e = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; d < b.length;) {
                var f = b[d].match(e);
                if (!f) throw Error("Invalid patch string: " + b[d]);
                var g = new a.patch_obj;
                for (c.push(g), g.start1 = parseInt(f[1], 10), "" === f[2] ? (g.start1--, g.length1 = 1) : "0" == f[2] ? g.length1 = 0 : (g.start1--, g.length1 = parseInt(f[2], 10)), g.start2 = parseInt(f[3], 10), "" === f[4] ? (g.start2--, g.length2 = 1) : "0" == f[4] ? g.length2 = 0 : (g.start2--, g.length2 = parseInt(f[4], 10)), d++; d < b.length;) {
                    f = b[d].charAt(0);
                    try {
                        var h = decodeURI(b[d].substring(1))
                    } catch (i) {
                        throw Error("Illegal escape in patch_fromText: " + h)
                    }
                    if ("-" == f) g.diffs.push([-1, h]);
                    else if ("+" == f) g.diffs.push([1, h]);
                    else if (" " == f) g.diffs.push([0, h]);
                    else {
                        if ("@" == f) break;
                        if ("" !== f) throw Error('Invalid patch mode "' + f + '" in: ' + h)
                    }
                    d++
                }
            }
            return c
        }, a.patch_obj = function () {
            this.diffs = [], this.start2 = this.start1 = null, this.length2 = this.length1 = 0
        }, a.patch_obj.prototype.toString = function () {
            var a, b;
            a = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1, b = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2, a = ["@@ -" + a + " +" + b + " @@\n"];
            var c;
            for (b = 0; b < this.diffs.length; b++) {
                switch (this.diffs[b][0]) {
                    case 1:
                        c = "+";
                        break;
                    case -1:
                        c = "-";
                        break;
                    case 0:
                        c = " "
                }
                a[b + 1] = c + encodeURI(this.diffs[b][1]) + "\n"
            }
            return a.join("").replace(/%20/g, " ")
        }, this.diff_match_patch = a, this.DIFF_DELETE = -1, this.DIFF_INSERT = 1, this.DIFF_EQUAL = 0
    }(),
    function () {
        var a;
        a = jQuery, a.fn.extend({
            prettyTextDiff: function (b) {
                var c, d;
                return d = {
                    originalContainer: ".original",
                    changedContainer: ".changed",
                    diffContainer: ".diff",
                    cleanup: !0,
                    debug: !1
                }, d = a.extend(d, b), a.fn.prettyTextDiff.debug("Options: ", d, d), c = new diff_match_patch, this.each(function () {
                    var b, e, f, g;
                    return d.originalContent && d.changedContent ? (g = d.originalContent, b = d.changedContent) : (g = a(d.originalContainer, this).text(), b = a(d.changedContainer, this).text()), a.fn.prettyTextDiff.debug("Original text found: ", g, d), a.fn.prettyTextDiff.debug("Changed  text found: ", b, d), f = c.diff_main(g, b), d.cleanup && c.diff_cleanupSemantic(f), a.fn.prettyTextDiff.debug("Diffs: ", f, d), e = a.map(f, function (b) {
                        return a.fn.prettyTextDiff.createHTML(b)
                    }), a(d.diffContainer, this).html(e.join("")), this
                })
            }
        }), a.fn.prettyTextDiff.debug = function (a, b, c) {
            return c.debug ? console.log(a, b) : void 0
        }, a.fn.prettyTextDiff.createHTML = function (a) {
            var b, c, d, e, f, g, h, i;
            switch (c = [], e = /&/g, g = /</g, f = />/g, h = /\n/g, d = a[0], b = a[1], i = b.replace(e, "&amp;").replace(g, "&lt;").replace(f, "&gt;").replace(h, "<br>"), d) {
                case DIFF_INSERT:
                    return "<ins>" + i + "</ins>";
                case DIFF_DELETE:
                    return "<del>" + i + "</del>";
                case DIFF_EQUAL:
                    return "<span>" + i + "</span>"
            }
        }
    }.call(this),
    function (a, b, c, d) {
        a.fn.jsonFrill = function (b, c) {
            function d(a, b, c) {
                return '<div class="jf-prop jf-item ' + s + ' " >' + f(a) + q + '<span class="jf-value jf-' + c + '">' + b + "</span></div>"
            }

            function e(a) {
                return '<span class="jf-spaces">' + new Array(a + 1).join("  " + v) + "</span>"
            }

            function f(a, b) {
                return b ? '<span class="' + b + '">' + w + '<span class="jf-key jf-collapse">' + a + "</span></span>" : '<span class="jf-key">' + w + a + "</span>"
            }

            function g(a, b, c, d) {
                var g = "";
                return w = e(++o), g = h(d), w = e(--o), g = g ? f(c, "jf-collapsible-title") + q + a + u + p + g + w + b : f(c) + q + a + " " + b, '<div class="jf-collapsible jf-item ' + s + ' ">' + g + "</div>"
            }

            function h(b) {
                var c = "";
                if (a.isEmptyObject(b)) return !1;
                for (var e in b) {
                    var f = a.type(b[e]);
                    c += "object" == f || "array" == f ? g(t[f].open, t[f].close, i(e), b[e]) : d(i(e), "string" === a.type(b[e]) ? i(b[e]) : b[e], f)
                }
                return c
            }

            function i(a) {
                return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function j(a, b, c) {
                (c ? a.slideDown(40) : a.show()).removeClass("jf-collapsed").siblings(".jf-ellipses").fadeOut("fast"), b.addClass("jf-collapse")
            }

            function k(a, b, c) {
                (c ? a.slideUp(40) : a.hide()).addClass("jf-collapsed").siblings(".jf-ellipses").fadeIn("fast"), b.removeClass("jf-collapse")
            }

            function l() {
                var b = a("span.jf-collapsible-title"),
                    c = {
                        collapsibleDivs: b.siblings("div.jf-item"),
                        collapsibleKeys: b.children("span.jf-key"),
                        formattedJSON: a("div#jf-formattedJSON")
                    };
                c.formattedJSON.on("click", "span.jf-collapsible-title", function (b) {
                    b.preventDefault();
                    var c = a(this).siblings("div"),
                        d = a(this).children("span.jf-key");
                    c.hasClass("jf-collapsed") ? j(c, d, !0) : k(c, d, !0)
                }), c.formattedJSON.on("click", "span.jf-parent-brace", function (b) {
                    b.preventDefault();
                    var c = a(this).siblings("div"),
                        d = a(this).children(".jf-key");
                    c.hasClass("jf-collapsed") ? j(c, d, !0) : k(c, d, !0)
                }), a("div.jf-prop").hover(function (b) {
                    a(this).closest("div.jf-collapsible").addClass("jf-highlight"), b.preventDefault()
                }, function (b) {
                    a(this).closest("div.jf-collapsible").removeClass("jf-highlight"), b.preventDefault()
                }), a("div#jf-toolbar").on("click", "label", function () {
                    "Expand All" === a(this).text() ? j(a("div.jf-collapsed"), c.collapsibleKeys) : k(c.collapsibleDivs, c.collapsibleKeys)
                }), n.settings.collapse && c.formattedJSON.children(".jf-ellipses").show()
            }

            function m(a) {
                return "<div id='jf-toolbar'><label id='jf-collapse-all'>Collapse All</label><label id='jf-expand-all'>Expand All</label></div>"
            }
            var n = n || {};
            n.settings = a.extend({
                collapse: !1,
                toolbar: !1,
                tabSize: 2
            }, b);
            var o = 1,
                p = "</br>",
                q = " : ",
                r = '<span class="jf-open-brace jf-parent-brace">{</span>',
                s = n.settings.collapse ? "jf-collapsed" : "",
                t = {
                    object: {
                        open: '<span class="jf-open-brace">{</span>',
                        close: '<span class="jf-close-brace">}</span>'
                    },
                    array: {
                        open: '<span class="jf-open-brace">[</span>',
                        close: '<span class="jf-close-brace">]</span>'
                    }
                },
                u = '<span class="jf-ellipses jf-hide">...</span>',
                v = new Array(n.settings.tabSize > 0 ? n.settings.tabSize : 0).join(" "),
                w = e(o);
            return this.each(function () {
                try {
                    c ? "object" == a.type(c) || "array" == a.type(c) ? json = c : (c = c.trim(), json = c.length > 0 ? a.parseJSON(c) : {}) : (json = a(this).text().trim(), json = json.length > 0 ? a.parseJSON(json) : {})
                } catch (b) {
                    console && console.log && console.log("Invalid Json " + b), a(this).html(c)
                }
                var d = h(json),
                    f = a.type(json);
                if (d) {
                    w = e(--o);
                    var g = '<div id="jf-formattedJSON" class="jf-collapsible">' + r + u + d + w + t[f].close;
                    toolbar = n.settings.toolbar ? m(n.settings.collapse) : "", a(this).html(toolbar + g)
                } else a(this).html(t[f].open + t[f].close);
                l()
            })
        }
    }(jQuery, window, document),
    function (a) {
        function b(a, b, c, d, e, f) {
            a = String(a);
            for (var g = 0, h = 0, i = a.length, j = "", k = 0; i > h;) {
                var l = a.charCodeAt(h);
                for (l = 256 > l ? c[l] : -1, g = (g << e) + l, k += e; k >= f;) {
                    k -= f;
                    var m = g >> k;
                    j += d.charAt(m), g ^= m << k
                }++h
            }
            return !b && k > 0 && (j += d.charAt(g << f - k)), j
        }
        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", d = "", e = [256], f = [256], g = 0, h = {
                encode: function (a) {
                    var b = a.replace(/[\u0080-\u07ff]/g, function (a) {
                        var b = a.charCodeAt(0);
                        return String.fromCharCode(192 | b >> 6, 128 | 63 & b)
                    }).replace(/[\u0800-\uffff]/g, function (a) {
                        var b = a.charCodeAt(0);
                        return String.fromCharCode(224 | b >> 12, 128 | b >> 6 & 63, 128 | 63 & b)
                    });
                    return b
                },
                decode: function (a) {
                    var b = a.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (a) {
                        var b = (15 & a.charCodeAt(0)) << 12 | (63 & a.charCodeAt(1)) << 6 | 63 & a.charCodeAt(2);
                        return String.fromCharCode(b)
                    }).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (a) {
                        var b = (31 & a.charCodeAt(0)) << 6 | 63 & a.charCodeAt(1);
                        return String.fromCharCode(b)
                    });
                    return b
                }
            }; 256 > g;) {
            var i = String.fromCharCode(g);
            d += i, f[g] = g, e[g] = c.indexOf(i), ++g
        }
        var j = a.base64 = function (a, b, c) {
            return b ? j[a](b, c) : a ? null : this
        };
        j.btoa = j.encode = function (a, d) {
            return a = j.raw === !1 || j.utf8encode || d ? h.encode(a) : a, a = b(a, !1, f, c, 8, 6), a + "====".slice(a.length % 4 || 4)
        }, j.atob = j.decode = function (a, c) {
            a = String(a).split("=");
            var f = a.length;
            do --f, a[f] = b(a[f], !0, e, d, 6, 8); while (f > 0);
            return a = a.join(""), j.raw === !1 || j.utf8decode || c ? h.decode(a) : a
        }
    }(jQuery),
    function (a) {
        a.fn.qrcode = function (b) {
            "string" == typeof b && (b = {
                text: b
            }), b = a.extend({}, {
                render: "canvas",
                width: 256,
                height: 256,
                typeNumber: -1,
                correctLevel: QRErrorCorrectLevel.H,
                background: "#ffffff",
                foreground: "#000000"
            }, b);
            var c = function () {
                    var a = new QRCode(b.typeNumber, b.correctLevel);
                    a.addData(b.text), a.make();
                    var c = document.createElement("canvas");
                    c.width = b.width, c.height = b.height;
                    for (var d = c.getContext("2d"), e = b.width / a.getModuleCount(), f = b.height / a.getModuleCount(), g = 0; g < a.getModuleCount(); g++)
                        for (var h = 0; h < a.getModuleCount(); h++) {
                            d.fillStyle = a.isDark(g, h) ? b.foreground : b.background;
                            var i = Math.ceil((h + 1) * e) - Math.floor(h * e),
                                j = Math.ceil((g + 1) * e) - Math.floor(g * e);
                            d.fillRect(Math.round(h * e), Math.round(g * f), i, j)
                        }
                    return c
                },
                d = function () {
                    var c = new QRCode(b.typeNumber, b.correctLevel);
                    c.addData(b.text), c.make();
                    for (var d = a("<table></table>").css("width", b.width + "px").css("height", b.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", b.background), e = b.width / c.getModuleCount(), f = b.height / c.getModuleCount(), g = 0; g < c.getModuleCount(); g++)
                        for (var h = a("<tr></tr>").css("height", f + "px").appendTo(d), i = 0; i < c.getModuleCount(); i++) a("<td></td>").css("width", e + "px").css("background-color", c.isDark(g, i) ? b.foreground : b.background).appendTo(h);
                    return d
                };
            return this.each(function () {
                var e = "canvas" == b.render ? c() : d();
                a(e).appendTo(this)
            })
        }
    }(jQuery), QR8bitByte.prototype = {
        getLength: function (a) {
            return this.data.length
        },
        write: function (a) {
            for (var b = 0; b < this.data.length; b++) a.put(this.data.charCodeAt(b), 8)
        }
    }, QRCode.prototype = {
        addData: function (a) {
            var b = new QR8bitByte(a);
            this.dataList.push(b), this.dataCache = null
        },
        isDark: function (a, b) {
            if (0 > a || this.moduleCount <= a || 0 > b || this.moduleCount <= b) throw new Error(a + "," + b);
            return this.modules[a][b]
        },
        getModuleCount: function () {
            return this.moduleCount
        },
        make: function () {
            if (this.typeNumber < 1) {
                var a = 1;
                for (a = 1; 40 > a; a++) {
                    for (var b = QRRSBlock.getRSBlocks(a, this.errorCorrectLevel), c = new QRBitBuffer, d = 0, e = 0; e < b.length; e++) d += b[e].dataCount;
                    for (var e = 0; e < this.dataList.length; e++) {
                        var f = this.dataList[e];
                        c.put(f.mode, 4), c.put(f.getLength(), QRUtil.getLengthInBits(f.mode, a)), f.write(c)
                    }
                    if (c.getLengthInBits() <= 8 * d) break
                }
                this.typeNumber = a
            }
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function (a, b) {
            this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
            for (var c = 0; c < this.moduleCount; c++) {
                this.modules[c] = new Array(this.moduleCount);
                for (var d = 0; d < this.moduleCount; d++) this.modules[c][d] = null
            }
            this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(a, b), this.typeNumber >= 7 && this.setupTypeNumber(a), null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, b)
        },
        setupPositionProbePattern: function (a, b) {
            for (var c = -1; 7 >= c; c++)
                if (!(-1 >= a + c || this.moduleCount <= a + c))
                    for (var d = -1; 7 >= d; d++) - 1 >= b + d || this.moduleCount <= b + d || (c >= 0 && 6 >= c && (0 == d || 6 == d) || d >= 0 && 6 >= d && (0 == c || 6 == c) || c >= 2 && 4 >= c && d >= 2 && 4 >= d ? this.modules[a + c][b + d] = !0 : this.modules[a + c][b + d] = !1)
        },
        getBestMaskPattern: function () {
            for (var a = 0, b = 0, c = 0; 8 > c; c++) {
                this.makeImpl(!0, c);
                var d = QRUtil.getLostPoint(this);
                (0 == c || a > d) && (a = d, b = c)
            }
            return b
        },
        createMovieClip: function (a, b, c) {
            var d = a.createEmptyMovieClip(b, c),
                e = 1;
            this.make();
            for (var f = 0; f < this.modules.length; f++)
                for (var g = f * e, h = 0; h < this.modules[f].length; h++) {
                    var i = h * e,
                        j = this.modules[f][h];
                    j && (d.beginFill(0, 100), d.moveTo(i, g), d.lineTo(i + e, g), d.lineTo(i + e, g + e), d.lineTo(i, g + e), d.endFill())
                }
            return d
        },
        setupTimingPattern: function () {
            for (var a = 8; a < this.moduleCount - 8; a++) null == this.modules[a][6] && (this.modules[a][6] = a % 2 == 0);
            for (var b = 8; b < this.moduleCount - 8; b++) null == this.modules[6][b] && (this.modules[6][b] = b % 2 == 0)
        },
        setupPositionAdjustPattern: function () {
            for (var a = QRUtil.getPatternPosition(this.typeNumber), b = 0; b < a.length; b++)
                for (var c = 0; c < a.length; c++) {
                    var d = a[b],
                        e = a[c];
                    if (null == this.modules[d][e])
                        for (var f = -2; 2 >= f; f++)
                            for (var g = -2; 2 >= g; g++) - 2 == f || 2 == f || -2 == g || 2 == g || 0 == f && 0 == g ? this.modules[d + f][e + g] = !0 : this.modules[d + f][e + g] = !1
                }
        },
        setupTypeNumber: function (a) {
            for (var b = QRUtil.getBCHTypeNumber(this.typeNumber), c = 0; 18 > c; c++) {
                var d = !a && 1 == (b >> c & 1);
                this.modules[Math.floor(c / 3)][c % 3 + this.moduleCount - 8 - 3] = d
            }
            for (var c = 0; 18 > c; c++) {
                var d = !a && 1 == (b >> c & 1);
                this.modules[c % 3 + this.moduleCount - 8 - 3][Math.floor(c / 3)] = d
            }
        },
        setupTypeInfo: function (a, b) {
            for (var c = this.errorCorrectLevel << 3 | b, d = QRUtil.getBCHTypeInfo(c), e = 0; 15 > e; e++) {
                var f = !a && 1 == (d >> e & 1);
                6 > e ? this.modules[e][8] = f : 8 > e ? this.modules[e + 1][8] = f : this.modules[this.moduleCount - 15 + e][8] = f
            }
            for (var e = 0; 15 > e; e++) {
                var f = !a && 1 == (d >> e & 1);
                8 > e ? this.modules[8][this.moduleCount - e - 1] = f : 9 > e ? this.modules[8][15 - e - 1 + 1] = f : this.modules[8][15 - e - 1] = f
            }
            this.modules[this.moduleCount - 8][8] = !a
        },
        mapData: function (a, b) {
            for (var c = -1, d = this.moduleCount - 1, e = 7, f = 0, g = this.moduleCount - 1; g > 0; g -= 2)
                for (6 == g && g--;;) {
                    for (var h = 0; 2 > h; h++)
                        if (null == this.modules[d][g - h]) {
                            var i = !1;
                            f < a.length && (i = 1 == (a[f] >>> e & 1));
                            var j = QRUtil.getMask(b, d, g - h);
                            j && (i = !i), this.modules[d][g - h] = i, e--, -1 == e && (f++, e = 7)
                        } if (d += c, 0 > d || this.moduleCount <= d) {
                        d -= c, c = -c;
                        break
                    }
                }
        }
    }, QRCode.PAD0 = 236, QRCode.PAD1 = 17, QRCode.createData = function (a, b, c) {
        for (var d = QRRSBlock.getRSBlocks(a, b), e = new QRBitBuffer, f = 0; f < c.length; f++) {
            var g = c[f];
            e.put(g.mode, 4), e.put(g.getLength(), QRUtil.getLengthInBits(g.mode, a)), g.write(e)
        }
        for (var h = 0, f = 0; f < d.length; f++) h += d[f].dataCount;
        if (e.getLengthInBits() > 8 * h) throw new Error("code length overflow. (" + e.getLengthInBits() + ">" + 8 * h + ")");
        for (e.getLengthInBits() + 4 <= 8 * h && e.put(0, 4); e.getLengthInBits() % 8 != 0;) e.putBit(!1);
        for (;;) {
            if (e.getLengthInBits() >= 8 * h) break;
            if (e.put(QRCode.PAD0, 8), e.getLengthInBits() >= 8 * h) break;
            e.put(QRCode.PAD1, 8)
        }
        return QRCode.createBytes(e, d)
    }, QRCode.createBytes = function (a, b) {
        for (var c = 0, d = 0, e = 0, f = new Array(b.length), g = new Array(b.length), h = 0; h < b.length; h++) {
            var i = b[h].dataCount,
                j = b[h].totalCount - i;
            d = Math.max(d, i), e = Math.max(e, j), f[h] = new Array(i);
            for (var k = 0; k < f[h].length; k++) f[h][k] = 255 & a.buffer[k + c];
            c += i;
            var l = QRUtil.getErrorCorrectPolynomial(j),
                m = new QRPolynomial(f[h], l.getLength() - 1),
                n = m.mod(l);
            g[h] = new Array(l.getLength() - 1);
            for (var k = 0; k < g[h].length; k++) {
                var o = k + n.getLength() - g[h].length;
                g[h][k] = o >= 0 ? n.get(o) : 0
            }
        }
        for (var p = 0, k = 0; k < b.length; k++) p += b[k].totalCount;
        for (var q = new Array(p), r = 0, k = 0; d > k; k++)
            for (var h = 0; h < b.length; h++) k < f[h].length && (q[r++] = f[h][k]);
        for (var k = 0; e > k; k++)
            for (var h = 0; h < b.length; h++) k < g[h].length && (q[r++] = g[h][k]);
        return q
    };
for (var QRMode = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8
    }, QRErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }, QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    }, QRUtil = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1335,
        G18: 7973,
        G15_MASK: 21522,
        getBCHTypeInfo: function (a) {
            for (var b = a << 10; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;) b ^= QRUtil.G15 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G15);
            return (a << 10 | b) ^ QRUtil.G15_MASK
        },
        getBCHTypeNumber: function (a) {
            for (var b = a << 12; QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;) b ^= QRUtil.G18 << QRUtil.getBCHDigit(b) - QRUtil.getBCHDigit(QRUtil.G18);
            return a << 12 | b
        },
        getBCHDigit: function (a) {
            for (var b = 0; 0 != a;) b++, a >>>= 1;
            return b
        },
        getPatternPosition: function (a) {
            return QRUtil.PATTERN_POSITION_TABLE[a - 1]
        },
        getMask: function (a, b, c) {
            switch (a) {
                case QRMaskPattern.PATTERN000:
                    return (b + c) % 2 == 0;
                case QRMaskPattern.PATTERN001:
                    return b % 2 == 0;
                case QRMaskPattern.PATTERN010:
                    return c % 3 == 0;
                case QRMaskPattern.PATTERN011:
                    return (b + c) % 3 == 0;
                case QRMaskPattern.PATTERN100:
                    return (Math.floor(b / 2) + Math.floor(c / 3)) % 2 == 0;
                case QRMaskPattern.PATTERN101:
                    return b * c % 2 + b * c % 3 == 0;
                case QRMaskPattern.PATTERN110:
                    return (b * c % 2 + b * c % 3) % 2 == 0;
                case QRMaskPattern.PATTERN111:
                    return (b * c % 3 + (b + c) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + a)
            }
        },
        getErrorCorrectPolynomial: function (a) {
            for (var b = new QRPolynomial([1], 0), c = 0; a > c; c++) b = b.multiply(new QRPolynomial([1, QRMath.gexp(c)], 0));
            return b
        },
        getLengthInBits: function (a, b) {
            if (b >= 1 && 10 > b) switch (a) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                    return 8;
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw new Error("mode:" + a)
            } else if (27 > b) switch (a) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw new Error("mode:" + a)
            } else {
                if (!(41 > b)) throw new Error("type:" + b);
                switch (a) {
                    case QRMode.MODE_NUMBER:
                        return 14;
                    case QRMode.MODE_ALPHA_NUM:
                        return 13;
                    case QRMode.MODE_8BIT_BYTE:
                        return 16;
                    case QRMode.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + a)
                }
            }
        },
        getLostPoint: function (a) {
            for (var b = a.getModuleCount(), c = 0, d = 0; b > d; d++)
                for (var e = 0; b > e; e++) {
                    for (var f = 0, g = a.isDark(d, e), h = -1; 1 >= h; h++)
                        if (!(0 > d + h || d + h >= b))
                            for (var i = -1; 1 >= i; i++) 0 > e + i || e + i >= b || (0 != h || 0 != i) && g == a.isDark(d + h, e + i) && f++;
                    f > 5 && (c += 3 + f - 5)
                }
            for (var d = 0; b - 1 > d; d++)
                for (var e = 0; b - 1 > e; e++) {
                    var j = 0;
                    a.isDark(d, e) && j++, a.isDark(d + 1, e) && j++, a.isDark(d, e + 1) && j++, a.isDark(d + 1, e + 1) && j++, (0 == j || 4 == j) && (c += 3)
                }
            for (var d = 0; b > d; d++)
                for (var e = 0; b - 6 > e; e++) a.isDark(d, e) && !a.isDark(d, e + 1) && a.isDark(d, e + 2) && a.isDark(d, e + 3) && a.isDark(d, e + 4) && !a.isDark(d, e + 5) && a.isDark(d, e + 6) && (c += 40);
            for (var e = 0; b > e; e++)
                for (var d = 0; b - 6 > d; d++) a.isDark(d, e) && !a.isDark(d + 1, e) && a.isDark(d + 2, e) && a.isDark(d + 3, e) && a.isDark(d + 4, e) && !a.isDark(d + 5, e) && a.isDark(d + 6, e) && (c += 40);
            for (var k = 0, e = 0; b > e; e++)
                for (var d = 0; b > d; d++) a.isDark(d, e) && k++;
            var l = Math.abs(100 * k / b / b - 50) / 5;
            return c += 10 * l
        }
    }, QRMath = {
        glog: function (a) {
            if (1 > a) throw new Error("glog(" + a + ")");
            return QRMath.LOG_TABLE[a]
        },
        gexp: function (a) {
            for (; 0 > a;) a += 255;
            for (; a >= 256;) a -= 255;
            return QRMath.EXP_TABLE[a]
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    }, i = 0; 8 > i; i++) QRMath.EXP_TABLE[i] = 1 << i;
for (var i = 8; 256 > i; i++) QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (var i = 0; 255 > i; i++) QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
        get: function (a) {
            return this.num[a]
        },
        getLength: function () {
            return this.num.length
        },
        multiply: function (a) {
            for (var b = new Array(this.getLength() + a.getLength() - 1), c = 0; c < this.getLength(); c++)
                for (var d = 0; d < a.getLength(); d++) b[c + d] ^= QRMath.gexp(QRMath.glog(this.get(c)) + QRMath.glog(a.get(d)));
            return new QRPolynomial(b, 0)
        },
        mod: function (a) {
            if (this.getLength() - a.getLength() < 0) return this;
            for (var b = QRMath.glog(this.get(0)) - QRMath.glog(a.get(0)), c = new Array(this.getLength()), d = 0; d < this.getLength(); d++) c[d] = this.get(d);
            for (var d = 0; d < a.getLength(); d++) c[d] ^= QRMath.gexp(QRMath.glog(a.get(d)) + b);
            return new QRPolynomial(c, 0).mod(a)
        }
    }, QRRSBlock.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16]
    ], QRRSBlock.getRSBlocks = function (a, b) {
        var c = QRRSBlock.getRsBlockTable(a, b);
        if (void 0 == c) throw new Error("bad rs block @ typeNumber:" + a + "/errorCorrectLevel:" + b);
        for (var d = c.length / 3, e = new Array, f = 0; d > f; f++)
            for (var g = c[3 * f + 0], h = c[3 * f + 1], i = c[3 * f + 2], j = 0; g > j; j++) e.push(new QRRSBlock(h, i));
        return e
    }, QRRSBlock.getRsBlockTable = function (a, b) {
        switch (b) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (a - 1) + 3];
            default:
                return void 0
        }
    }, QRBitBuffer.prototype = {
        get: function (a) {
            var b = Math.floor(a / 8);
            return 1 == (this.buffer[b] >>> 7 - a % 8 & 1)
        },
        put: function (a, b) {
            for (var c = 0; b > c; c++) this.putBit(1 == (a >>> b - c - 1 & 1))
        },
        getLengthInBits: function () {
            return this.length
        },
        putBit: function (a) {
            var b = Math.floor(this.length / 8);
            this.buffer.length <= b && this.buffer.push(0), a && (this.buffer[b] |= 128 >>> this.length % 8), this.length++
        }
    },
    function (a) {
        a.fn.lipsumize = function (b) {
            var c = function (a) {
                    return a.charAt(0).toUpperCase() + a.slice(1)
                },
                d = function (a, b) {
                    return Math.floor(Math.random() * (b - a + 1) + a)
                },
                e = a.extend({}, a.fn.lipsumize.defaults, b),
                f = e.corpus.replace(/,/g, "");
            sentences = f.split(/\. /);
            var g = a.map(sentences, function (a, b) {
                    return a.toLowerCase().split(/ /)
                }),
                h = [];
            if (e.paragraphs) {
                for (var i = [], j = 0; j < e.paragraphs; j++) {
                    for (var k = e.sentencesPerParagraph[0] || 3, l = e.sentencesPerParagraph[1] || 8, m = d(k, l), n = [], o = 0; m > o; o++) {
                        for (var p = e.wordsPerSentence[0] || 5, q = e.wordsPerSentence[1] || 20, r = d(p, q), s = [], t = "", u = 0; r > u; u++) {
                            var v;
                            do v = g[d(0, sentences.length)]; while (v == t);
                            u || (v = c(v)), s.push(v), t = v
                        }
                        var f = s.join(" ");
                        n.push(f)
                    }
                    i.push(n)
                }
                h = a.map(i, function (a, b) {
                    return "<p id='p" + b + "'>" + a.join(". ") + ".</p>"
                })
            }
            a(this).html(h)
        }, a.fn.lipsumize.defaults = {
            corpus: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna consequat sagittis. Curabitur dapibus enim sit amet elit pharetra tincidunt feugiat nisl imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis. Quisque mi metus, ornare sit amet fermentum et, tincidunt et orci. Fusce eget orci a orci congue vestibulum. Ut dolor diam, elementum et vestibulum eu, porttitor vel elit. Curabitur venenatis pulvinar tellus gravida ornare. Sed et erat faucibus nunc euismod ultricies ut id justo. Nullam cursus suscipit nisi, et ultrices justo sodales nec. Fusce venenatis facilisis lectus ac semper. Aliquam at massa ipsum. Quisque bibendum purus convallis nulla ultrices ultricies. Nullam aliquam, mi eu aliquam tincidunt, purus velit laoreet tortor, viverra pretium nisi quam vitae mi. Fusce vel volutpat elit. Nam sagittis nisi dui.Suspendisse lectus leo, consectetur in tempor sit amet, placerat quis neque. Etiam luctus porttitor lorem, sed suscipit est rutrum non. Curabitur lobortis nisl a enim congue semper. Aenean commodo ultrices imperdiet. Vestibulum ut justo vel sapien venenatis tincidunt. Phasellus eget dolor sit amet ipsum dapibus condimentum vitae quis lectus. Aliquam ut massa in turpis dapibus convallis. Praesent elit lacus, vestibulum at malesuada et, ornare et est. Ut augue nunc, sodales ut euismod non, adipiscing vitae orci. Mauris ut placerat justo. Mauris in ultricies enim. Quisque nec est eleifend nulla ultrices egestas quis ut quam. Donec sollicitudin lectus a mauris pulvinar id aliquam urna cursus. Cras quis ligula sem, vel elementum mi. Phasellus non ullamcorper urna.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In euismod ultrices facilisis. Vestibulum porta sapien adipiscing augue congue id pretium lectus molestie. Proin quis dictum nisl. Morbi id quam sapien, sed vestibulum sem. Duis elementum rutrum mauris sed convallis. Proin vestibulum magna mi. Aenean tristique hendrerit magna, ac facilisis nulla hendrerit ut. Sed non tortor sodales quam auctor elementum. Donec hendrerit nunc eget elit pharetra pulvinar. Suspendisse id tempus tortor. Aenean luctus, elit commodo laoreet commodo, justo nisi consequat massa, sed vulputate quam urna quis eros. Donec vel.",
            words: null,
            sentences: null,
            paragraphs: 5,
            sentencesPerParagraph: [3, 8],
            wordsPerSentence: [5, 20]
        }
    }(jQuery),
    function (a) {
        "use strict";
        var b = function (b) {
            var c = a.Deferred(),
                d = new FileReader;
            return d.onload = function (a) {
                c.resolve(a.target.result)
            }, d.onerror = c.reject, d.onprogress = c.notify, d.readAsDataURL(b), c.promise()
        };
        a.fn.cleanHtml = function () {
            var b = a(this).html();
            return b && b.replace(/(<br>|\s|<div><br><\/div>|&nbsp;)*$/, "")
        }, a.fn.wysiwyg = function (c) {
            var d, e, f, g = this,
                h = function () {
                    e.activeToolbarClass && a(e.toolbarSelector).find(f).each(function () {
                        var b = a(this).data(e.commandRole);
                        document.queryCommandState(b) ? a(this).addClass(e.activeToolbarClass) : a(this).removeClass(e.activeToolbarClass)
                    })
                },
                i = function (a, b) {
                    var c = a.split(" "),
                        d = c.shift(),
                        e = c.join(" ") + (b || "");
                    document.execCommand(d, 0, e), h()
                },
                j = function (b) {
                    a.each(b, function (a, b) {
                        g.keydown(a, function (a) {
                            g.attr("contenteditable") && g.is(":visible") && i(b)
                        }).keyup(a, function (a) {
                            g.attr("contenteditable") && g.is(":visible")
                        })
                    })
                },
                k = function () {
                    var a = window.getSelection();
                    return a.getRangeAt && a.rangeCount ? a.getRangeAt(0) : void 0
                },
                l = function () {
                    d = k()
                },
                m = function () {
                    var a = window.getSelection();
                    if (d) {
                        try {
                            a.removeAllRanges()
                        } catch (b) {
                            document.body.createTextRange().select(), document.selection.empty()
                        }
                        a.addRange(d);
                    }
                },
                n = function (c) {
                    g.focus(), a.each(c, function (c, d) {
                        /^image\//.test(d.type) ? a.when(b(d)).done(function (a) {
                            i("insertimage", a)
                        }).fail(function (a) {
                            e.fileUploadError("file-reader", a)
                        }) : e.fileUploadError("unsupported-file-type", d.type)
                    })
                },
                o = function (a, b) {
                    m(), document.queryCommandSupported("hiliteColor") && document.execCommand("hiliteColor", 0, b || "transparent"), l(), a.data(e.selectionMarker, b)
                },
                p = function (b, c) {
                    b.find(f).click(function () {
                        m(), g.focus(), i(a(this).data(c.commandRole)), l()
                    }), b.find("[data-toggle=dropdown]").click(m), b.find("input[type=text][data-" + c.commandRole + "]").on("webkitspeechchange change", function () {
                        var b = this.value;
                        this.value = "", m(), b && (g.focus(), i(a(this).data(c.commandRole), b)), l()
                    }).on("focus", function () {
                        var b = a(this);
                        b.data(c.selectionMarker) || (o(b, c.selectionColor), b.focus())
                    }).on("blur", function () {
                        var b = a(this);
                        b.data(c.selectionMarker) && o(b, !1)
                    }), b.find("input[type=file][data-" + c.commandRole + "]").change(function () {
                        m(), "file" === this.type && this.files && this.files.length > 0 && n(this.files), l(), this.value = ""
                    })
                },
                q = function () {
                    g.on("dragenter dragover", !1).on("drop", function (a) {
                        var b = a.originalEvent.dataTransfer;
                        a.stopPropagation(), a.preventDefault(), b && b.files && b.files.length > 0 && n(b.files)
                    })
                };
            return e = a.extend({}, a.fn.wysiwyg.defaults, c), f = "a[data-" + e.commandRole + "],button[data-" + e.commandRole + "],input[type=button][data-" + e.commandRole + "]", j(e.hotKeys), e.dragAndDropImages && q(), p(a(e.toolbarSelector), e), g.attr("contenteditable", "").on("mouseup keyup mouseout", function () {
                l(), h()
            }), a(window).bind("touchend", function (a) {
                var b = g.is(a.target) || g.has(a.target).length > 0,
                    c = k(),
                    d = c && c.startContainer === c.endContainer && c.startOffset === c.endOffset;
                (!d || b) && (l(), h())
            }), this
        }, a.fn.wysiwyg.defaults = {
            hotKeys: {
                "ctrl+b meta+b": "bold",
                "ctrl+i meta+i": "italic",
                "ctrl+u meta+u": "underline",
                "ctrl+z meta+z": "undo",
                "ctrl+y meta+y meta+shift+z": "redo",
                "ctrl+l meta+l": "justifyleft",
                "ctrl+r meta+r": "justifyright",
                "ctrl+e meta+e": "justifycenter",
                "ctrl+j meta+j": "justifyfull",
                "shift+tab": "outdent",
                tab: "indent"
            },
            toolbarSelector: "[data-role=editor-toolbar]",
            commandRole: "edit",
            activeToolbarClass: "btn-info",
            selectionMarker: "edit-focus-marker",
            selectionColor: "darkgrey",
            dragAndDropImages: !0,
            fileUploadError: function (a, b) {
                console.log("File upload error", a, b)
            }
        }
    }(window.jQuery),
    function () {
        function a(a, b) {
            for (var c = 0; c < b.length; c += 1)
                if (b[c] === a) return !0;
            return !1
        }

        function b(a) {
            return a.replace(/^\s+|\s+$/g, "")
        }

        function c(a) {
            return a.replace(/^\s+/g, "")
        }

        function d(a, b) {
            "use strict";
            var c = new e(a, b);
            return c.beautify()
        }

        function e(d, e) {
            "use strict";

            function f(a, b) {
                var c = 0;
                a && (c = a.indentation_level, !R.just_added_newline() && a.line_indent_level > c && (c = a.line_indent_level));
                var d = {
                    mode: b,
                    parent: a,
                    last_text: a ? a.last_text : "",
                    last_word: a ? a.last_word : "",
                    declaration_statement: !1,
                    declaration_assignment: !1,
                    multiline_frame: !1,
                    if_block: !1,
                    else_block: !1,
                    do_block: !1,
                    do_while: !1,
                    in_case_statement: !1,
                    in_case: !1,
                    case_body: !1,
                    indentation_level: c,
                    line_indent_level: a ? a.line_indent_level : c,
                    start_line_index: R.get_line_number(),
                    ternary_depth: 0
                };
                return d
            }

            function k(a) {
                var b = a.newlines,
                    c = ba.keep_array_indentation && t(Y.mode);
                if (c)
                    for (d = 0; b > d; d += 1) n(d > 0);
                else if (ba.max_preserve_newlines && b > ba.max_preserve_newlines && (b = ba.max_preserve_newlines), ba.preserve_newlines && a.newlines > 1) {
                    n();
                    for (var d = 1; b > d; d += 1) n(!0)
                }
                U = a, aa[U.type]()
            }

            function l(a) {
                a = a.replace(/\x0d/g, "");
                for (var b = [], c = a.indexOf("\n"); - 1 !== c;) b.push(a.substring(0, c)), a = a.substring(c + 1), c = a.indexOf("\n");
                return a.length && b.push(a), b
            }

            function m(a) {
                if (a = void 0 === a ? !1 : a, !R.just_added_newline())
                    if (ba.preserve_newlines && U.wanted_newline || a) n(!1, !0);
                    else if (ba.wrap_line_length) {
                    var b = R.current_line.get_character_count() + U.text.length + (R.space_before_token ? 1 : 0);
                    b >= ba.wrap_line_length && n(!1, !0)
                }
            }

            function n(a, b) {
                if (!b && ";" !== Y.last_text && "," !== Y.last_text && "=" !== Y.last_text && "TK_OPERATOR" !== V)
                    for (; Y.mode === j.Statement && !Y.if_block && !Y.do_block;) v();
                R.add_new_line(a) && (Y.multiline_frame = !0)
            }

            function o() {
                R.just_added_newline() && (ba.keep_array_indentation && t(Y.mode) && U.wanted_newline ? (R.current_line.push(U.whitespace_before), R.space_before_token = !1) : R.set_indent(Y.indentation_level) && (Y.line_indent_level = Y.indentation_level))
            }

            function p(a) {
                return R.raw ? void R.add_raw_token(U) : (ba.comma_first && "TK_COMMA" === V && R.just_added_newline() && "," === R.previous_line.last() && (R.previous_line.pop(), o(), R.add_token(","), R.space_before_token = !0), a = a || U.text, o(), void R.add_token(a))
            }

            function q() {
                Y.indentation_level += 1
            }

            function r() {
                Y.indentation_level > 0 && (!Y.parent || Y.indentation_level > Y.parent.indentation_level) && (Y.indentation_level -= 1)
            }

            function s(a) {
                Y ? ($.push(Y), Z = Y) : Z = f(null, a), Y = f(Z, a)
            }

            function t(a) {
                return a === j.ArrayLiteral
            }

            function u(b) {
                return a(b, [j.Expression, j.ForInitializer, j.Conditional])
            }

            function v() {
                $.length > 0 && (Z = Y, Y = $.pop(), Z.mode === j.Statement && R.remove_redundant_indentation(Z))
            }

            function w() {
                return Y.parent.mode === j.ObjectLiteral && Y.mode === j.Statement && (":" === Y.last_text && 0 === Y.ternary_depth || "TK_RESERVED" === V && a(Y.last_text, ["get", "set"]))
            }

            function x() {
                return "TK_RESERVED" === V && a(Y.last_text, ["var", "let", "const"]) && "TK_WORD" === U.type || "TK_RESERVED" === V && "do" === Y.last_text || "TK_RESERVED" === V && "return" === Y.last_text && !U.wanted_newline || "TK_RESERVED" === V && "else" === Y.last_text && ("TK_RESERVED" !== U.type || "if" !== U.text) || "TK_END_EXPR" === V && (Z.mode === j.ForInitializer || Z.mode === j.Conditional) || "TK_WORD" === V && Y.mode === j.BlockStatement && !Y.in_case && "--" !== U.text && "++" !== U.text && "function" !== W && "TK_WORD" !== U.type && "TK_RESERVED" !== U.type || Y.mode === j.ObjectLiteral && (":" === Y.last_text && 0 === Y.ternary_depth || "TK_RESERVED" === V && a(Y.last_text, ["get", "set"])) ? (s(j.Statement), q(), "TK_RESERVED" === V && a(Y.last_text, ["var", "let", "const"]) && "TK_WORD" === U.type && (Y.declaration_statement = !0), w() || m("TK_RESERVED" === U.type && a(U.text, ["do", "for", "if", "while"])), !0) : !1
            }

            function y(a, c) {
                for (var d = 0; d < a.length; d++) {
                    var e = b(a[d]);
                    if (e.charAt(0) !== c) return !1
                }
                return !0
            }

            function z(a, b) {
                for (var c, d = 0, e = a.length; e > d; d++)
                    if (c = a[d], c && 0 !== c.indexOf(b)) return !1;
                return !0
            }

            function A(b) {
                return a(b, ["case", "return", "do", "if", "throw", "else"])
            }

            function B(a) {
                var b = S + (a || 0);
                return 0 > b || b >= ca.length ? null : ca[b]
            }

            function C() {
                x();
                var b = j.Expression;
                if ("[" === U.text) {
                    if ("TK_WORD" === V || ")" === Y.last_text) return "TK_RESERVED" === V && a(Y.last_text, T.line_starters) && (R.space_before_token = !0), s(b), p(), q(), void(ba.space_in_paren && (R.space_before_token = !0));
                    b = j.ArrayLiteral, t(Y.mode) && ("[" === Y.last_text || "," === Y.last_text && ("]" === W || "}" === W)) && (ba.keep_array_indentation || n())
                } else "TK_RESERVED" === V && "for" === Y.last_text ? b = j.ForInitializer : "TK_RESERVED" === V && a(Y.last_text, ["if", "while"]) && (b = j.Conditional);
                ";" === Y.last_text || "TK_START_BLOCK" === V ? n() : "TK_END_EXPR" === V || "TK_START_EXPR" === V || "TK_END_BLOCK" === V || "." === Y.last_text ? m(U.wanted_newline) : "TK_RESERVED" === V && "(" === U.text || "TK_WORD" === V || "TK_OPERATOR" === V ? "TK_RESERVED" === V && ("function" === Y.last_word || "typeof" === Y.last_word) || "*" === Y.last_text && "function" === W ? ba.space_after_anon_function && (R.space_before_token = !0) : "TK_RESERVED" !== V || !a(Y.last_text, T.line_starters) && "catch" !== Y.last_text || ba.space_before_conditional && (R.space_before_token = !0) : R.space_before_token = !0, "(" === U.text && "TK_RESERVED" === V && "await" === Y.last_word && (R.space_before_token = !0), "(" === U.text && ("TK_EQUALS" === V || "TK_OPERATOR" === V) && (w() || m()), s(b), p(), ba.space_in_paren && (R.space_before_token = !0), q()
            }

            function D() {
                for (; Y.mode === j.Statement;) v();
                Y.multiline_frame && m("]" === U.text && t(Y.mode) && !ba.keep_array_indentation), ba.space_in_paren && ("TK_START_EXPR" !== V || ba.space_in_empty_paren ? R.space_before_token = !0 : (R.trim(), R.space_before_token = !1)), "]" === U.text && ba.keep_array_indentation ? (p(), v()) : (v(), p()), R.remove_redundant_indentation(Z), Y.do_while && Z.mode === j.Conditional && (Z.mode = j.Expression, Y.do_block = !1, Y.do_while = !1)
            }

            function E() {
                var b = B(1),
                    c = B(2);
                s(c && (":" === c.text && a(b.type, ["TK_STRING", "TK_WORD", "TK_RESERVED"]) || a(b.text, ["get", "set"]) && a(c.type, ["TK_WORD", "TK_RESERVED"])) ? a(W, ["class", "interface"]) ? j.BlockStatement : j.ObjectLiteral : j.BlockStatement);
                var d = !b.comments_before.length && "}" === b.text,
                    e = d && "function" === Y.last_word && "TK_END_EXPR" === V;
                "expand" === ba.brace_style || "none" === ba.brace_style && U.wanted_newline ? "TK_OPERATOR" !== V && (e || "TK_EQUALS" === V || "TK_RESERVED" === V && A(Y.last_text) && "else" !== Y.last_text) ? R.space_before_token = !0 : n(!1, !0) : "TK_OPERATOR" !== V && "TK_START_EXPR" !== V ? "TK_START_BLOCK" === V ? n() : R.space_before_token = !0 : t(Z.mode) && "," === Y.last_text && ("}" === W ? R.space_before_token = !0 : n()), p(), q()
            }

            function F() {
                for (; Y.mode === j.Statement;) v();
                var a = "TK_START_BLOCK" === V;
                "expand" === ba.brace_style ? a || n() : a || (t(Y.mode) && ba.keep_array_indentation ? (ba.keep_array_indentation = !1, n(), ba.keep_array_indentation = !0) : n()), v(), p()
            }

            function G() {
                if ("TK_RESERVED" === U.type && Y.mode !== j.ObjectLiteral && a(U.text, ["set", "get"]) && (U.type = "TK_WORD"), "TK_RESERVED" === U.type && Y.mode === j.ObjectLiteral) {
                    var b = B(1);
                    ":" == b.text && (U.type = "TK_WORD")
                }
                if (x() || !U.wanted_newline || u(Y.mode) || "TK_OPERATOR" === V && "--" !== Y.last_text && "++" !== Y.last_text || "TK_EQUALS" === V || !ba.preserve_newlines && "TK_RESERVED" === V && a(Y.last_text, ["var", "let", "const", "set", "get"]) || n(), Y.do_block && !Y.do_while) {
                    if ("TK_RESERVED" === U.type && "while" === U.text) return R.space_before_token = !0, p(), R.space_before_token = !0, void(Y.do_while = !0);
                    n(), Y.do_block = !1
                }
                if (Y.if_block)
                    if (Y.else_block || "TK_RESERVED" !== U.type || "else" !== U.text) {
                        for (; Y.mode === j.Statement;) v();
                        Y.if_block = !1, Y.else_block = !1
                    } else Y.else_block = !0;
                if ("TK_RESERVED" === U.type && ("case" === U.text || "default" === U.text && Y.in_case_statement)) return n(), (Y.case_body || ba.jslint_happy) && (r(), Y.case_body = !1), p(), Y.in_case = !0, void(Y.in_case_statement = !0);
                if ("TK_RESERVED" === U.type && "function" === U.text && ((a(Y.last_text, ["}", ";"]) || R.just_added_newline() && !a(Y.last_text, ["[", "{", ":", "=", ","])) && (R.just_added_blankline() || U.comments_before.length || (n(), n(!0))), "TK_RESERVED" === V || "TK_WORD" === V ? "TK_RESERVED" === V && a(Y.last_text, ["get", "set", "new", "return", "export", "async"]) ? R.space_before_token = !0 : "TK_RESERVED" === V && "default" === Y.last_text && "export" === W ? R.space_before_token = !0 : n() : "TK_OPERATOR" === V || "=" === Y.last_text ? R.space_before_token = !0 : (Y.multiline_frame || !u(Y.mode) && !t(Y.mode)) && n()), ("TK_COMMA" === V || "TK_START_EXPR" === V || "TK_EQUALS" === V || "TK_OPERATOR" === V) && (w() || m()), "TK_RESERVED" === U.type && a(U.text, ["function", "get", "set"])) return p(), void(Y.last_word = U.text);
                if (_ = "NONE", "TK_END_BLOCK" === V ? "TK_RESERVED" === U.type && a(U.text, ["else", "catch", "finally"]) ? "expand" === ba.brace_style || "end-expand" === ba.brace_style || "none" === ba.brace_style && U.wanted_newline ? _ = "NEWLINE" : (_ = "SPACE", R.space_before_token = !0) : _ = "NEWLINE" : "TK_SEMICOLON" === V && Y.mode === j.BlockStatement ? _ = "NEWLINE" : "TK_SEMICOLON" === V && u(Y.mode) ? _ = "SPACE" : "TK_STRING" === V ? _ = "NEWLINE" : "TK_RESERVED" === V || "TK_WORD" === V || "*" === Y.last_text && "function" === W ? _ = "SPACE" : "TK_START_BLOCK" === V ? _ = "NEWLINE" : "TK_END_EXPR" === V && (R.space_before_token = !0, _ = "NEWLINE"), "TK_RESERVED" === U.type && a(U.text, T.line_starters) && ")" !== Y.last_text && (_ = "else" === Y.last_text || "export" === Y.last_text ? "SPACE" : "NEWLINE"), "TK_RESERVED" === U.type && a(U.text, ["else", "catch", "finally"]))
                    if ("TK_END_BLOCK" !== V || "expand" === ba.brace_style || "end-expand" === ba.brace_style || "none" === ba.brace_style && U.wanted_newline) n();
                    else {
                        R.trim(!0);
                        var c = R.current_line;
                        "}" !== c.last() && n(), R.space_before_token = !0
                    }
                else "NEWLINE" === _ ? "TK_RESERVED" === V && A(Y.last_text) ? R.space_before_token = !0 : "TK_END_EXPR" !== V ? "TK_START_EXPR" === V && "TK_RESERVED" === U.type && a(U.text, ["var", "let", "const"]) || ":" === Y.last_text || ("TK_RESERVED" === U.type && "if" === U.text && "else" === Y.last_text ? R.space_before_token = !0 : n()) : "TK_RESERVED" === U.type && a(U.text, T.line_starters) && ")" !== Y.last_text && n() : Y.multiline_frame && t(Y.mode) && "," === Y.last_text && "}" === W ? n() : "SPACE" === _ && (R.space_before_token = !0);
                p(), Y.last_word = U.text, "TK_RESERVED" === U.type && "do" === U.text && (Y.do_block = !0), "TK_RESERVED" === U.type && "if" === U.text && (Y.if_block = !0)
            }

            function H() {
                for (x() && (R.space_before_token = !1); Y.mode === j.Statement && !Y.if_block && !Y.do_block;) v();
                p()
            }

            function I() {
                x() ? R.space_before_token = !0 : "TK_RESERVED" === V || "TK_WORD" === V ? R.space_before_token = !0 : "TK_COMMA" === V || "TK_START_EXPR" === V || "TK_EQUALS" === V || "TK_OPERATOR" === V ? w() || m() : n(), p()
            }

            function J() {
                x(), Y.declaration_statement && (Y.declaration_assignment = !0), R.space_before_token = !0, p(), R.space_before_token = !0
            }

            function K() {
                return Y.declaration_statement ? (u(Y.parent.mode) && (Y.declaration_assignment = !1), p(), void(Y.declaration_assignment ? (Y.declaration_assignment = !1, n(!1, !0)) : (R.space_before_token = !0, ba.comma_first && m()))) : (p(), void(Y.mode === j.ObjectLiteral || Y.mode === j.Statement && Y.parent.mode === j.ObjectLiteral ? (Y.mode === j.Statement && v(), n()) : (R.space_before_token = !0, ba.comma_first && m())))
            }

            function L() {
                if (x(), "TK_RESERVED" === V && A(Y.last_text)) return R.space_before_token = !0, void p();
                if ("*" === U.text && "TK_DOT" === V) return void p();
                if (":" === U.text && Y.in_case) return Y.case_body = !0, q(), p(), n(), void(Y.in_case = !1);
                if ("::" === U.text) return void p();
                "TK_OPERATOR" === V && m();
                var b = !0,
                    c = !0;
                a(U.text, ["--", "++", "!", "~"]) || a(U.text, ["-", "+"]) && (a(V, ["TK_START_BLOCK", "TK_START_EXPR", "TK_EQUALS", "TK_OPERATOR"]) || a(Y.last_text, T.line_starters) || "," === Y.last_text) ? (b = !1, c = !1, !U.wanted_newline || "--" !== U.text && "++" !== U.text || n(!1, !0), ";" === Y.last_text && u(Y.mode) && (b = !0), "TK_RESERVED" === V ? b = !0 : "TK_END_EXPR" === V ? b = !("]" === Y.last_text && ("--" === U.text || "++" === U.text)) : "TK_OPERATOR" === V && (b = a(U.text, ["--", "-", "++", "+"]) && a(Y.last_text, ["--", "-", "++", "+"]), a(U.text, ["+", "-"]) && a(Y.last_text, ["--", "++"]) && (c = !0)), Y.mode !== j.BlockStatement && Y.mode !== j.Statement || "{" !== Y.last_text && ";" !== Y.last_text || n()) : ":" === U.text ? 0 === Y.ternary_depth ? b = !1 : Y.ternary_depth -= 1 : "?" === U.text ? Y.ternary_depth += 1 : "*" === U.text && "TK_RESERVED" === V && "function" === Y.last_text && (b = !1, c = !1), R.space_before_token = R.space_before_token || b, p(), R.space_before_token = c
            }

            function M() {
                if (R.raw) return R.add_raw_token(U), void(U.directives && "end" === U.directives.preserve && (ba.test_output_raw || (R.raw = !1)));
                if (U.directives) return n(!1, !0), p(), "start" === U.directives.preserve && (R.raw = !0), void n(!1, !0);
                if (!i.newline.test(U.text) && !U.wanted_newline) return R.space_before_token = !0, p(), void(R.space_before_token = !0);
                var a, b = l(U.text),
                    d = !1,
                    e = !1,
                    f = U.whitespace_before,
                    g = f.length;
                for (n(!1, !0), b.length > 1 && (y(b.slice(1), "*") ? d = !0 : z(b.slice(1), f) && (e = !0)), p(b[0]), a = 1; a < b.length; a++) n(!1, !0), d ? p(" " + c(b[a])) : e && b[a].length > g ? p(b[a].substring(g)) : R.add_token(b[a]);
                n(!1, !0)
            }

            function N() {
                U.wanted_newline ? n(!1, !0) : R.trim(!0), R.space_before_token = !0, p(), n(!1, !0)
            }

            function O() {
                x(), "TK_RESERVED" === V && A(Y.last_text) ? R.space_before_token = !0 : m(")" === Y.last_text && ba.break_chained_methods), p()
            }

            function P() {
                p(), "\n" === U.text[U.text.length - 1] && n()
            }

            function Q() {
                for (; Y.mode === j.Statement;) v()
            }
            var R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca = [],
                da = "";
            for (aa = {
                    TK_START_EXPR: C,
                    TK_END_EXPR: D,
                    TK_START_BLOCK: E,
                    TK_END_BLOCK: F,
                    TK_WORD: G,
                    TK_RESERVED: G,
                    TK_SEMICOLON: H,
                    TK_STRING: I,
                    TK_EQUALS: J,
                    TK_OPERATOR: L,
                    TK_COMMA: K,
                    TK_BLOCK_COMMENT: M,
                    TK_COMMENT: N,
                    TK_DOT: O,
                    TK_UNKNOWN: P,
                    TK_EOF: Q
                }, e = e ? e : {}, ba = {}, void 0 !== e.braces_on_own_line && (ba.brace_style = e.braces_on_own_line ? "expand" : "collapse"), ba.brace_style = e.brace_style ? e.brace_style : ba.brace_style ? ba.brace_style : "collapse", "expand-strict" === ba.brace_style && (ba.brace_style = "expand"), ba.indent_size = e.indent_size ? parseInt(e.indent_size, 10) : 4, ba.indent_char = e.indent_char ? e.indent_char : " ", ba.eol = e.eol ? e.eol : "\n", ba.preserve_newlines = void 0 === e.preserve_newlines ? !0 : e.preserve_newlines, ba.break_chained_methods = void 0 === e.break_chained_methods ? !1 : e.break_chained_methods, ba.max_preserve_newlines = void 0 === e.max_preserve_newlines ? 0 : parseInt(e.max_preserve_newlines, 10), ba.space_in_paren = void 0 === e.space_in_paren ? !1 : e.space_in_paren, ba.space_in_empty_paren = void 0 === e.space_in_empty_paren ? !1 : e.space_in_empty_paren, ba.jslint_happy = void 0 === e.jslint_happy ? !1 : e.jslint_happy, ba.space_after_anon_function = void 0 === e.space_after_anon_function ? !1 : e.space_after_anon_function, ba.keep_array_indentation = void 0 === e.keep_array_indentation ? !1 : e.keep_array_indentation, ba.space_before_conditional = void 0 === e.space_before_conditional ? !0 : e.space_before_conditional, ba.unescape_strings = void 0 === e.unescape_strings ? !1 : e.unescape_strings, ba.wrap_line_length = void 0 === e.wrap_line_length ? 0 : parseInt(e.wrap_line_length, 10), ba.e4x = void 0 === e.e4x ? !1 : e.e4x, ba.end_with_newline = void 0 === e.end_with_newline ? !1 : e.end_with_newline, ba.comma_first = void 0 === e.comma_first ? !1 : e.comma_first, ba.test_output_raw = void 0 === e.test_output_raw ? !1 : e.test_output_raw, ba.jslint_happy && (ba.space_after_anon_function = !0), e.indent_with_tabs && (ba.indent_char = "	", ba.indent_size = 1), ba.eol = ba.eol.replace(/\\r/, "\r").replace(/\\n/, "\n"), X = ""; ba.indent_size > 0;) X += ba.indent_char, ba.indent_size -= 1;
            var ea = 0;
            if (d && d.length) {
                for (;
                    " " === d.charAt(ea) || "	" === d.charAt(ea);) da += d.charAt(ea), ea += 1;
                d = d.substring(ea)
            }
            V = "TK_START_BLOCK", W = "", R = new g(X, da), R.raw = ba.test_output_raw, $ = [], s(j.BlockStatement), this.beautify = function () {
                var a, b;
                for (T = new h(d, ba, X), ca = T.tokenize(), S = 0; a = B();) {
                    for (var c = 0; c < a.comments_before.length; c++) k(a.comments_before[c]);
                    k(a), W = Y.last_text, V = a.type, Y.last_text = a.text, S += 1
                }
                return b = R.get_code(), ba.end_with_newline && (b += "\n"), "\n" != ba.eol && (b = b.replace(/[\n]/g, ba.eol)), b
            }
        }

        function f(a) {
            var b = 0,
                c = -1,
                d = [],
                e = !0;
            this.set_indent = function (d) {
                b = a.baseIndentLength + d * a.indent_length, c = d
            }, this.get_character_count = function () {
                return b
            }, this.is_empty = function () {
                return e
            }, this.last = function () {
                return this._empty ? null : d[d.length - 1]
            }, this.push = function (a) {
                d.push(a), b += a.length, e = !1
            }, this.pop = function () {
                var a = null;
                return e || (a = d.pop(), b -= a.length, e = 0 === d.length), a
            }, this.remove_indent = function () {
                c > 0 && (c -= 1, b -= a.indent_length)
            }, this.trim = function () {
                for (;
                    " " === this.last();) {
                    d.pop();
                    b -= 1
                }
                e = 0 === d.length
            }, this.toString = function () {
                var b = "";
                return this._empty || (c >= 0 && (b = a.indent_cache[c]), b += d.join("")), b
            }
        }

        function g(a, b) {
            b = b || "", this.indent_cache = [b], this.baseIndentLength = b.length, this.indent_length = a.length, this.raw = !1;
            var c = [];
            this.baseIndentString = b, this.indent_string = a, this.previous_line = null, this.current_line = null, this.space_before_token = !1, this.add_outputline = function () {
                this.previous_line = this.current_line, this.current_line = new f(this), c.push(this.current_line)
            }, this.add_outputline(), this.get_line_number = function () {
                return c.length
            }, this.add_new_line = function (a) {
                return 1 === this.get_line_number() && this.just_added_newline() ? !1 : a || !this.just_added_newline() ? (this.raw || this.add_outputline(), !0) : !1
            }, this.get_code = function () {
                var a = c.join("\n").replace(/[\r\n\t ]+$/, "");
                return a
            }, this.set_indent = function (a) {
                if (c.length > 1) {
                    for (; a >= this.indent_cache.length;) this.indent_cache.push(this.indent_cache[this.indent_cache.length - 1] + this.indent_string);
                    return this.current_line.set_indent(a), !0
                }
                return this.current_line.set_indent(0), !1
            }, this.add_raw_token = function (a) {
                for (var b = 0; b < a.newlines; b++) this.add_outputline();
                this.current_line.push(a.whitespace_before), this.current_line.push(a.text), this.space_before_token = !1
            }, this.add_token = function (a) {
                this.add_space_before_token(), this.current_line.push(a)
            }, this.add_space_before_token = function () {
                this.space_before_token && !this.just_added_newline() && this.current_line.push(" "), this.space_before_token = !1
            }, this.remove_redundant_indentation = function (a) {
                if (!a.multiline_frame && a.mode !== j.ForInitializer && a.mode !== j.Conditional)
                    for (var b = a.start_line_index, d = c.length; d > b;) c[b].remove_indent(), b++
            }, this.trim = function (d) {
                for (d = void 0 === d ? !1 : d, this.current_line.trim(a, b); d && c.length > 1 && this.current_line.is_empty();) c.pop(), this.current_line = c[c.length - 1], this.current_line.trim();
                this.previous_line = c.length > 1 ? c[c.length - 2] : null
            }, this.just_added_newline = function () {
                return this.current_line.is_empty()
            }, this.just_added_blankline = function () {
                if (this.just_added_newline()) {
                    if (1 === c.length) return !0;
                    var a = c[c.length - 2];
                    return a.is_empty()
                }
                return !1
            }
        }

        function h(c, d, e) {
            function f(a) {
                if (!a.match(x)) return null;
                var b = {};
                y.lastIndex = 0;
                for (var c = y.exec(a); c;) b[c[1]] = c[2], c = y.exec(a);
                return b
            }

            function g() {
                var e, g = [];
                if (o = 0, p = "", s >= t) return ["", "TK_EOF"];
                var x;
                x = r.length ? r[r.length - 1] : new k("TK_START_BLOCK", "{");
                var y = c.charAt(s);
                for (s += 1; a(y, j);) {
                    if (i.newline.test(y) ? ("\n" !== y || "\r" !== c.charAt(s - 2)) && (o += 1, g = []) : g.push(y), s >= t) return ["", "TK_EOF"];
                    y = c.charAt(s), s += 1
                }
                if (g.length && (p = g.join("")), l.test(y)) {
                    var B = !0,
                        C = !0,
                        D = l;
                    for ("0" === y && t > s && /[Xx]/.test(c.charAt(s)) ? (B = !1, C = !1, y += c.charAt(s), s += 1, D = m) : (y = "", s -= 1); t > s && D.test(c.charAt(s));) y += c.charAt(s), s += 1, B && t > s && "." === c.charAt(s) && (y += c.charAt(s), s += 1, B = !1), C && t > s && /[Ee]/.test(c.charAt(s)) && (y += c.charAt(s), s += 1, t > s && /[+-]/.test(c.charAt(s)) && (y += c.charAt(s), s += 1), C = !1, B = !1);
                    return [y, "TK_WORD"]
                }
                if (i.isIdentifierStart(c.charCodeAt(s - 1))) {
                    if (t > s)
                        for (; i.isIdentifierChar(c.charCodeAt(s)) && (y += c.charAt(s), s += 1, s !== t););
                    return "TK_DOT" === x.type || "TK_RESERVED" === x.type && a(x.text, ["set", "get"]) || !a(y, u) ? [y, "TK_WORD"] : "in" === y ? [y, "TK_OPERATOR"] : [y, "TK_RESERVED"]
                }
                if ("(" === y || "[" === y) return [y, "TK_START_EXPR"];
                if (")" === y || "]" === y) return [y, "TK_END_EXPR"];
                if ("{" === y) return [y, "TK_START_BLOCK"];
                if ("}" === y) return [y, "TK_END_BLOCK"];
                if (";" === y) return [y, "TK_SEMICOLON"];
                if ("/" === y) {
                    var E = "";
                    if ("*" === c.charAt(s)) {
                        s += 1, v.lastIndex = s;
                        var F = v.exec(c);
                        E = "/*" + F[0], s += F[0].length;
                        var G = f(E);
                        return G && "start" === G.ignore && (z.lastIndex = s, F = z.exec(c), E += F[0], s += F[0].length), E = E.replace(i.lineBreak, "\n"), [E, "TK_BLOCK_COMMENT", G]
                    }
                    if ("/" === c.charAt(s)) {
                        s += 1, w.lastIndex = s;
                        var F = w.exec(c);
                        return E = "//" + F[0], s += F[0].length, [E, "TK_COMMENT"]
                    }
                }
                if ("`" === y || "'" === y || '"' === y || ("/" === y || d.e4x && "<" === y && c.slice(s - 1).match(/^<([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/)) && ("TK_RESERVED" === x.type && a(x.text, ["return", "case", "throw", "else", "do", "typeof", "yield"]) || "TK_END_EXPR" === x.type && ")" === x.text && x.parent && "TK_RESERVED" === x.parent.type && a(x.parent.text, ["if", "while", "for"]) || a(x.type, ["TK_COMMENT", "TK_START_EXPR", "TK_START_BLOCK", "TK_END_BLOCK", "TK_OPERATOR", "TK_EQUALS", "TK_EOF", "TK_SEMICOLON", "TK_COMMA"]))) {
                    var H = y,
                        I = !1,
                        J = !1;
                    if (e = y, "/" === H)
                        for (var K = !1; t > s && (I || K || c.charAt(s) !== H) && !i.newline.test(c.charAt(s));) e += c.charAt(s), I ? I = !1 : (I = "\\" === c.charAt(s), "[" === c.charAt(s) ? K = !0 : "]" === c.charAt(s) && (K = !1)), s += 1;
                    else if (d.e4x && "<" === H) {
                        var L = /<(\/?)([-a-zA-Z:0-9_.]+|{[^{}]*}|!\[CDATA\[[\s\S]*?\]\])(\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{.*?}))*\s*(\/?)\s*>/g,
                            M = c.slice(s - 1),
                            N = L.exec(M);
                        if (N && 0 === N.index) {
                            for (var O = N[2], P = 0; N;) {
                                var Q = !!N[1],
                                    R = N[2],
                                    S = !!N[N.length - 1] || "![CDATA[" === R.slice(0, 8);
                                if (R !== O || S || (Q ? --P : ++P), 0 >= P) break;
                                N = L.exec(M)
                            }
                            var T = N ? N.index + N[0].length : M.length;
                            return M = M.slice(0, T), s += T - 1, M = M.replace(i.lineBreak, "\n"), [M, "TK_STRING"]
                        }
                    } else
                        for (; t > s && (I || c.charAt(s) !== H && ("`" === H || !i.newline.test(c.charAt(s))));)(I || "`" === H) && i.newline.test(c.charAt(s)) ? ("\r" === c.charAt(s) && "\n" === c.charAt(s + 1) && (s += 1), e += "\n") : e += c.charAt(s), I ? (("x" === c.charAt(s) || "u" === c.charAt(s)) && (J = !0), I = !1) : I = "\\" === c.charAt(s), s += 1;
                    if (J && d.unescape_strings && (e = h(e)), t > s && c.charAt(s) === H && (e += H, s += 1, "/" === H))
                        for (; t > s && i.isIdentifierStart(c.charCodeAt(s));) e += c.charAt(s), s += 1;
                    return [e, "TK_STRING"]
                }
                if ("#" === y) {
                    if (0 === r.length && "!" === c.charAt(s)) {
                        for (e = y; t > s && "\n" !== y;) y = c.charAt(s), e += y, s += 1;
                        return [b(e) + "\n", "TK_UNKNOWN"]
                    }
                    var U = "#";
                    if (t > s && l.test(c.charAt(s))) {
                        do y = c.charAt(s), U += y, s += 1; while (t > s && "#" !== y && "=" !== y);
                        return "#" === y || ("[" === c.charAt(s) && "]" === c.charAt(s + 1) ? (U += "[]", s += 2) : "{" === c.charAt(s) && "}" === c.charAt(s + 1) && (U += "{}", s += 2)), [U, "TK_WORD"]
                    }
                }
                if ("<" === y && ("?" === c.charAt(s) || "%" === c.charAt(s))) {
                    A.lastIndex = s - 1;
                    var V = A.exec(c);
                    if (V) return y = V[0], s += y.length - 1, y = y.replace(i.lineBreak, "\n"), [y, "TK_STRING"]
                }
                if ("<" === y && "<!--" === c.substring(s - 1, s + 3)) {
                    for (s += 3, y = "<!--"; !i.newline.test(c.charAt(s)) && t > s;) y += c.charAt(s), s++;
                    return q = !0, [y, "TK_COMMENT"]
                }
                if ("-" === y && q && "-->" === c.substring(s - 1, s + 2)) return q = !1, s += 2, ["-->", "TK_COMMENT"];
                if ("." === y) return [y, "TK_DOT"];
                if (a(y, n)) {
                    for (; t > s && a(y + c.charAt(s), n) && (y += c.charAt(s), s += 1, !(s >= t)););
                    return "," === y ? [y, "TK_COMMA"] : "=" === y ? [y, "TK_EQUALS"] : [y, "TK_OPERATOR"]
                }
                return [y, "TK_UNKNOWN"]
            }

            function h(a) {
                for (var b, c = !1, d = "", e = 0, f = "", g = 0; c || e < a.length;)
                    if (b = a.charAt(e), e++, c) {
                        if (c = !1, "x" === b) f = a.substr(e, 2), e += 2;
                        else {
                            if ("u" !== b) {
                                d += "\\" + b;
                                continue
                            }
                            f = a.substr(e, 4), e += 4
                        }
                        if (!f.match(/^[0123456789abcdefABCDEF]+$/)) return a;
                        if (g = parseInt(f, 16), g >= 0 && 32 > g) {
                            d += "x" === b ? "\\x" + f : "\\u" + f;
                            continue
                        }
                        if (34 === g || 39 === g || 92 === g) d += "\\" + String.fromCharCode(g);
                        else {
                            if ("x" === b && g > 126 && 255 >= g) return a;
                            d += String.fromCharCode(g)
                        }
                    } else "\\" === b ? c = !0 : d += b;
                return d
            }
            var j = "\n\r	 ".split(""),
                l = /[0-9]/,
                m = /[0123456789abcdefABCDEF]/,
                n = "+ - * / % & ++ -- = += -= *= /= %= == === != !== > < >= <= >> << >>> >>>= >>= <<= && &= | || ! ~ , : ? ^ ^= |= :: => <%= <% %> <?= <? ?>".split(" ");
            this.line_starters = "continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export".split(",");
            var o, p, q, r, s, t, u = this.line_starters.concat(["do", "in", "else", "get", "set", "new", "catch", "finally", "typeof", "yield", "async", "await"]),
                v = /([\s\S]*?)((?:\*\/)|$)/g,
                w = /([^\n\r\u2028\u2029]*)/g,
                x = /\/\* beautify( \w+[:]\w+)+ \*\//g,
                y = / (\w+)[:](\w+)/g,
                z = /([\s\S]*?)((?:\/\*\sbeautify\signore:end\s\*\/)|$)/g,
                A = /((<\?php|<\?=)[\s\S]*?\?>)|(<%[\s\S]*?%>)/g;
            this.tokenize = function () {
                t = c.length, s = 0, q = !1, r = [];
                for (var a, b, d, e = null, f = [], h = []; !b || "TK_EOF" !== b.type;) {
                    for (d = g(), a = new k(d[1], d[0], o, p);
                        "TK_COMMENT" === a.type || "TK_BLOCK_COMMENT" === a.type || "TK_UNKNOWN" === a.type;) "TK_BLOCK_COMMENT" === a.type && (a.directives = d[2]), h.push(a), d = g(), a = new k(d[1], d[0], o, p);
                    h.length && (a.comments_before = h, h = []), "TK_START_BLOCK" === a.type || "TK_START_EXPR" === a.type ? (a.parent = b, f.push(e), e = a) : ("TK_END_BLOCK" === a.type || "TK_END_EXPR" === a.type) && e && ("]" === a.text && "[" === e.text || ")" === a.text && "(" === e.text || "}" === a.text && "{" === e.text) && (a.parent = e.parent, e = f.pop()), r.push(a), b = a
                }
                return r
            }
        }
        var i = {};
        ! function (a) {
            var b = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                c = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",
                d = new RegExp("[" + b + "]"),
                e = new RegExp("[" + b + c + "]");
            a.newline = /[\n\r\u2028\u2029]/, a.lineBreak = /\r\n|[\n\r\u2028\u2029]/g, a.isIdentifierStart = function (a) {
                return 65 > a ? 36 === a : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : a >= 170 && d.test(String.fromCharCode(a))
            }, a.isIdentifierChar = function (a) {
                return 48 > a ? 36 === a : 58 > a ? !0 : 65 > a ? !1 : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : a >= 170 && e.test(String.fromCharCode(a))
            }
        }(i);
        var j = {
                BlockStatement: "BlockStatement",
                Statement: "Statement",
                ObjectLiteral: "ObjectLiteral",
                ArrayLiteral: "ArrayLiteral",
                ForInitializer: "ForInitializer",
                Conditional: "Conditional",
                Expression: "Expression"
            },
            k = function (a, b, c, d, e, f) {
                this.type = a, this.text = b, this.comments_before = [], this.newlines = c || 0, this.wanted_newline = c > 0, this.whitespace_before = d || "", this.parent = null, this.directives = null
            };
        "function" == typeof define && define.amd ? define([], function () {
            return {
                js_beautify: d
            }
        }) : "undefined" != typeof exports ? exports.js_beautify = d : "undefined" != typeof window ? window.js_beautify = d : "undefined" != typeof global && (global.js_beautify = d)
    }(),
    function () {
        function a(b, c) {
            function d() {
                return u = b.charAt(++w), u || ""
            }

            function e(a) {
                var c = "",
                    e = w;
                return a && h(), c = b.charAt(w + 1) || "", w = e - 1, d(), c
            }

            function f(a) {
                for (var c = w; d();)
                    if ("\\" === u) d();
                    else {
                        if (-1 !== a.indexOf(u)) break;
                        if ("\n" === u) break
                    } return b.substring(c, w + 1)
            }

            function g(a) {
                var b = w,
                    c = f(a);
                return w = b - 1, d(), c
            }

            function h() {
                for (var a = ""; v.test(e());) d(), a += u;
                return a
            }

            function i() {
                var a = "";
                for (u && v.test(u) && (a = u); v.test(d());) a += u;
                return a
            }

            function j(a) {
                var c = w;
                for (a = "/" === e(), d(); d();) {
                    if (!a && "*" === u && "/" === e()) {
                        d();
                        break
                    }
                    if (a && "\n" === u) return b.substring(c, w)
                }
                return b.substring(c, w) + u
            }

            function k(a) {
                return b.substring(w - a.length, w).toLowerCase() === a
            }

            function l() {
                for (var a = 0, c = w + 1; c < b.length; c++) {
                    var d = b.charAt(c);
                    if ("{" === d) return !0;
                    if ("(" === d) a += 1;
                    else if (")" === d) {
                        if (0 == a) return !1;
                        a -= 1
                    } else if (";" === d || "}" === d) return !1
                }
                return !1
            }

            function m() {
                A++, y += z
            }

            function n() {
                A--, y = y.slice(0, -o)
            }
            c = c || {}, b = b || "", b = b.replace(/\r\n|[\r\u2028\u2029]/g, "\n");
            var o = c.indent_size || 4,
                p = c.indent_char || " ",
                q = void 0 === c.selector_separator_newline ? !0 : c.selector_separator_newline,
                r = void 0 === c.end_with_newline ? !1 : c.end_with_newline,
                s = void 0 === c.newline_between_rules ? !0 : c.newline_between_rules,
                t = c.eol ? c.eol : "\n";
            "string" == typeof o && (o = parseInt(o, 10)), c.indent_with_tabs && (p = "	", o = 1), t = t.replace(/\\r/, "\r").replace(/\\n/, "\n");
            var u, v = /^\s+$/,
                w = -1,
                x = 0,
                y = b.match(/^[\t ]*/)[0],
                z = new Array(o + 1).join(p),
                A = 0,
                B = 0,
                C = {};
            C["{"] = function (a) {
                C.singleSpace(), D.push(a), C.newLine()
            }, C["}"] = function (a) {
                C.newLine(), D.push(a), C.newLine()
            }, C._lastCharWhitespace = function () {
                return v.test(D[D.length - 1])
            }, C.newLine = function (a) {
                D.length && (a || "\n" === D[D.length - 1] || C.trim(), D.push("\n"), y && D.push(y))
            }, C.singleSpace = function () {
                D.length && !C._lastCharWhitespace() && D.push(" ")
            }, C.preserveSingleSpace = function () {
                K && C.singleSpace()
            }, C.trim = function () {
                for (; C._lastCharWhitespace();) D.pop()
            };
            for (var D = [], E = !1, F = !1, G = !1, H = "", I = "";;) {
                var J = i(),
                    K = "" !== J,
                    L = -1 !== J.indexOf("\n");
                if (I = H, H = u, !u) break;
                if ("/" === u && "*" === e()) {
                    var M = 0 === A;
                    (L || M) && C.newLine(), D.push(j()), C.newLine(), M && C.newLine(!0)
                } else if ("/" === u && "/" === e()) L || "{" === I || C.trim(), C.singleSpace(), D.push(j()), C.newLine();
                else if ("@" === u) {
                    C.preserveSingleSpace(), D.push(u);
                    var N = g(": ,;{}()[]/='\"");
                    N.match(/[ :]$/) && (d(), N = f(": ").replace(/\s$/, ""), D.push(N), C.singleSpace()), N = N.replace(/\s$/, ""), N in a.NESTED_AT_RULE && (B += 1, N in a.CONDITIONAL_GROUP_RULE && (G = !0))
                } else "#" === u && "{" === e() ? (C.preserveSingleSpace(), D.push(f("}"))) : "{" === u ? "}" === e(!0) ? (h(), d(), C.singleSpace(), D.push("{}"), C.newLine(), s && 0 === A && C.newLine(!0)) : (m(), C["{"](u), G ? (G = !1, E = A > B) : E = A >= B) : "}" === u ? (n(), C["}"](u), E = !1, F = !1, B && B--, s && 0 === A && C.newLine(!0)) : ":" === u ? (h(), !E && !G || k("&") || l() ? ":" === e() ? (d(), D.push("::")) : D.push(":") : (F = !0, D.push(":"), C.singleSpace())) : '"' === u || "'" === u ? (C.preserveSingleSpace(), D.push(f(u))) : ";" === u ? (F = !1, D.push(u), C.newLine()) : "(" === u ? k("url") ? (D.push(u), h(), d() && (")" !== u && '"' !== u && "'" !== u ? D.push(f(")")) : w--)) : (x++, C.preserveSingleSpace(), D.push(u), h()) : ")" === u ? (D.push(u), x--) : "," === u ? (D.push(u), h(), q && !F && 1 > x ? C.newLine() : C.singleSpace()) : "]" === u ? D.push(u) : "[" === u ? (C.preserveSingleSpace(), D.push(u)) : "=" === u ? (h(), u = "=", D.push(u)) : (C.preserveSingleSpace(), D.push(u))
            }
            var O = "";
            return y && (O += y), O += D.join("").replace(/[\r\n\t ]+$/, ""), r && (O += "\n"), "\n" != t && (O = O.replace(/[\n]/g, t)), O
        }
        a.NESTED_AT_RULE = {
            "@page": !0,
            "@font-face": !0,
            "@keyframes": !0,
            "@media": !0,
            "@supports": !0,
            "@document": !0
        }, a.CONDITIONAL_GROUP_RULE = {
            "@media": !0,
            "@supports": !0,
            "@document": !0
        }, "function" == typeof define && define.amd ? define([], function () {
            return {
                css_beautify: a
            }
        }) : "undefined" != typeof exports ? exports.css_beautify = a : "undefined" != typeof window ? window.css_beautify = a : "undefined" != typeof global && (global.css_beautify = a)
    }(),
    function () {
        function a(a) {
            return a.replace(/^\s+/g, "");
        }

        function b(a) {
            return a.replace(/\s+$/g, "")
        }

        function c(c, d, e, f) {
            function g() {
                return this.pos = 0, this.token = "", this.current_mode = "CONTENT", this.tags = {
                    parent: "parent1",
                    parentcount: 1,
                    parent1: ""
                }, this.tag_type = "", this.token_text = this.last_token = this.last_text = this.token_type = "", this.newlines = 0, this.indent_content = i, this.Utils = {
                    whitespace: "\n\r	 ".split(""),
                    single_token: "br,input,link,meta,source,!doctype,basefont,base,area,hr,wbr,param,img,isindex,embed".split(","),
                    extra_liners: u,
                    in_array: function (a, b) {
                        for (var c = 0; c < b.length; c++)
                            if (a === b[c]) return !0;
                        return !1
                    }
                }, this.is_whitespace = function (a) {
                    for (var b = 0; b < a.length; a++)
                        if (!this.Utils.in_array(a.charAt(b), this.Utils.whitespace)) return !1;
                    return !0
                }, this.traverse_whitespace = function () {
                    var a = "";
                    if (a = this.input.charAt(this.pos), this.Utils.in_array(a, this.Utils.whitespace)) {
                        for (this.newlines = 0; this.Utils.in_array(a, this.Utils.whitespace);) o && "\n" === a && this.newlines <= p && (this.newlines += 1), this.pos++, a = this.input.charAt(this.pos);
                        return !0
                    }
                    return !1
                }, this.space_or_wrap = function (a) {
                    this.line_char_count >= this.wrap_line_length ? (this.print_newline(!1, a), this.print_indentation(a)) : (this.line_char_count++, a.push(" "))
                }, this.get_content = function () {
                    for (var a = "", b = [];
                        "<" !== this.input.charAt(this.pos);) {
                        if (this.pos >= this.input.length) return b.length ? b.join("") : ["", "TK_EOF"];
                        if (this.traverse_whitespace()) this.space_or_wrap(b);
                        else {
                            if (q) {
                                var c = this.input.substr(this.pos, 3);
                                if ("{{#" === c || "{{/" === c) break;
                                if ("{{!" === c) return [this.get_tag(), "TK_TAG_HANDLEBARS_COMMENT"];
                                if ("{{" === this.input.substr(this.pos, 2) && "{{else}}" === this.get_tag(!0)) break
                            }
                            a = this.input.charAt(this.pos), this.pos++, this.line_char_count++, b.push(a)
                        }
                    }
                    return b.length ? b.join("") : ""
                }, this.get_contents_to = function (a) {
                    if (this.pos === this.input.length) return ["", "TK_EOF"];
                    var b = "",
                        c = new RegExp("</" + a + "\\s*>", "igm");
                    c.lastIndex = this.pos;
                    var d = c.exec(this.input),
                        e = d ? d.index : this.input.length;
                    return this.pos < e && (b = this.input.substring(this.pos, e), this.pos = e), b
                }, this.record_tag = function (a) {
                    this.tags[a + "count"] ? (this.tags[a + "count"]++, this.tags[a + this.tags[a + "count"]] = this.indent_level) : (this.tags[a + "count"] = 1, this.tags[a + this.tags[a + "count"]] = this.indent_level), this.tags[a + this.tags[a + "count"] + "parent"] = this.tags.parent, this.tags.parent = a + this.tags[a + "count"]
                }, this.retrieve_tag = function (a) {
                    if (this.tags[a + "count"]) {
                        for (var b = this.tags.parent; b && a + this.tags[a + "count"] !== b;) b = this.tags[b + "parent"];
                        b && (this.indent_level = this.tags[a + this.tags[a + "count"]], this.tags.parent = this.tags[b + "parent"]), delete this.tags[a + this.tags[a + "count"] + "parent"], delete this.tags[a + this.tags[a + "count"]], 1 === this.tags[a + "count"] ? delete this.tags[a + "count"] : this.tags[a + "count"]--
                    }
                }, this.indent_to_tag = function (a) {
                    if (this.tags[a + "count"]) {
                        for (var b = this.tags.parent; b && a + this.tags[a + "count"] !== b;) b = this.tags[b + "parent"];
                        b && (this.indent_level = this.tags[a + this.tags[a + "count"]])
                    }
                }, this.get_tag = function (a) {
                    var b, c, d, e = "",
                        f = [],
                        g = "",
                        h = !1,
                        i = !0,
                        j = this.pos,
                        l = this.line_char_count;
                    a = void 0 !== a ? a : !1;
                    do {
                        if (this.pos >= this.input.length) return a && (this.pos = j, this.line_char_count = l), f.length ? f.join("") : ["", "TK_EOF"];
                        if (e = this.input.charAt(this.pos), this.pos++, this.Utils.in_array(e, this.Utils.whitespace)) h = !0;
                        else {
                            if (("'" === e || '"' === e) && (e += this.get_unformatted(e), h = !0), "=" === e && (h = !1), f.length && "=" !== f[f.length - 1] && ">" !== e && h) {
                                if (this.space_or_wrap(f), h = !1, !i && "force" === r && "/" !== e) {
                                    this.print_newline(!0, f), this.print_indentation(f);
                                    for (var m = 0; s > m; m++) f.push(k)
                                }
                                for (var o = 0; o < f.length; o++)
                                    if (" " === f[o]) {
                                        i = !1;
                                        break
                                    }
                            }
                            if (q && "<" === d && e + this.input.charAt(this.pos) === "{{" && (e += this.get_unformatted("}}"), f.length && " " !== f[f.length - 1] && "<" !== f[f.length - 1] && (e = " " + e), h = !0), "<" !== e || d || (b = this.pos - 1, d = "<"), q && !d && f.length >= 2 && "{" === f[f.length - 1] && "{" === f[f.length - 2] && (b = "#" === e || "/" === e || "!" === e ? this.pos - 3 : this.pos - 2, d = "{"), this.line_char_count++, f.push(e), f[1] && ("!" === f[1] || "?" === f[1] || "%" === f[1])) {
                                f = [this.get_comment(b)];
                                break
                            }
                            if (q && f[1] && "{" === f[1] && f[2] && "!" === f[2]) {
                                f = [this.get_comment(b)];
                                break
                            }
                            if (q && "{" === d && f.length > 2 && "}" === f[f.length - 2] && "}" === f[f.length - 1]) break
                        }
                    } while (">" !== e);
                    var p, t, u = f.join("");
                    p = -1 !== u.indexOf(" ") ? u.indexOf(" ") : "{" === u.charAt(0) ? u.indexOf("}") : u.indexOf(">"), t = "<" !== u.charAt(0) && q ? "#" === u.charAt(2) ? 3 : 2 : 1;
                    var v = u.substring(t, p).toLowerCase();
                    return "/" === u.charAt(u.length - 2) || this.Utils.in_array(v, this.Utils.single_token) ? a || (this.tag_type = "SINGLE") : q && "{" === u.charAt(0) && "else" === v ? a || (this.indent_to_tag("if"), this.tag_type = "HANDLEBARS_ELSE", this.indent_content = !0, this.traverse_whitespace()) : this.is_unformatted(v, n) ? (g = this.get_unformatted("</" + v + ">", u), f.push(g), c = this.pos - 1, this.tag_type = "SINGLE") : "script" === v && (-1 === u.search("type") || u.search("type") > -1 && u.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/) > -1) ? a || (this.record_tag(v), this.tag_type = "SCRIPT") : "style" === v && (-1 === u.search("type") || u.search("type") > -1 && u.search("text/css") > -1) ? a || (this.record_tag(v), this.tag_type = "STYLE") : "!" === v.charAt(0) ? a || (this.tag_type = "SINGLE", this.traverse_whitespace()) : a || ("/" === v.charAt(0) ? (this.retrieve_tag(v.substring(1)), this.tag_type = "END") : (this.record_tag(v), "html" !== v.toLowerCase() && (this.indent_content = !0), this.tag_type = "START"), this.traverse_whitespace() && this.space_or_wrap(f), this.Utils.in_array(v, this.Utils.extra_liners) && (this.print_newline(!1, this.output), this.output.length && "\n" !== this.output[this.output.length - 2] && this.print_newline(!0, this.output))), a && (this.pos = j, this.line_char_count = l), f.join("")
                }, this.get_comment = function (a) {
                    var b = "",
                        c = ">",
                        d = !1;
                    for (this.pos = a, input_char = this.input.charAt(this.pos), this.pos++; this.pos <= this.input.length && (b += input_char, b.charAt(b.length - 1) !== c.charAt(c.length - 1) || -1 === b.indexOf(c));) !d && b.length < 10 && (0 === b.indexOf("<![if") ? (c = "<![endif]>", d = !0) : 0 === b.indexOf("<![cdata[") ? (c = "]]>", d = !0) : 0 === b.indexOf("<![") ? (c = "]>", d = !0) : 0 === b.indexOf("<!--") ? (c = "-->", d = !0) : 0 === b.indexOf("{{!") ? (c = "}}", d = !0) : 0 === b.indexOf("<?") ? (c = "?>", d = !0) : 0 === b.indexOf("<%") && (c = "%>", d = !0)), input_char = this.input.charAt(this.pos), this.pos++;
                    return b
                }, this.get_unformatted = function (a, b) {
                    if (b && -1 !== b.toLowerCase().indexOf(a)) return "";
                    var c = "",
                        d = "",
                        e = 0,
                        f = !0;
                    do {
                        if (this.pos >= this.input.length) return d;
                        if (c = this.input.charAt(this.pos), this.pos++, this.Utils.in_array(c, this.Utils.whitespace)) {
                            if (!f) {
                                this.line_char_count--;
                                continue
                            }
                            if ("\n" === c || "\r" === c) {
                                d += "\n", this.line_char_count = 0;
                                continue
                            }
                        }
                        d += c, this.line_char_count++, f = !0, q && "{" === c && d.length && "{" === d.charAt(d.length - 2) && (d += this.get_unformatted("}}"), e = d.length)
                    } while (-1 === d.toLowerCase().indexOf(a, e));
                    return d
                }, this.get_token = function () {
                    var a;
                    if ("TK_TAG_SCRIPT" === this.last_token || "TK_TAG_STYLE" === this.last_token) {
                        var b = this.last_token.substr(7);
                        return a = this.get_contents_to(b), "string" != typeof a ? a : [a, "TK_" + b]
                    }
                    if ("CONTENT" === this.current_mode) return a = this.get_content(), "string" != typeof a ? a : [a, "TK_CONTENT"];
                    if ("TAG" === this.current_mode) {
                        if (a = this.get_tag(), "string" != typeof a) return a;
                        var c = "TK_TAG_" + this.tag_type;
                        return [a, c]
                    }
                }, this.get_full_indent = function (a) {
                    return a = this.indent_level + a || 0, 1 > a ? "" : Array(a + 1).join(this.indent_string)
                }, this.is_unformatted = function (a, b) {
                    if (!this.Utils.in_array(a, b)) return !1;
                    if ("a" !== a.toLowerCase() || !this.Utils.in_array("a", b)) return !0;
                    var c = this.get_tag(!0),
                        d = (c || "").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);
                    return !d || this.Utils.in_array(d, b) ? !0 : !1
                }, this.printer = function (c, d, e, f, g) {
                    this.input = c || "", this.input = this.input.replace(/\r\n|[\r\u2028\u2029]/g, "\n"), this.output = [], this.indent_character = d, this.indent_string = "", this.indent_size = e, this.brace_style = g, this.indent_level = 0, this.wrap_line_length = f, this.line_char_count = 0;
                    for (var h = 0; h < this.indent_size; h++) this.indent_string += this.indent_character;
                    this.print_newline = function (a, c) {
                        this.line_char_count = 0, c && c.length && (a || "\n" !== c[c.length - 1]) && ("\n" !== c[c.length - 1] && (c[c.length - 1] = b(c[c.length - 1])), c.push("\n"))
                    }, this.print_indentation = function (a) {
                        for (var b = 0; b < this.indent_level; b++) a.push(this.indent_string), this.line_char_count += this.indent_string.length
                    }, this.print_token = function (b) {
                        (!this.is_whitespace(b) || this.output.length) && ((b || "" !== b) && this.output.length && "\n" === this.output[this.output.length - 1] && (this.print_indentation(this.output), b = a(b)), this.print_token_raw(b))
                    }, this.print_token_raw = function (a) {
                        this.newlines > 0 && (a = b(a)), a && "" !== a && (a.length > 1 && "\n" === a.charAt(a.length - 1) ? (this.output.push(a.slice(0, -1)), this.print_newline(!1, this.output)) : this.output.push(a));
                        for (var c = 0; c < this.newlines; c++) this.print_newline(c > 0, this.output);
                        this.newlines = 0
                    }, this.indent = function () {
                        this.indent_level++
                    }, this.unindent = function () {
                        this.indent_level > 0 && this.indent_level--
                    }
                }, this
            }
            var h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
            for (d = d || {}, void 0 !== d.wrap_line_length && 0 !== parseInt(d.wrap_line_length, 10) || void 0 === d.max_char || 0 === parseInt(d.max_char, 10) || (d.wrap_line_length = d.max_char), i = void 0 === d.indent_inner_html ? !1 : d.indent_inner_html, j = void 0 === d.indent_size ? 4 : parseInt(d.indent_size, 10), k = void 0 === d.indent_char ? " " : d.indent_char, m = void 0 === d.brace_style ? "collapse" : d.brace_style, l = 0 === parseInt(d.wrap_line_length, 10) ? 32786 : parseInt(d.wrap_line_length || 250, 10), n = d.unformatted || ["a", "span", "img", "bdo", "em", "strong", "dfn", "code", "samp", "kbd", "var", "cite", "abbr", "acronym", "q", "sub", "sup", "tt", "i", "b", "big", "small", "u", "s", "strike", "font", "ins", "del", "pre", "address", "dt", "h1", "h2", "h3", "h4", "h5", "h6"], o = void 0 === d.preserve_newlines ? !0 : d.preserve_newlines, p = o ? isNaN(parseInt(d.max_preserve_newlines, 10)) ? 32786 : parseInt(d.max_preserve_newlines, 10) : 0, q = void 0 === d.indent_handlebars ? !1 : d.indent_handlebars, r = void 0 === d.wrap_attributes ? "auto" : d.wrap_attributes, s = void 0 === d.wrap_attributes_indent_size ? j : parseInt(d.wrap_attributes_indent_size, 10) || j, t = void 0 === d.end_with_newline ? !1 : d.end_with_newline, u = "object" == typeof d.extra_liners && d.extra_liners ? d.extra_liners.concat() : "string" == typeof d.extra_liners ? d.extra_liners.split(",") : "head,body,/html".split(","), v = d.eol ? d.eol : "\n", d.indent_with_tabs && (k = "	", j = 1), v = v.replace(/\\r/, "\r").replace(/\\n/, "\n"), h = new g, h.printer(c, k, j, l, m);;) {
                var w = h.get_token();
                if (h.token_text = w[0], h.token_type = w[1], "TK_EOF" === h.token_type) break;
                switch (h.token_type) {
                    case "TK_TAG_START":
                        h.print_newline(!1, h.output), h.print_token(h.token_text), h.indent_content && (h.indent(), h.indent_content = !1), h.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_STYLE":
                    case "TK_TAG_SCRIPT":
                        h.print_newline(!1, h.output), h.print_token(h.token_text), h.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_END":
                        if ("TK_CONTENT" === h.last_token && "" === h.last_text) {
                            var x = h.token_text.match(/\w+/)[0],
                                y = null;
                            h.output.length && (y = h.output[h.output.length - 1].match(/(?:<|{{#)\s*(\w+)/)), (null === y || y[1] !== x && !h.Utils.in_array(y[1], n)) && h.print_newline(!1, h.output)
                        }
                        h.print_token(h.token_text), h.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_SINGLE":
                        var z = h.token_text.match(/^\s*<([a-z-]+)/i);
                        z && h.Utils.in_array(z[1], n) || h.print_newline(!1, h.output), h.print_token(h.token_text), h.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_HANDLEBARS_ELSE":
                        h.print_token(h.token_text), h.indent_content && (h.indent(), h.indent_content = !1), h.current_mode = "CONTENT";
                        break;
                    case "TK_TAG_HANDLEBARS_COMMENT":
                        h.print_token(h.token_text), h.current_mode = "TAG";
                        break;
                    case "TK_CONTENT":
                        h.print_token(h.token_text), h.current_mode = "TAG";
                        break;
                    case "TK_STYLE":
                    case "TK_SCRIPT":
                        if ("" !== h.token_text) {
                            h.print_newline(!1, h.output);
                            var A, B = h.token_text,
                                C = 1;
                            "TK_SCRIPT" === h.token_type ? A = "function" == typeof e && e : "TK_STYLE" === h.token_type && (A = "function" == typeof f && f), "keep" === d.indent_scripts ? C = 0 : "separate" === d.indent_scripts && (C = -h.indent_level);
                            var D = h.get_full_indent(C);
                            if (A) {
                                var E = function () {
                                    this.eol = "\n"
                                };
                                E.prototype = d;
                                var F = new E;
                                B = A(B.replace(/^\s*/, D), F)
                            } else {
                                var G = B.match(/^\s*/)[0],
                                    H = G.match(/[^\n\r]*$/)[0].split(h.indent_string).length - 1,
                                    I = h.get_full_indent(C - H);
                                B = B.replace(/^\s*/, D).replace(/\r\n|\r|\n/g, "\n" + I).replace(/\s+$/, "")
                            }
                            B && (h.print_token_raw(B), h.print_newline(!0, h.output))
                        }
                        h.current_mode = "TAG";
                        break;
                    default:
                        "" !== h.token_text && h.print_token(h.token_text)
                }
                h.last_token = h.token_type, h.last_text = h.token_text
            }
            var J = h.output.join("").replace(/[\r\n\t ]+$/, "");
            return t && (J += "\n"), "\n" != v && (J = J.replace(/[\n]/g, v)), J
        }
        if ("function" == typeof define && define.amd) define(["require", "./beautify", "./beautify-css"], function (a) {
            var b = a("./beautify"),
                d = a("./beautify-css");
            return {
                html_beautify: function (a, e) {
                    return c(a, e, b.js_beautify, d.css_beautify)
                }
            }
        });
        else if ("undefined" != typeof exports) {
            var d = require("./beautify.js"),
                e = require("./beautify-css.js");
            exports.html_beautify = function (a, b) {
                return c(a, b, d.js_beautify, e.css_beautify)
            }
        } else "undefined" != typeof window ? window.html_beautify = function (a, b) {
            return c(a, b, window.js_beautify, window.css_beautify)
        } : "undefined" != typeof global && (global.html_beautify = function (a, b) {
            return c(a, b, global.js_beautify, global.css_beautify)
        })
    }(),
    function (a) {
        function b(a) {
            var b = "    ";
            b = isNaN(parseInt(a)) ? a : new Array(a + 1).join(" ");
            for (var c = ["\n"], d = 0; 100 > d; d++) c.push(c[d] + b);
            return c
        }

        function c(a, b) {
            return b - (a.replace(/\(/g, "").length - a.replace(/\)/g, "").length)
        }

        function d(a, b) {
            return a.replace(/\s{1,}/g, " ").replace(/ AND /gi, "~::~" + b + b + "AND ").replace(/ BETWEEN /gi, "~::~" + b + "BETWEEN ").replace(/ CASE /gi, "~::~" + b + "CASE ").replace(/ ELSE /gi, "~::~" + b + "ELSE ").replace(/ END /gi, "~::~" + b + "END ").replace(/ FROM /gi, "~::~FROM ").replace(/ GROUP\s{1,}BY/gi, "~::~GROUP BY ").replace(/ HAVING /gi, "~::~HAVING ").replace(/ IN /gi, " IN ").replace(/ JOIN /gi, "~::~JOIN ").replace(/ CROSS~::~{1,}JOIN /gi, "~::~CROSS JOIN ").replace(/ INNER~::~{1,}JOIN /gi, "~::~INNER JOIN ").replace(/ LEFT~::~{1,}JOIN /gi, "~::~LEFT JOIN ").replace(/ RIGHT~::~{1,}JOIN /gi, "~::~RIGHT JOIN ").replace(/ ON /gi, "~::~" + b + "ON ").replace(/ OR /gi, "~::~" + b + b + "OR ").replace(/ ORDER\s{1,}BY/gi, "~::~ORDER BY ").replace(/ OVER /gi, "~::~" + b + "OVER ").replace(/\(\s{0,}SELECT /gi, "~::~(SELECT ").replace(/\)\s{0,}SELECT /gi, ")~::~SELECT ").replace(/ THEN /gi, " THEN~::~" + b).replace(/ UNION /gi, "~::~UNION~::~").replace(/ USING /gi, "~::~USING ").replace(/ WHEN /gi, "~::~" + b + "WHEN ").replace(/ WHERE /gi, "~::~WHERE ").replace(/ WITH /gi, "~::~WITH ").replace(/ ALL /gi, " ALL ").replace(/ AS /gi, " AS ").replace(/ ASC /gi, " ASC ").replace(/ DESC /gi, " DESC ").replace(/ DISTINCT /gi, " DISTINCT ").replace(/ EXISTS /gi, " EXISTS ").replace(/ NOT /gi, " NOT ").replace(/ NULL /gi, " NULL ").replace(/ LIKE /gi, " LIKE ").replace(/\s{0,}SELECT /gi, "SELECT ").replace(/\s{0,}UPDATE /gi, "UPDATE ").replace(/ SET /gi, " SET ").replace(/~::~{1,}/g, "~::~").split("~::~")
        }
        var e = function (b) {
            this.init(b);
            var c = this.options.method;
            a.isFunction(this[c]) || a.error("'" + c + "' is not a Formatter method."), this.format = function (a) {
                return this[this.options.method].call(this, a)
            }
        };
        e.prototype = {
            options: {},
            init: function (c) {
                this.options = a.extend({}, a.fn.format.defaults, c), this.step = this.options.step, this.preserveComments = this.options.preserveComments, this.shift = b(this.step)
            },
            xml: function (a) {
                var b = a.replace(/>\s{0,}</g, "><").replace(/</g, "~::~<").replace(/\s*xmlns\:/g, "~::~xmlns:").replace(/\s*xmlns\=/g, "~::~xmlns=").split("~::~"),
                    c = b.length,
                    d = !1,
                    e = 0,
                    f = "",
                    g = 0;
                for (g = 0; c > g; g++) b[g].search(/<!/) > -1 ? (f += this.shift[e] + b[g], d = !0, (b[g].search(/-->/) > -1 || b[g].search(/\]>/) > -1 || b[g].search(/!DOCTYPE/) > -1) && (d = !1)) : b[g].search(/-->/) > -1 || b[g].search(/\]>/) > -1 ? (f += b[g], d = !1) : /^<\w/.exec(b[g - 1]) && /^<\/\w/.exec(b[g]) && /^<[\w:\-\.\,]+/.exec(b[g - 1]) == /^<\/[\w:\-\.\,]+/.exec(b[g])[0].replace("/", "") ? (f += b[g], d || e--) : b[g].search(/<\w/) > -1 && -1 == b[g].search(/<\//) && -1 == b[g].search(/\/>/) ? f = f += d ? b[g] : this.shift[e++] + b[g] : b[g].search(/<\w/) > -1 && b[g].search(/<\//) > -1 ? f = f += d ? b[g] : this.shift[e] + b[g] : b[g].search(/<\//) > -1 ? f = f += d ? b[g] : this.shift[--e] + b[g] : b[g].search(/\/>/) > -1 ? f = f += d ? b[g] : this.shift[e] + b[g] : f += b[g].search(/<\?/) > -1 ? this.shift[e] + b[g] : b[g].search(/xmlns\:/) > -1 || b[g].search(/xmlns\=/) > -1 ? this.shift[e] + b[g] : b[g];
                return "\n" == f[0] ? f.slice(1) : f
            },
            xmlmin: function (a) {
                var b = this.preserveComments ? a : a.replace(/\<![ \r\n\t]*(--([^\-]|[\r\n]|-[^\-])*--[ \r\n\t]*)\>/g, "").replace(/[ \r\n\t]{1,}xmlns/g, " xmlns");
                return b.replace(/>\s{0,}</g, "><")
            },
            json: function (a) {
                return "undefined" == typeof JSON ? a : "string" == typeof a ? JSON.stringify(JSON.parse(a), null, this.step) : "object" == typeof a ? JSON.stringify(a, null, this.step) : a
            },
            jsonmin: function (a) {
                return "undefined" == typeof JSON ? a : JSON.stringify(JSON.parse(a), null, 0)
            },
            css: function (a) {
                var b = a.replace(/\s{1,}/g, " ").replace(/\{/g, "{~::~").replace(/\}/g, "~::~}~::~").replace(/\;/g, ";~::~").replace(/\/\*/g, "~::~/*").replace(/\*\//g, "*/~::~").replace(/~::~\s{0,}~::~/g, "~::~").split("~::~"),
                    c = b.length,
                    d = 0,
                    e = "",
                    f = 0;
                for (f = 0; c > f; f++) e += /\{/.exec(b[f]) ? this.shift[d++] + b[f] : /\}/.exec(b[f]) ? this.shift[--d] + b[f] : /\*\\/.exec(b[f]) ? this.shift[d] + b[f] : this.shift[d] + b[f];
                return e.replace(/^\n{1,}/, "")
            },
            cssmin: function (a) {
                var b = this.preserveComments ? a : a.replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g, "");
                return b.replace(/\s{1,}/g, " ").replace(/\{\s{1,}/g, "{").replace(/\}\s{1,}/g, "}").replace(/\;\s{1,}/g, ";").replace(/\/\*\s{1,}/g, "/*").replace(/\*\/\s{1,}/g, "*/")
            },
            sql: function (a) {
                var b = a.replace(/\s{1,}/g, " ").replace(/\'/gi, "~::~'").split("~::~"),
                    e = b.length,
                    f = [],
                    g = 0,
                    h = this.step,
                    i = 0,
                    j = "",
                    k = 0;
                for (k = 0; e > k; k++) f = k % 2 ? f.concat(b[k]) : f.concat(d(b[k], h));
                for (e = f.length, k = 0; e > k; k++) i = c(f[k], i), /\s{0,}\s{0,}SELECT\s{0,}/.exec(f[k]) && (f[k] = f[k].replace(/\,/g, ",\n" + h + h)), /\s{0,}\s{0,}SET\s{0,}/.exec(f[k]) && (f[k] = f[k].replace(/\,/g, ",\n" + h + h)), /\s{0,}\(\s{0,}SELECT\s{0,}/.exec(f[k]) ? (g++, j += this.shift[g] + f[k]) : /\'/.exec(f[k]) ? (1 > i && g && g--, j += f[k]) : (j += this.shift[g] + f[k], 1 > i && g && g--);
                return j = j.replace(/^\n{1,}/, "").replace(/\n{1,}/g, "\n")
            },
            sqlmin: function (a) {
                return a.replace(/\s{1,}/g, " ").replace(/\s{1,}\(/, "(").replace(/\s{1,}\)/, ")")
            }
        }, a.fn.format = function (b) {
            var c = new e(b);
            return this.each(function () {
                var b = a(this),
                    d = b.val();
                d = c.format(d), b.val(d)
            })
        }, a.format = function (a, b) {
            var c = new e(b);
            return c.format(a)
        }, a.fn.format.defaults = {
            method: "xml",
            step: "    ",
            preserveComments: !1
        }
    }(jQuery),
    function (a) {
        "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
    }(function (a) {
        function b(b, d) {
            var e, f, g, h = b.nodeName.toLowerCase();
            return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
        }

        function c(b) {
            return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function () {
                return "hidden" === a.css(this, "visibility")
            }).length
        }
        a.ui = a.ui || {}, a.extend(a.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), a.fn.extend({
            scrollParent: function (b) {
                var c = this.css("position"),
                    d = "absolute" === c,
                    e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    f = this.parents().filter(function () {
                        var b = a(this);
                        return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
            },
            uniqueId: function () {
                var a = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++a)
                    })
                }
            }(),
            removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
                })
            }
        }), a.extend(a.expr[":"], {
            data: a.expr.createPseudo ? a.expr.createPseudo(function (b) {
                return function (c) {
                    return !!a.data(c, b)
                }
            }) : function (b, c, d) {
                return !!a.data(b, d[3])
            },
            focusable: function (c) {
                return b(c, !isNaN(a.attr(c, "tabindex")))
            },
            tabbable: function (c) {
                var d = a.attr(c, "tabindex"),
                    e = isNaN(d);
                return (e || d >= 0) && b(c, !e)
            }
        }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function (b, c) {
            function d(b, c, d, f) {
                return a.each(e, function () {
                    c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
                }), c
            }
            var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
                f = c.toLowerCase(),
                g = {
                    innerWidth: a.fn.innerWidth,
                    innerHeight: a.fn.innerHeight,
                    outerWidth: a.fn.outerWidth,
                    outerHeight: a.fn.outerHeight
                };
            a.fn["inner" + c] = function (b) {
                return void 0 === b ? g["inner" + c].call(this) : this.each(function () {
                    a(this).css(f, d(this, b) + "px")
                })
            }, a.fn["outer" + c] = function (b, e) {
                return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function () {
                    a(this).css(f, d(this, b, !0, e) + "px")
                })
            }
        }), a.fn.addBack || (a.fn.addBack = function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function (b) {
            return function (c) {
                return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
            }
        }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
            focus: function (b) {
                return function (c, d) {
                    return "number" == typeof c ? this.each(function () {
                        var b = this;
                        setTimeout(function () {
                            a(b).focus(), d && d.call(b)
                        }, c)
                    }) : b.apply(this, arguments)
                }
            }(a.fn.focus),
            disableSelection: function () {
                var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(a + ".ui-disableSelection", function (a) {
                        a.preventDefault()
                    })
                }
            }(),
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function (b) {
                if (void 0 !== b) return this.css("zIndex", b);
                if (this.length)
                    for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                        if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                        e = e.parent()
                    }
                return 0
            }
        }), a.ui.plugin = {
            add: function (b, c, d) {
                var e, f = a.ui[b].prototype;
                for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
            },
            call: function (a, b, c, d) {
                var e, f = a.plugins[b];
                if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                    for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
            }
        };
        var d = 0,
            e = Array.prototype.slice;
        a.cleanData = function (b) {
            return function (c) {
                var d, e, f;
                for (f = 0; null != (e = c[f]); f++) try {
                    d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
                } catch (g) {}
                b(c)
            }
        }(a.cleanData), a.widget = function (b, c, d) {
            var e, f, g, h, i = {},
                j = b.split(".")[0];
            return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function (b) {
                return !!a.data(b, e)
            }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function (a, b) {
                return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
            }, a.extend(g, f, {
                version: d.version,
                _proto: a.extend({}, d),
                _childConstructors: []
            }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function (b, d) {
                return a.isFunction(d) ? void(i[b] = function () {
                    var a = function () {
                            return c.prototype[b].apply(this, arguments)
                        },
                        e = function (a) {
                            return c.prototype[b].apply(this, a)
                        };
                    return function () {
                        var b, c = this._super,
                            f = this._superApply;
                        return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                    }
                }()) : void(i[b] = d)
            }), g.prototype = a.widget.extend(h, {
                widgetEventPrefix: f ? h.widgetEventPrefix || b : b
            }, i, {
                constructor: g,
                namespace: j,
                widgetName: b,
                widgetFullName: e
            }), f ? (a.each(f._childConstructors, function (b, c) {
                var d = c.prototype;
                a.widget(d.namespace + "." + d.widgetName, g, c._proto)
            }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
        }, a.widget.extend = function (b) {
            for (var c, d, f = e.call(arguments, 1), g = 0, h = f.length; h > g; g++)
                for (c in f[g]) d = f[g][c], f[g].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
            return b
        }, a.widget.bridge = function (b, c) {
            var d = c.prototype.widgetFullName || b;
            a.fn[b] = function (f) {
                var g = "string" == typeof f,
                    h = e.call(arguments, 1),
                    i = this;
                return g ? this.each(function () {
                    var c, e = a.data(this, d);
                    return "instance" === f ? (i = e, !1) : e ? a.isFunction(e[f]) && "_" !== f.charAt(0) ? (c = e[f].apply(e, h), c !== e && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
                }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function () {
                    var b = a.data(this, d);
                    b ? (b.option(f || {}), b._init && b._init()) : a.data(this, d, new c(f, this))
                })), i
            }
        }, a.Widget = function () {}, a.Widget._childConstructors = [], a.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function (b, c) {
                c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = d++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (a) {
                        a.target === c && this.destroy()
                    }
                }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: a.noop,
            _getCreateEventData: a.noop,
            _create: a.noop,
            _init: a.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: a.noop,
            widget: function () {
                return this.element
            },
            option: function (b, c) {
                var d, e, f, g = b;
                if (0 === arguments.length) return a.widget.extend({}, this.options);
                if ("string" == typeof b)
                    if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                        for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                        if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                        e[b] = c
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                        g[b] = c
                    } return this._setOptions(g), this
            },
            _setOptions: function (a) {
                var b;
                for (b in a) this._setOption(b, a[b]);
                return this
            },
            _setOption: function (a, b) {
                return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function () {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function () {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function (b, c, d) {
                var e, f = this;
                "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function (d, g) {
                    function h() {
                        return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                    }
                    "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                    var i = d.match(/^([\w:-]*)\s*(.*)$/),
                        j = i[1] + f.eventNamespace,
                        k = i[2];
                    k ? e.delegate(k, j, h) : c.bind(j, h)
                })
            },
            _off: function (b, c) {
                c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
            },
            _delay: function (a, b) {
                function c() {
                    return ("string" == typeof a ? d[a] : a).apply(d, arguments)
                }
                var d = this;
                return setTimeout(c, b || 0)
            },
            _hoverable: function (b) {
                this.hoverable = this.hoverable.add(b), this._on(b, {
                    mouseenter: function (b) {
                        a(b.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function (b) {
                        a(b.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (b) {
                this.focusable = this.focusable.add(b), this._on(b, {
                    focusin: function (b) {
                        a(b.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function (b) {
                        a(b.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (b, c, d) {
                var e, f, g = this.options[b];
                if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                    for (e in f) e in c || (c[e] = f[e]);
                return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
            }
        }, a.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function (b, c) {
            a.Widget.prototype["_" + b] = function (d, e, f) {
                "string" == typeof e && (e = {
                    effect: e
                });
                var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
                e = e || {}, "number" == typeof e && (e = {
                    duration: e
                }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function (c) {
                    a(this)[b](), f && f.call(d[0]), c()
                })
            }
        }), a.widget;
        var f = !1;
        a(document).mouseup(function () {
            f = !1
        }), a.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function () {
                var b = this;
                this.element.bind("mousedown." + this.widgetName, function (a) {
                    return b._mouseDown(a)
                }).bind("click." + this.widgetName, function (c) {
                    return !0 === a.data(c.target, b.widgetName + ".preventClickEvent") ? (a.removeData(c.target, b.widgetName + ".preventClickEvent"), c.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function () {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function (b) {
                if (!f) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(b), this._mouseDownEvent = b;
                    var c = this,
                        d = 1 === b.which,
                        e = "string" == typeof this.options.cancel && b.target.nodeName ? a(b.target).closest(this.options.cancel).length : !1;
                    return d && !e && this._mouseCapture(b) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                        c.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(b) !== !1, !this._mouseStarted) ? (b.preventDefault(), !0) : (!0 === a.data(b.target, this.widgetName + ".preventClickEvent") && a.removeData(b.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (a) {
                        return c._mouseMove(a)
                    }, this._mouseUpDelegate = function (a) {
                        return c._mouseUp(a)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), b.preventDefault(), f = !0, !0)) : !0
                }
            },
            _mouseMove: function (b) {
                if (this._mouseMoved) {
                    if (a.ui.ie && (!document.documentMode || 9 > document.documentMode) && !b.button) return this._mouseUp(b);
                    if (!b.which) return this._mouseUp(b)
                }
                return (b.which || b.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(b), b.preventDefault()) : (this._mouseDistanceMet(b) && this._mouseDelayMet(b) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, b) !== !1, this._mouseStarted ? this._mouseDrag(b) : this._mouseUp(b)), !this._mouseStarted)
            },
            _mouseUp: function (b) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, b.target === this._mouseDownEvent.target && a.data(b.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(b)), f = !1, !1
            },
            _mouseDistanceMet: function (a) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function () {
                return this.mouseDelayMet
            },
            _mouseStart: function () {},
            _mouseDrag: function () {},
            _mouseStop: function () {},
            _mouseCapture: function () {
                return !0
            }
        }), a.widget("ui.resizable", a.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function (a) {
                return parseInt(a, 10) || 0
            },
            _isNumber: function (a) {
                return !isNaN(parseInt(a, 10))
            },
            _hasScroll: function (b, c) {
                if ("hidden" === a(b).css("overflow")) return !1;
                var d = c && "left" === c ? "scrollLeft" : "scrollTop",
                    e = !1;
                return b[d] > 0 ? !0 : (b[d] = 1, e = b[d] > 0, b[d] = 0, e)
            },
            _create: function () {
                var b, c, d, e, f, g = this,
                    h = this.options;
                if (this.element.addClass("ui-resizable"), a.extend(this, {
                        _aspectRatio: !!h.aspectRatio,
                        aspectRatio: h.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: h.helper || h.ghost || h.animate ? h.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(a("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = h.handles || (a(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = a(), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), b = this.handles.split(","), this.handles = {}, c = 0; b.length > c; c++) d = a.trim(b[c]), f = "ui-resizable-" + d, e = a("<div class='ui-resizable-handle " + f + "'></div>"), e.css({
                        zIndex: h.zIndex
                    }), "se" === d && e.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[d] = ".ui-resizable-" + d, this.element.append(e);
                this._renderAxis = function (b) {
                    var c, d, e, f;
                    b = b || this.element;
                    for (c in this.handles) this.handles[c].constructor === String ? this.handles[c] = this.element.children(this.handles[c]).first().show() : (this.handles[c].jquery || this.handles[c].nodeType) && (this.handles[c] = a(this.handles[c]), this._on(this.handles[c], {
                        mousedown: g._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (d = a(this.handles[c], this.element), f = /sw|ne|nw|se|n|s/.test(c) ? d.outerHeight() : d.outerWidth(), e = ["padding", /ne|nw|n/.test(c) ? "Top" : /se|sw|s/.test(c) ? "Bottom" : /^e$/.test(c) ? "Right" : "Left"].join(""), b.css(e, f), this._proportionallyResize()), this._handles = this._handles.add(this.handles[c])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.mouseover(function () {
                    g.resizing || (this.className && (e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), g.axis = e && e[1] ? e[1] : "se")
                }), h.autoHide && (this._handles.hide(), a(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
                    h.disabled || (a(this).removeClass("ui-resizable-autohide"), g._handles.show())
                }).mouseleave(function () {
                    h.disabled || g.resizing || (a(this).addClass("ui-resizable-autohide"), g._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function () {
                this._mouseDestroy();
                var b, c = function (b) {
                    a(b).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (c(this.element), b = this.element, this.originalElement.css({
                    position: b.css("position"),
                    width: b.outerWidth(),
                    height: b.outerHeight(),
                    top: b.css("top"),
                    left: b.css("left")
                }).insertAfter(b), b.remove()), this.originalElement.css("resize", this.originalResizeStyle), c(this.originalElement), this
            },
            _mouseCapture: function (b) {
                var c, d, e = !1;
                for (c in this.handles) d = a(this.handles[c])[0], (d === b.target || a.contains(d, b.target)) && (e = !0);
                return !this.options.disabled && e
            },
            _mouseStart: function (b) {
                var c, d, e, f = this.options,
                    g = this.element;
                return this.resizing = !0, this._renderProxy(), c = this._num(this.helper.css("left")), d = this._num(this.helper.css("top")), f.containment && (c += a(f.containment).scrollLeft() || 0, d += a(f.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: c,
                    top: d
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.originalSize = this._helper ? {
                    width: g.outerWidth(),
                    height: g.outerHeight()
                } : {
                    width: g.width(),
                    height: g.height()
                }, this.sizeDiff = {
                    width: g.outerWidth() - g.width(),
                    height: g.outerHeight() - g.height()
                }, this.originalPosition = {
                    left: c,
                    top: d
                }, this.originalMousePosition = {
                    left: b.pageX,
                    top: b.pageY
                }, this.aspectRatio = "number" == typeof f.aspectRatio ? f.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = a(".ui-resizable-" + this.axis).css("cursor"), a("body").css("cursor", "auto" === e ? this.axis + "-resize" : e), g.addClass("ui-resizable-resizing"), this._propagate("start", b), !0
            },
            _mouseDrag: function (b) {
                var c, d, e = this.originalMousePosition,
                    f = this.axis,
                    g = b.pageX - e.left || 0,
                    h = b.pageY - e.top || 0,
                    i = this._change[f];
                return this._updatePrevProperties(), i ? (c = i.apply(this, [b, g, h]), this._updateVirtualBoundaries(b.shiftKey), (this._aspectRatio || b.shiftKey) && (c = this._updateRatio(c, b)), c = this._respectSize(c, b), this._updateCache(c), this._propagate("resize", b), d = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), a.isEmptyObject(d) || (this._updatePrevProperties(), this._trigger("resize", b, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function (b) {
                this.resizing = !1;
                var c, d, e, f, g, h, i, j = this.options,
                    k = this;
                return this._helper && (c = this._proportionallyResizeElements, d = c.length && /textarea/i.test(c[0].nodeName), e = d && this._hasScroll(c[0], "left") ? 0 : k.sizeDiff.height, f = d ? 0 : k.sizeDiff.width, g = {
                    width: k.helper.width() - f,
                    height: k.helper.height() - e
                }, h = parseInt(k.element.css("left"), 10) + (k.position.left - k.originalPosition.left) || null, i = parseInt(k.element.css("top"), 10) + (k.position.top - k.originalPosition.top) || null, j.animate || this.element.css(a.extend(g, {
                    top: i,
                    left: h
                })), k.helper.height(k.size.height), k.helper.width(k.size.width), this._helper && !j.animate && this._proportionallyResize()), a("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", b), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function () {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function () {
                var a = {};
                return this.position.top !== this.prevPosition.top && (a.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (a.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (a.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (a.height = this.size.height + "px"), this.helper.css(a), a
            },
            _updateVirtualBoundaries: function (a) {
                var b, c, d, e, f, g = this.options;
                f = {
                    minWidth: this._isNumber(g.minWidth) ? g.minWidth : 0,
                    maxWidth: this._isNumber(g.maxWidth) ? g.maxWidth : 1 / 0,
                    minHeight: this._isNumber(g.minHeight) ? g.minHeight : 0,
                    maxHeight: this._isNumber(g.maxHeight) ? g.maxHeight : 1 / 0
                }, (this._aspectRatio || a) && (b = f.minHeight * this.aspectRatio, d = f.minWidth / this.aspectRatio, c = f.maxHeight * this.aspectRatio, e = f.maxWidth / this.aspectRatio, b > f.minWidth && (f.minWidth = b), d > f.minHeight && (f.minHeight = d), f.maxWidth > c && (f.maxWidth = c), f.maxHeight > e && (f.maxHeight = e)), this._vBoundaries = f
            },
            _updateCache: function (a) {
                this.offset = this.helper.offset(), this._isNumber(a.left) && (this.position.left = a.left), this._isNumber(a.top) && (this.position.top = a.top), this._isNumber(a.height) && (this.size.height = a.height), this._isNumber(a.width) && (this.size.width = a.width)
            },
            _updateRatio: function (a) {
                var b = this.position,
                    c = this.size,
                    d = this.axis;
                return this._isNumber(a.height) ? a.width = a.height * this.aspectRatio : this._isNumber(a.width) && (a.height = a.width / this.aspectRatio), "sw" === d && (a.left = b.left + (c.width - a.width), a.top = null), "nw" === d && (a.top = b.top + (c.height - a.height), a.left = b.left + (c.width - a.width)), a
            },
            _respectSize: function (a) {
                var b = this._vBoundaries,
                    c = this.axis,
                    d = this._isNumber(a.width) && b.maxWidth && b.maxWidth < a.width,
                    e = this._isNumber(a.height) && b.maxHeight && b.maxHeight < a.height,
                    f = this._isNumber(a.width) && b.minWidth && b.minWidth > a.width,
                    g = this._isNumber(a.height) && b.minHeight && b.minHeight > a.height,
                    h = this.originalPosition.left + this.originalSize.width,
                    i = this.position.top + this.size.height,
                    j = /sw|nw|w/.test(c),
                    k = /nw|ne|n/.test(c);
                return f && (a.width = b.minWidth), g && (a.height = b.minHeight), d && (a.width = b.maxWidth), e && (a.height = b.maxHeight), f && j && (a.left = h - b.minWidth), d && j && (a.left = h - b.maxWidth), g && k && (a.top = i - b.minHeight), e && k && (a.top = i - b.maxHeight), a.width || a.height || a.left || !a.top ? a.width || a.height || a.top || !a.left || (a.left = null) : a.top = null, a
            },
            _getPaddingPlusBorderDimensions: function (a) {
                for (var b = 0, c = [], d = [a.css("borderTopWidth"), a.css("borderRightWidth"), a.css("borderBottomWidth"), a.css("borderLeftWidth")], e = [a.css("paddingTop"), a.css("paddingRight"), a.css("paddingBottom"), a.css("paddingLeft")]; 4 > b; b++) c[b] = parseInt(d[b], 10) || 0, c[b] += parseInt(e[b], 10) || 0;
                return {
                    height: c[0] + c[2],
                    width: c[1] + c[3]
                }
            },
            _proportionallyResize: function () {
                if (this._proportionallyResizeElements.length)
                    for (var a, b = 0, c = this.helper || this.element; this._proportionallyResizeElements.length > b; b++) a = this._proportionallyResizeElements[b], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(a)), a.css({
                        height: c.height() - this.outerDimensions.height || 0,
                        width: c.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function () {
                var b = this.element,
                    c = this.options;
                this.elementOffset = b.offset(), this._helper ? (this.helper = this.helper || a("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++c.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function (a, b) {
                    return {
                        width: this.originalSize.width + b
                    }
                },
                w: function (a, b) {
                    var c = this.originalSize,
                        d = this.originalPosition;
                    return {
                        left: d.left + b,
                        width: c.width - b
                    }
                },
                n: function (a, b, c) {
                    var d = this.originalSize,
                        e = this.originalPosition;
                    return {
                        top: e.top + c,
                        height: d.height - c
                    }
                },
                s: function (a, b, c) {
                    return {
                        height: this.originalSize.height + c
                    }
                },
                se: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                sw: function (b, c, d) {
                    return a.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                },
                ne: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, c, d]))
                },
                nw: function (b, c, d) {
                    return a.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, c, d]))
                }
            },
            _propagate: function (b, c) {
                a.ui.plugin.call(this, b, [c, this.ui()]), "resize" !== b && this._trigger(b, c, this.ui())
            },
            plugins: {},
            ui: function () {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), a.ui.plugin.add("resizable", "animate", {
            stop: function (b) {
                var c = a(this).resizable("instance"),
                    d = c.options,
                    e = c._proportionallyResizeElements,
                    f = e.length && /textarea/i.test(e[0].nodeName),
                    g = f && c._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height,
                    h = f ? 0 : c.sizeDiff.width,
                    i = {
                        width: c.size.width - h,
                        height: c.size.height - g
                    },
                    j = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null,
                    k = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                c.element.animate(a.extend(i, k && j ? {
                    top: k,
                    left: j
                } : {}), {
                    duration: d.animateDuration,
                    easing: d.animateEasing,
                    step: function () {
                        var d = {
                            width: parseInt(c.element.css("width"), 10),
                            height: parseInt(c.element.css("height"), 10),
                            top: parseInt(c.element.css("top"), 10),
                            left: parseInt(c.element.css("left"), 10)
                        };
                        e && e.length && a(e[0]).css({
                            width: d.width,
                            height: d.height
                        }), c._updateCache(d), c._propagate("resize", b)
                    }
                })
            }
        }), a.ui.plugin.add("resizable", "containment", {
            start: function () {
                var b, c, d, e, f, g, h, i = a(this).resizable("instance"),
                    j = i.options,
                    k = i.element,
                    l = j.containment,
                    m = l instanceof a ? l.get(0) : /parent/.test(l) ? k.parent().get(0) : l;
                m && (i.containerElement = a(m), /document/.test(l) || l === document ? (i.containerOffset = {
                    left: 0,
                    top: 0
                }, i.containerPosition = {
                    left: 0,
                    top: 0
                }, i.parentData = {
                    element: a(document),
                    left: 0,
                    top: 0,
                    width: a(document).width(),
                    height: a(document).height() || document.body.parentNode.scrollHeight
                }) : (b = a(m), c = [], a(["Top", "Right", "Left", "Bottom"]).each(function (a, d) {
                    c[a] = i._num(b.css("padding" + d))
                }), i.containerOffset = b.offset(), i.containerPosition = b.position(), i.containerSize = {
                    height: b.innerHeight() - c[3],
                    width: b.innerWidth() - c[1]
                }, d = i.containerOffset, e = i.containerSize.height, f = i.containerSize.width, g = i._hasScroll(m, "left") ? m.scrollWidth : f, h = i._hasScroll(m) ? m.scrollHeight : e, i.parentData = {
                    element: m,
                    left: d.left,
                    top: d.top,
                    width: g,
                    height: h
                }))
            },
            resize: function (b) {
                var c, d, e, f, g = a(this).resizable("instance"),
                    h = g.options,
                    i = g.containerOffset,
                    j = g.position,
                    k = g._aspectRatio || b.shiftKey,
                    l = {
                        top: 0,
                        left: 0
                    },
                    m = g.containerElement,
                    n = !0;
                m[0] !== document && /static/.test(m.css("position")) && (l = i), j.left < (g._helper ? i.left : 0) && (g.size.width = g.size.width + (g._helper ? g.position.left - i.left : g.position.left - l.left), k && (g.size.height = g.size.width / g.aspectRatio, n = !1), g.position.left = h.helper ? i.left : 0), j.top < (g._helper ? i.top : 0) && (g.size.height = g.size.height + (g._helper ? g.position.top - i.top : g.position.top), k && (g.size.width = g.size.height * g.aspectRatio, n = !1), g.position.top = g._helper ? i.top : 0), e = g.containerElement.get(0) === g.element.parent().get(0), f = /relative|absolute/.test(g.containerElement.css("position")), e && f ? (g.offset.left = g.parentData.left + g.position.left, g.offset.top = g.parentData.top + g.position.top) : (g.offset.left = g.element.offset().left, g.offset.top = g.element.offset().top), c = Math.abs(g.sizeDiff.width + (g._helper ? g.offset.left - l.left : g.offset.left - i.left)), d = Math.abs(g.sizeDiff.height + (g._helper ? g.offset.top - l.top : g.offset.top - i.top)), c + g.size.width >= g.parentData.width && (g.size.width = g.parentData.width - c, k && (g.size.height = g.size.width / g.aspectRatio, n = !1)), d + g.size.height >= g.parentData.height && (g.size.height = g.parentData.height - d, k && (g.size.width = g.size.height * g.aspectRatio, n = !1)), n || (g.position.left = g.prevPosition.left, g.position.top = g.prevPosition.top, g.size.width = g.prevSize.width, g.size.height = g.prevSize.height)
            },
            stop: function () {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.containerOffset,
                    e = b.containerPosition,
                    f = b.containerElement,
                    g = a(b.helper),
                    h = g.offset(),
                    i = g.outerWidth() - b.sizeDiff.width,
                    j = g.outerHeight() - b.sizeDiff.height;
                b._helper && !c.animate && /relative/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                }), b._helper && !c.animate && /static/.test(f.css("position")) && a(this).css({
                    left: h.left - e.left - d.left,
                    width: i,
                    height: j
                })
            }
        }), a.ui.plugin.add("resizable", "alsoResize", {
            start: function () {
                var b = a(this).resizable("instance"),
                    c = b.options;
                a(c.alsoResize).each(function () {
                    var b = a(this);
                    b.data("ui-resizable-alsoresize", {
                        width: parseInt(b.width(), 10),
                        height: parseInt(b.height(), 10),
                        left: parseInt(b.css("left"), 10),
                        top: parseInt(b.css("top"), 10)
                    })
                })
            },
            resize: function (b, c) {
                var d = a(this).resizable("instance"),
                    e = d.options,
                    f = d.originalSize,
                    g = d.originalPosition,
                    h = {
                        height: d.size.height - f.height || 0,
                        width: d.size.width - f.width || 0,
                        top: d.position.top - g.top || 0,
                        left: d.position.left - g.left || 0
                    };
                a(e.alsoResize).each(function () {
                    var b = a(this),
                        d = a(this).data("ui-resizable-alsoresize"),
                        e = {},
                        f = b.parents(c.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    a.each(f, function (a, b) {
                        var c = (d[b] || 0) + (h[b] || 0);
                        c && c >= 0 && (e[b] = c || null)
                    }), b.css(e)
                })
            },
            stop: function () {
                a(this).removeData("resizable-alsoresize")
            }
        }), a.ui.plugin.add("resizable", "ghost", {
            start: function () {
                var b = a(this).resizable("instance"),
                    c = b.options,
                    d = b.size;
                b.ghost = b.originalElement.clone(), b.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: d.height,
                    width: d.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof c.ghost ? c.ghost : ""), b.ghost.appendTo(b.helper)
            },
            resize: function () {
                var b = a(this).resizable("instance");
                b.ghost && b.ghost.css({
                    position: "relative",
                    height: b.size.height,
                    width: b.size.width
                })
            },
            stop: function () {
                var b = a(this).resizable("instance");
                b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
            }
        }), a.ui.plugin.add("resizable", "grid", {
            resize: function () {
                var b, c = a(this).resizable("instance"),
                    d = c.options,
                    e = c.size,
                    f = c.originalSize,
                    g = c.originalPosition,
                    h = c.axis,
                    i = "number" == typeof d.grid ? [d.grid, d.grid] : d.grid,
                    j = i[0] || 1,
                    k = i[1] || 1,
                    l = Math.round((e.width - f.width) / j) * j,
                    m = Math.round((e.height - f.height) / k) * k,
                    n = f.width + l,
                    o = f.height + m,
                    p = d.maxWidth && n > d.maxWidth,
                    q = d.maxHeight && o > d.maxHeight,
                    r = d.minWidth && d.minWidth > n,
                    s = d.minHeight && d.minHeight > o;
                d.grid = i, r && (n += j), s && (o += k), p && (n -= j), q && (o -= k), /^(se|s|e)$/.test(h) ? (c.size.width = n, c.size.height = o) : /^(ne)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.top = g.top - m) : /^(sw)$/.test(h) ? (c.size.width = n, c.size.height = o, c.position.left = g.left - l) : ((0 >= o - k || 0 >= n - j) && (b = c._getPaddingPlusBorderDimensions(this)), o - k > 0 ? (c.size.height = o, c.position.top = g.top - m) : (o = k - b.height, c.size.height = o, c.position.top = g.top + f.height - o), n - j > 0 ? (c.size.width = n, c.position.left = g.left - l) : (n = j - b.width, c.size.width = n, c.position.left = g.left + f.width - n))
            }
        }), a.ui.resizable
    }), $.fn.extend({
        stringToList: function (a) {
            var b = /[^\.!\?]+[\.!\?]+/gim,
                c = "<" + a + ">";
            $.each($(this).html().match(b), function (a, b) {
                b && /[a-z0-9]+/gim.test(b) && "strong" != b && (c += "<li>" + b + "</li>")
            }), c += "", $(this).html(c)
        }
    }), String.prototype.rot13 = function () {
        return this.replace(/[a-zA-Z]/g, function (a) {
            return String.fromCharCode(("Z" >= a ? 90 : 122) >= (a = a.charCodeAt(0) + 13) ? a : a - 26)
        })
    }, $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip({
            animation: !1
        }), $(".toggle-btn").click(function () {
            $($(this).attr("data-target")).toggleClass($(this).attr("data-toggle")), $(this).toggleClass("active")
        }), $("#find-difference").click(function () {
            $(".alert").addClass("hide");
            var a = $("#input-original").val().trim(),
                b = $("#input-changed").val().trim();
            "" != a && "" != b ? a === b ? $("#alert-warning").removeClass("hide") : ($("#output-original").html(""), $("#output-changed").html(""), $(".row").prettyTextDiff({
                cleanup: !0,
                originalContent: a,
                changedContent: b,
                diffContainer: "#output-original,#output-changed"
            }), $("#difference").removeClass("hide")) : $("#alert-danger").removeClass("hide")
        }), $(".switch").change(function () {
            var a = $(this).attr("page-type");
            if (11 == a) {
                var b = $("#enDecodeUrl").attr("data-type");
                $(".switch").parent().toggleClass("active").toggleClass("btn-success").toggleClass("btn-default"), 1 == b ? ($("#enDecodeUrl").val("Decode URL").attr("data-type", 2), $("#enDecode-label").text("Decoded URL")) : ($("#enDecodeUrl").val("Encode URL").attr("data-type", 1), $("#enDecode-label").text("Encoded URL"))
            } else if (10 == a) {
                var b = $("#enDecode").attr("data-type");
                $(".switch").parent().toggleClass("active").toggleClass("btn-success").toggleClass("btn-default"), 1 == b ? ($("#enDecode").val("Decode").attr("data-type", 2), $("#enDecode-label").text("Decoded Data")) : ($("#enDecode").val("Encode").attr("data-type", 1), $("#enDecode-label").text("Encoded Data"))
            } else if (31 == a) {
                var b = $("#htmlEncodeDecode").attr("data-type");
                $(".switch").parent().toggleClass("active").toggleClass("btn-success").toggleClass("btn-default"), 10 == b ? ($("#htmlEncodeDecode").val("Decode").attr("data-type", 11), $("#htmlEncodeDecode-label").text("Decoded HTML String")) : ($("#htmlEncodeDecode").val("Encode").attr("data-type", 10), $("#htmlEncodeDecode-label").text("Encoded HTML String"))
            }
        }), $("#json-input").change(function () {
            jsonParser()
        }), $("#json-input").keyup(function () {
            jsonParser()
        }), $("#myTabs a").click(function (a) {
            a.preventDefault(), $(this).tab("show")
        }), $("#qrcodeCanvas").qrcode({
            text: "This tools.com"
        }), $('#outcome[rel="gp"]').each(function () {
            var a = randString($(this));
            $(this).text(a)
        }), $(".getNewPass").click(function () {
            var a = $('#outcome[rel="gp"]'),
                b = randString(a);
            a.text(b)
        }), $('#outcome[rel="gp"]').on("click", function () {
            $(this).select()
        }), $(".dropdown-toggle").dropdown(), $(".resizable-textarea").resizable({
            handles: "s"
        }), $("#generate").on("submit", function (a) {
            a.preventDefault(), lipsumize()
        }), $(".editor").wysiwyg(), lipsumize()
    });
