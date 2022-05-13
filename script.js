function verificaTurma() {
    var anoRef = document.getElementById('ano-ref').value;
    var dataDigitada = document.getElementById('data-nascimento').value;

    var dataDigitadaM = moment(dataDigitada);
    var dataRefM = moment(anoRef + '-03-31');

    var dif = moment.duration({
        years: dataRefM.year() - dataDigitadaM.year(),
        months: dataRefM.month() - dataDigitadaM.month(),
        days: dataRefM.date() - dataDigitadaM.date()
    });

    var ano, mes, dia = null;

    if (dif.years() != '1') {
        ano = 'anos';
    } else {
        ano = 'ano';
    };
    if (dif.months() != '1') {
        mes = 'meses';
    } else {
        mes = 'mês';
    };
    if (dif.days() != '1') {
        dia = 'dias';
    } else {
        dia = 'dia';
    }

    switch (dif.years()) {
        case 2:
            document.getElementById('texto-dif').innerHTML = 'INFANTIL 1' + '<BR>' + dif.years() + ' ' + ano + ', ' + dif.months() + ' ' + mes + ' e ' + dif.days() + ' ' + dia + ' em ' + dataRefM.format('DD/MM/YYYY');
            break;
        case 3:
            document.getElementById('texto-dif').innerHTML = 'INFANTIL 2' + '<BR>' + dif.years() + ' ' + ano + ', ' + dif.months() + ' ' + mes + ' e ' + dif.days() + ' ' + dia + ' em ' + dataRefM.format('DD/MM/YYYY');
            break;
        case 4:
            document.getElementById('texto-dif').innerHTML = 'INFANTIL 3' + '<BR>' + dif.years() + ' ' + ano + ', ' + dif.months() + ' ' + mes + ' e ' + dif.days() + ' ' + dia + ' em ' + dataRefM.format('DD/MM/YYYY');
            break;
        default:
            document.getElementById('texto-dif').innerHTML = 'Idade incompatível com Ensino Infantil.' + '<BR>' + dif.years() + ' ' + ano + ', ' + dif.months() + ' ' + mes + ' e ' + dif.days() + ' ' + dia + ' em ' + dataRefM.format('DD/MM/YYYY');
    }
}