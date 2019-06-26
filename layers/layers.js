var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Bexar_County_School_Districts_1 = new ol.format.GeoJSON();
var features_Bexar_County_School_Districts_1 = format_Bexar_County_School_Districts_1.readFeatures(json_Bexar_County_School_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bexar_County_School_Districts_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Bexar_County_School_Districts_1.addFeatures(features_Bexar_County_School_Districts_1);var lyr_Bexar_County_School_Districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bexar_County_School_Districts_1, 
                style: style_Bexar_County_School_Districts_1,
                title: '<img src="styles/legend/Bexar_County_School_Districts_1.png" /> Bexar_County_School_Districts'
            });var format_Streets_2 = new ol.format.GeoJSON();
var features_Streets_2 = format_Streets_2.readFeatures(json_Streets_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streets_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Streets_2.addFeatures(features_Streets_2);var lyr_Streets_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Streets_2, 
                style: style_Streets_2,
                title: '<img src="styles/legend/Streets_2.png" /> Streets'
            });var format_Public_Safety_Facilities_3 = new ol.format.GeoJSON();
var features_Public_Safety_Facilities_3 = format_Public_Safety_Facilities_3.readFeatures(json_Public_Safety_Facilities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Safety_Facilities_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Public_Safety_Facilities_3.addFeatures(features_Public_Safety_Facilities_3);var lyr_Public_Safety_Facilities_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Safety_Facilities_3, 
                style: style_Public_Safety_Facilities_3,
                title: '<img src="styles/legend/Public_Safety_Facilities_3.png" /> Public_Safety_Facilities'
            });var format_Bexar_County_Libraries_4 = new ol.format.GeoJSON();
var features_Bexar_County_Libraries_4 = format_Bexar_County_Libraries_4.readFeatures(json_Bexar_County_Libraries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bexar_County_Libraries_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Bexar_County_Libraries_4.addFeatures(features_Bexar_County_Libraries_4);var lyr_Bexar_County_Libraries_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bexar_County_Libraries_4, 
                style: style_Bexar_County_Libraries_4,
                title: '<img src="styles/legend/Bexar_County_Libraries_4.png" /> Bexar_County_Libraries'
            });var format_RainfallDetailData_5 = new ol.format.GeoJSON();
var features_RainfallDetailData_5 = format_RainfallDetailData_5.readFeatures(json_RainfallDetailData_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RainfallDetailData_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RainfallDetailData_5.addFeatures(features_RainfallDetailData_5);var lyr_RainfallDetailData_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RainfallDetailData_5, 
                style: style_RainfallDetailData_5,
                title: '<img src="styles/legend/RainfallDetailData_5.png" /> RainfallDetailData'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Bexar_County_School_Districts_1.setVisible(true);lyr_Streets_2.setVisible(false);lyr_Public_Safety_Facilities_3.setVisible(true);lyr_Bexar_County_Libraries_4.setVisible(true);lyr_RainfallDetailData_5.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Bexar_County_School_Districts_1,lyr_Streets_2,lyr_Public_Safety_Facilities_3,lyr_Bexar_County_Libraries_4,lyr_RainfallDetailData_5];
lyr_Bexar_County_School_Districts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_C': 'DISTRICT_C', 'WEBSITE': 'WEBSITE', 'TWITTER': 'TWITTER', 'Address': 'Address', 'Phone': 'Phone', 'X': 'X', 'Y': 'Y', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Streets_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CartID': 'CartID', 'MSAG_NAME': 'MSAG_NAME', 'FROM_STREE': 'FROM_STREE', 'TO_STREET': 'TO_STREET', 'Owner': 'Owner', 'Maintenanc': 'Maintenanc', 'Material': 'Material', 'CouncilDis': 'CouncilDis', 'Neighborho': 'Neighborho', 'HistoricDi': 'HistoricDi', 'CoSARoadFu': 'CoSARoadFu', 'LengthFeet': 'LengthFeet', 'PavementWi': 'PavementWi', 'GlobalID': 'GlobalID', 'Shape__Len': 'Shape__Len', });
lyr_Public_Safety_Facilities_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'LAT': 'LAT', 'LON': 'LON', 'AgencyID': 'AgencyID', 'AgencyType': 'AgencyType', 'FacilityTy': 'FacilityTy', });
lyr_Bexar_County_Libraries_4.set('fieldAliases', {'Owner': 'Owner', 'NAME': 'NAME', 'Full_Addre': 'Full_Addre', 'PHONE': 'PHONE', 'ZIPCODE': 'ZIPCODE', 'WEBSITE': 'WEBSITE', 'OBJECTID': 'OBJECTID', 'CiviQ_Sort': 'CiviQ_Sort', });
lyr_RainfallDetailData_5.set('fieldAliases', {'location_name': 'location_name', 'latitude': 'latitude', 'longitude': 'longitude', 'date_time': 'date_time', 'five_minute_rainfall': 'five_minute_rainfall', });
lyr_Bexar_County_School_Districts_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'WEBSITE': 'TextEdit', 'TWITTER': 'TextEdit', 'Address': 'TextEdit', 'Phone': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Streets_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'CartID': 'TextEdit', 'MSAG_NAME': 'TextEdit', 'FROM_STREE': 'TextEdit', 'TO_STREET': 'TextEdit', 'Owner': 'TextEdit', 'Maintenanc': 'TextEdit', 'Material': 'TextEdit', 'CouncilDis': 'TextEdit', 'Neighborho': 'TextEdit', 'HistoricDi': 'TextEdit', 'CoSARoadFu': 'TextEdit', 'LengthFeet': 'TextEdit', 'PavementWi': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_Public_Safety_Facilities_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'AgencyID': 'TextEdit', 'AgencyType': 'TextEdit', 'FacilityTy': 'TextEdit', });
lyr_Bexar_County_Libraries_4.set('fieldImages', {'Owner': 'TextEdit', 'NAME': 'TextEdit', 'Full_Addre': 'TextEdit', 'PHONE': 'TextEdit', 'ZIPCODE': 'TextEdit', 'WEBSITE': 'TextEdit', 'OBJECTID': 'TextEdit', 'CiviQ_Sort': 'TextEdit', });
lyr_RainfallDetailData_5.set('fieldImages', {'location_name': '', 'latitude': '', 'longitude': '', 'date_time': '', 'five_minute_rainfall': '', });
lyr_Bexar_County_School_Districts_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'NAME2': 'no label', 'DISTRICT_C': 'no label', 'WEBSITE': 'no label', 'TWITTER': 'no label', 'Address': 'no label', 'Phone': 'no label', 'X': 'no label', 'Y': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_Streets_2.set('fieldLabels', {'OBJECTID': 'no label', 'CartID': 'no label', 'MSAG_NAME': 'no label', 'FROM_STREE': 'no label', 'TO_STREET': 'no label', 'Owner': 'no label', 'Maintenanc': 'no label', 'Material': 'no label', 'CouncilDis': 'no label', 'Neighborho': 'no label', 'HistoricDi': 'no label', 'CoSARoadFu': 'no label', 'LengthFeet': 'no label', 'PavementWi': 'no label', 'GlobalID': 'no label', 'Shape__Len': 'no label', });
lyr_Public_Safety_Facilities_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Name': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'LAT': 'no label', 'LON': 'no label', 'AgencyID': 'no label', 'AgencyType': 'no label', 'FacilityTy': 'no label', });
lyr_Bexar_County_Libraries_4.set('fieldLabels', {'Owner': 'no label', 'NAME': 'no label', 'Full_Addre': 'no label', 'PHONE': 'no label', 'ZIPCODE': 'no label', 'WEBSITE': 'no label', 'OBJECTID': 'no label', 'CiviQ_Sort': 'no label', });
lyr_RainfallDetailData_5.set('fieldLabels', {'location_name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'date_time': 'no label', 'five_minute_rainfall': 'no label', });
lyr_RainfallDetailData_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});