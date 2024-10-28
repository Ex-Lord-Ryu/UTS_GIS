var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PetaAdministrasiKediri_2 = new ol.format.GeoJSON();
var features_PetaAdministrasiKediri_2 = format_PetaAdministrasiKediri_2.readFeatures(json_PetaAdministrasiKediri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetaAdministrasiKediri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetaAdministrasiKediri_2.addFeatures(features_PetaAdministrasiKediri_2);
var lyr_PetaAdministrasiKediri_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PetaAdministrasiKediri_2, 
                style: style_PetaAdministrasiKediri_2,
                popuplayertitle: "Peta Administrasi Kediri",
                interactive: true,
    title: 'Peta Administrasi Kediri<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_0.png" /> BALOWERTI<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_1.png" /> BANARAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_2.png" /> BANDAR KIDUL<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_3.png" /> BANDAR LOR<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_4.png" /> BANGSAL<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_5.png" /> BANJARAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_6.png" /> BANJAREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_7.png" /> BANJARMLATI<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_8.png" /> BAWANG<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_9.png" /> BETET<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_10.png" /> BLABAK<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_11.png" /> BOBANG<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_12.png" /> BOGEM<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_13.png" /> BUJEL<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_14.png" /> BULU<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_15.png" /> BURENGAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_16.png" /> CAMPUREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_17.png" /> DANDANGAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_18.png" /> DERMO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_19.png" /> DOKO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_20.png" /> GAYAM<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_21.png" /> GOGORANTE<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_22.png" /> JABON<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_23.png" /> JAGALAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_24.png" /> JAMSAREN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_25.png" /> JANTI<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_26.png" /> JONGBIRU<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_27.png" /> KALIOMBO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_28.png" /> KAMPUNGDALEM<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_29.png" /> KEDAK<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_30.png" /> KEMASAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_31.png" /> KETAMI<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_32.png" /> KWADUNGAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_33.png" /> LIRBOYO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_34.png" /> MANGUNREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_35.png" /> MANISRENGGO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_36.png" /> MANYARAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_37.png" /> MARON<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_38.png" /> MOJOROTO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_39.png" /> MRICAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_40.png" /> NGABLAK<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_41.png" /> NGADIREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_42.png" /> NGAMPEL<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_43.png" /> NGLETIH<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_44.png" /> NGRECO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_45.png" /> NGRONGGO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_46.png" /> PAGU<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_47.png" /> PAKELAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_48.png" /> PAKUNDEN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_49.png" /> PESANTREN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_50.png" /> POCANAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_51.png" /> POJOK<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_52.png" /> REJOMULYO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_53.png" /> SEMAMPIR<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_54.png" /> SEMEN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_55.png" /> SETONOBETEK<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_56.png" /> SETONOGEDONG<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_57.png" /> SIDOMULYO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_58.png" /> SILIR<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_59.png" /> SINGONEGARAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_60.png" /> SUKORAME<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_61.png" /> SUKOREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_62.png" /> TAMANAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_63.png" /> TEMPUREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_64.png" /> TINALAN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_65.png" /> TOSAREN<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_66.png" /> TUGUREJO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_67.png" /> WONOJOYO<br />\
    <img src="styles/legend/PetaAdministrasiKediri_2_68.png" /> WONOREJO<br />'
        });
var format_LineJalan_3 = new ol.format.GeoJSON();
var features_LineJalan_3 = format_LineJalan_3.readFeatures(json_LineJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineJalan_3.addFeatures(features_LineJalan_3);
var lyr_LineJalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineJalan_3, 
                style: style_LineJalan_3,
                popuplayertitle: "Line Jalan",
                interactive: true,
                title: '<img src="styles/legend/LineJalan_3.png" /> Line Jalan'
            });
var format_LineSungai_4 = new ol.format.GeoJSON();
var features_LineSungai_4 = format_LineSungai_4.readFeatures(json_LineSungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineSungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineSungai_4.addFeatures(features_LineSungai_4);
var lyr_LineSungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineSungai_4, 
                style: style_LineSungai_4,
                popuplayertitle: "Line Sungai",
                interactive: true,
                title: '<img src="styles/legend/LineSungai_4.png" /> Line Sungai'
            });
var format_BankKediri_5 = new ol.format.GeoJSON();
var features_BankKediri_5 = format_BankKediri_5.readFeatures(json_BankKediri_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankKediri_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankKediri_5.addFeatures(features_BankKediri_5);
var lyr_BankKediri_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankKediri_5, 
                style: style_BankKediri_5,
                popuplayertitle: "Bank Kediri",
                interactive: true,
    title: 'Bank Kediri<br />\
    <img src="styles/legend/BankKediri_5_0.png" /> BCA<br />\
    <img src="styles/legend/BankKediri_5_1.png" /> BI<br />\
    <img src="styles/legend/BankKediri_5_2.png" /> BNI<br />\
    <img src="styles/legend/BankKediri_5_3.png" /> BPR<br />\
    <img src="styles/legend/BankKediri_5_4.png" /> BRI<br />\
    <img src="styles/legend/BankKediri_5_5.png" /> BSI<br />\
    <img src="styles/legend/BankKediri_5_6.png" /> BTN<br />\
    <img src="styles/legend/BankKediri_5_7.png" /> Bukopin<br />\
    <img src="styles/legend/BankKediri_5_8.png" /> Danamon<br />\
    <img src="styles/legend/BankKediri_5_9.png" /> Jatim<br />\
    <img src="styles/legend/BankKediri_5_10.png" /> Mandiri<br />\
    <img src="styles/legend/BankKediri_5_11.png" /> MayBank<br />\
    <img src="styles/legend/BankKediri_5_12.png" /> Mega<br />\
    <img src="styles/legend/BankKediri_5_13.png" /> Muamalat<br />\
    <img src="styles/legend/BankKediri_5_14.png" /> OCBC<br />\
    <img src="styles/legend/BankKediri_5_15.png" /> Panin<br />\
    <img src="styles/legend/BankKediri_5_16.png" /> Permata<br />\
    <img src="styles/legend/BankKediri_5_17.png" /> Woori<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_PetaAdministrasiKediri_2.setVisible(true);lyr_LineJalan_3.setVisible(true);lyr_LineSungai_4.setVisible(true);lyr_BankKediri_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_OSMStandard_1,lyr_PetaAdministrasiKediri_2,lyr_LineJalan_3,lyr_LineSungai_4,lyr_BankKediri_5];
lyr_PetaAdministrasiKediri_2.set('fieldAliases', {'DESA': 'DESA', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'PROVINSI': 'PROVINSI', });
lyr_LineJalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'REMARK': 'REMARK', });
lyr_LineSungai_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_BankKediri_5.set('fieldAliases', {'Nama': 'Nama', 'Jam Buka': 'Jam Buka', 'Nomor Telp': 'Nomor Telp', 'Hari Buka': 'Hari Buka', 'Alamat': 'Alamat', 'Bank': 'Bank', });
lyr_PetaAdministrasiKediri_2.set('fieldImages', {'DESA': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'PROVINSI': 'TextEdit', });
lyr_LineJalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_LineSungai_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_BankKediri_5.set('fieldImages', {'Nama': 'TextEdit', 'Jam Buka': 'TextEdit', 'Nomor Telp': 'TextEdit', 'Hari Buka': 'TextEdit', 'Alamat': 'TextEdit', 'Bank': '', });
lyr_PetaAdministrasiKediri_2.set('fieldLabels', {'DESA': 'inline label - always visible', 'Kelurahan': 'no label', 'Kecamatan': 'inline label - always visible', 'PROVINSI': 'header label - always visible', });
lyr_LineJalan_3.set('fieldLabels', {'NAMRJL': 'inline label - always visible', 'REMARK': 'hidden field', });
lyr_LineSungai_4.set('fieldLabels', {'NAMOBJ': 'inline label - always visible', 'REMARK': 'hidden field', });
lyr_BankKediri_5.set('fieldLabels', {'Nama': 'inline label - always visible', 'Jam Buka': 'inline label - visible with data', 'Nomor Telp': 'inline label - always visible', 'Hari Buka': 'inline label - always visible', 'Alamat': 'inline label - always visible', 'Bank': 'hidden field', });
lyr_BankKediri_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});