var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Temanggung_FIX_1 = new ol.format.GeoJSON();
var features_Temanggung_FIX_1 = format_Temanggung_FIX_1.readFeatures(json_Temanggung_FIX_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Temanggung_FIX_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Temanggung_FIX_1.addFeatures(features_Temanggung_FIX_1);
var lyr_Temanggung_FIX_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Temanggung_FIX_1, 
                style: style_Temanggung_FIX_1,
                popuplayertitle: 'Temanggung_FIX',
                interactive: true,
                title: '<img src="styles/legend/Temanggung_FIX_1.png" /> Temanggung_FIX'
            });
var format_Titik_2 = new ol.format.GeoJSON();
var features_Titik_2 = format_Titik_2.readFeatures(json_Titik_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_2.addFeatures(features_Titik_2);
var lyr_Titik_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Titik_2, 
                style: style_Titik_2,
                popuplayertitle: 'Titik',
                interactive: true,
    title: 'Titik<br />\
    <img src="styles/legend/Titik_2_0.png" /> Sekolah Rakyat Menengah Atas 16 Temanggung<br />\
    <img src="styles/legend/Titik_2_1.png" /> SMA Bhakti Karya Kaloran<br />\
    <img src="styles/legend/Titik_2_2.png" /> SMA Harapan Bangsa Porot<br />\
    <img src="styles/legend/Titik_2_3.png" /> SMA ISLAM KANDANGAN<br />\
    <img src="styles/legend/Titik_2_4.png" /> SMA Islam Sudirman Tembarak<br />\
    <img src="styles/legend/Titik_2_5.png" /> SMA Kristen Shekinah<br />\
    <img src="styles/legend/Titik_2_6.png" /> SMA Negeri 1 Parakan<br />\
    <img src="styles/legend/Titik_2_7.png" /> SMA Negeri 1 Pringsurat<br />\
    <img src="styles/legend/Titik_2_8.png" /> SMA Negeri 1 Temanggung<br />\
    <img src="styles/legend/Titik_2_9.png" /> SMA Negeri 2 Temanggung<br />\
    <img src="styles/legend/Titik_2_10.png" /> SMA Negeri 3 Temanggung<br />\
    <img src="styles/legend/Titik_2_11.png" /> SMA Nur Lintang<br />\
    <img src="styles/legend/Titik_2_12.png" /> SMA PGRI<br />\
    <img src="styles/legend/Titik_2_13.png" /> SMA Swasta Muhammadiyah 1 Temanggung<br />\
    <img src="styles/legend/Titik_2_14.png" /> SMAN 1 Candiroto<br />\
    <img src="styles/legend/Titik_2_15.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_Temanggung_FIX_1.setVisible(true);lyr_Titik_2.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Temanggung_FIX_1,lyr_Titik_2];
lyr_Temanggung_FIX_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Kemiskinan': 'Kemiskinan', 'Pelayanan': 'Pelayanan', 'Miskin': 'Miskin', 'Demografi': 'Demografi', });
lyr_Titik_2.set('fieldAliases', {'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'Keteradaan': 'Keteradaan', 'Akreditasi': 'Akreditasi', 'Kapasitas': 'Kapasitas', 'Gambar': 'Gambar', });
lyr_Temanggung_FIX_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Kemiskinan': 'TextEdit', 'Pelayanan': 'TextEdit', 'Miskin': '', 'Demografi': '', });
lyr_Titik_2.set('fieldImages', {'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'Keteradaan': 'TextEdit', 'Akreditasi': 'TextEdit', 'Kapasitas': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_Temanggung_FIX_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'WADMKC': 'hidden field', 'WADMKK': 'hidden field', 'WADMPR': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'Kemiskinan': 'hidden field', 'Pelayanan': 'hidden field', 'Miskin': 'hidden field', 'Demografi': 'hidden field', });
lyr_Titik_2.set('fieldLabels', {'field_2': 'hidden field', 'field_3': 'inline label - visible with data', 'field_4': 'hidden field', 'field_5': 'hidden field', 'field_6': 'hidden field', 'field_7': 'hidden field', 'Keteradaan': 'inline label - visible with data', 'Akreditasi': 'inline label - visible with data', 'Kapasitas': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_Titik_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});