var wms_layers = [];

        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
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
            });var format_Public_Safety_Facilities_2 = new ol.format.GeoJSON();
var features_Public_Safety_Facilities_2 = format_Public_Safety_Facilities_2.readFeatures(json_Public_Safety_Facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Public_Safety_Facilities_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Public_Safety_Facilities_2.addFeatures(features_Public_Safety_Facilities_2);var lyr_Public_Safety_Facilities_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Public_Safety_Facilities_2, 
                style: style_Public_Safety_Facilities_2,
                title: '<img src="styles/legend/Public_Safety_Facilities_2.png" /> Public_Safety_Facilities'
            });var format_Bexar_County_Libraries_3 = new ol.format.GeoJSON();
var features_Bexar_County_Libraries_3 = format_Bexar_County_Libraries_3.readFeatures(json_Bexar_County_Libraries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bexar_County_Libraries_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Bexar_County_Libraries_3.addFeatures(features_Bexar_County_Libraries_3);var lyr_Bexar_County_Libraries_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bexar_County_Libraries_3, 
                style: style_Bexar_County_Libraries_3,
                title: '<img src="styles/legend/Bexar_County_Libraries_3.png" /> Bexar_County_Libraries'
            });var format_RainfallDetailData_4 = new ol.format.GeoJSON();
var features_RainfallDetailData_4 = format_RainfallDetailData_4.readFeatures(json_RainfallDetailData_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RainfallDetailData_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_RainfallDetailData_4.addFeatures(features_RainfallDetailData_4);var lyr_RainfallDetailData_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RainfallDetailData_4, 
                style: style_RainfallDetailData_4,
                title: '<img src="styles/legend/RainfallDetailData_4.png" /> RainfallDetailData'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Bexar_County_School_Districts_1.setVisible(true);lyr_Public_Safety_Facilities_2.setVisible(true);lyr_Bexar_County_Libraries_3.setVisible(true);lyr_RainfallDetailData_4.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Bexar_County_School_Districts_1,lyr_Public_Safety_Facilities_2,lyr_Bexar_County_Libraries_3,lyr_RainfallDetailData_4];
lyr_Bexar_County_School_Districts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_C': 'DISTRICT_C', 'WEBSITE': 'WEBSITE', 'TWITTER': 'TWITTER', 'Address': 'Address', 'Phone': 'Phone', 'X': 'X', 'Y': 'Y', 'ShapeSTAre': 'ShapeSTAre', 'ShapeSTLen': 'ShapeSTLen', });
lyr_Public_Safety_Facilities_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'Name': 'Name', 'Address': 'Address', 'City': 'City', 'State': 'State', 'Zip': 'Zip', 'LAT': 'LAT', 'LON': 'LON', 'AgencyID': 'AgencyID', 'AgencyType': 'AgencyType', 'FacilityTy': 'FacilityTy', });
lyr_Bexar_County_Libraries_3.set('fieldAliases', {'Owner': 'Owner', 'NAME': 'NAME', 'Full_Addre': 'Full_Addre', 'PHONE': 'PHONE', 'ZIPCODE': 'ZIPCODE', 'WEBSITE': 'WEBSITE', 'OBJECTID': 'OBJECTID', 'CiviQ_Sort': 'CiviQ_Sort', });
lyr_RainfallDetailData_4.set('fieldAliases', {'location_name': 'location_name', 'latitude': 'latitude', 'longitude': 'longitude', 'date_time': 'date_time', 'five_minute_rainfall': 'five_minute_rainfall', });
lyr_Bexar_County_School_Districts_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'WEBSITE': 'TextEdit', 'TWITTER': 'TextEdit', 'Address': 'TextEdit', 'Phone': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'ShapeSTAre': 'TextEdit', 'ShapeSTLen': 'TextEdit', });
lyr_Public_Safety_Facilities_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'TextEdit', 'Name': 'TextEdit', 'Address': 'TextEdit', 'City': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'AgencyID': 'TextEdit', 'AgencyType': 'TextEdit', 'FacilityTy': 'TextEdit', });
lyr_Bexar_County_Libraries_3.set('fieldImages', {'Owner': 'TextEdit', 'NAME': 'TextEdit', 'Full_Addre': 'TextEdit', 'PHONE': 'TextEdit', 'ZIPCODE': 'TextEdit', 'WEBSITE': 'TextEdit', 'OBJECTID': 'TextEdit', 'CiviQ_Sort': 'TextEdit', });
lyr_RainfallDetailData_4.set('fieldImages', {'location_name': '', 'latitude': '', 'longitude': '', 'date_time': '', 'five_minute_rainfall': '', });
lyr_Bexar_County_School_Districts_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAME': 'no label', 'NAME2': 'no label', 'DISTRICT_C': 'no label', 'WEBSITE': 'no label', 'TWITTER': 'no label', 'Address': 'no label', 'Phone': 'no label', 'X': 'no label', 'Y': 'no label', 'ShapeSTAre': 'no label', 'ShapeSTLen': 'no label', });
lyr_Public_Safety_Facilities_2.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'Name': 'no label', 'Address': 'no label', 'City': 'no label', 'State': 'no label', 'Zip': 'no label', 'LAT': 'no label', 'LON': 'no label', 'AgencyID': 'no label', 'AgencyType': 'no label', 'FacilityTy': 'no label', });
lyr_Bexar_County_Libraries_3.set('fieldLabels', {'Owner': 'no label', 'NAME': 'no label', 'Full_Addre': 'no label', 'PHONE': 'no label', 'ZIPCODE': 'no label', 'WEBSITE': 'no label', 'OBJECTID': 'no label', 'CiviQ_Sort': 'no label', });
lyr_RainfallDetailData_4.set('fieldLabels', {'location_name': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'date_time': 'no label', 'five_minute_rainfall': 'no label', });
lyr_RainfallDetailData_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});