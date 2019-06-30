var wms_layers = [];

        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });var format_Council_Districts_1 = new ol.format.GeoJSON();
var features_Council_Districts_1 = format_Council_Districts_1.readFeatures(json_Council_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Council_Districts_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Council_Districts_1.addFeatures(features_Council_Districts_1);var lyr_Council_Districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Council_Districts_1, 
                style: style_Council_Districts_1,
                title: '<img src="styles/legend/Council_Districts_1.png" /> Council_Districts'
            });var format_311_streets_infrastructure_open_2 = new ol.format.GeoJSON();
var features_311_streets_infrastructure_open_2 = format_311_streets_infrastructure_open_2.readFeatures(json_311_streets_infrastructure_open_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_311_streets_infrastructure_open_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_311_streets_infrastructure_open_2.addFeatures(features_311_streets_infrastructure_open_2);var lyr_311_streets_infrastructure_open_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_311_streets_infrastructure_open_2, 
                style: style_311_streets_infrastructure_open_2,
                title: '<img src="styles/legend/311_streets_infrastructure_open_2.png" /> 311_streets_infrastructure_open'
            });var format_health_3 = new ol.format.GeoJSON();
var features_health_3 = format_health_3.readFeatures(json_health_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_health_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_health_3.addFeatures(features_health_3);var lyr_health_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_health_3, 
                style: style_health_3,
                title: '<img src="styles/legend/health_3.png" /> health'
            });var format_graffiti_4 = new ol.format.GeoJSON();
var features_graffiti_4 = format_graffiti_4.readFeatures(json_graffiti_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_graffiti_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_graffiti_4.addFeatures(features_graffiti_4);var lyr_graffiti_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_graffiti_4, 
                style: style_graffiti_4,
                title: '<img src="styles/legend/graffiti_4.png" /> graffiti'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Council_Districts_1.setVisible(true);lyr_311_streets_infrastructure_open_2.setVisible(true);lyr_health_3.setVisible(true);lyr_graffiti_4.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Council_Districts_1,lyr_311_streets_infrastructure_open_2,lyr_health_3,lyr_graffiti_4];
lyr_Council_Districts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Name': 'Name', 'SqMiles': 'SqMiles', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_311_streets_infrastructure_open_2.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', 'Council_Districts_OBJECTID': 'Council_Districts_OBJECTID', 'Council_Districts_Name': 'Council_Districts_Name', 'Council_Districts_SqMiles': 'Council_Districts_SqMiles', 'Council_Districts_GlobalID': 'Council_Districts_GlobalID', 'Council_Districts_Shape__Are': 'Council_Districts_Shape__Are', 'Council_Districts_Shape__Len': 'Council_Districts_Shape__Len', });
lyr_health_3.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', });
lyr_graffiti_4.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', });
lyr_Council_Districts_1.set('fieldImages', {'OBJECTID': 'Hidden', 'District': 'TextEdit', 'Name': 'TextEdit', 'SqMiles': 'Hidden', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_311_streets_infrastructure_open_2.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'TextEdit', 'TYPENAME': 'TextEdit', 'CaseStatus': 'Hidden', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', 'Council_Districts_OBJECTID': 'Hidden', 'Council_Districts_Name': 'TextEdit', 'Council_Districts_SqMiles': 'Hidden', 'Council_Districts_GlobalID': 'TextEdit', 'Council_Districts_Shape__Are': 'Hidden', 'Council_Districts_Shape__Len': 'Hidden', });
lyr_health_3.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'TextEdit', 'TYPENAME': 'TextEdit', 'CaseStatus': 'TextEdit', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', });
lyr_graffiti_4.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'Hidden', 'TYPENAME': 'TextEdit', 'CaseStatus': 'TextEdit', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', });
lyr_Council_Districts_1.set('fieldLabels', {'District': 'inline label', 'Name': 'inline label', });
lyr_311_streets_infrastructure_open_2.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'REASONNAME': 'inline label', 'TYPENAME': 'inline label', 'OBJECTDESC': 'inline label', 'Council_Districts_Name': 'no label', 'Council_Districts_GlobalID': 'no label', });
lyr_health_3.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'REASONNAME': 'inline label', 'TYPENAME': 'inline label', 'CaseStatus': 'inline label', 'OBJECTDESC': 'inline label', });
lyr_graffiti_4.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'TYPENAME': 'inline label', 'CaseStatus': 'inline label', 'OBJECTDESC': 'inline label', });
lyr_graffiti_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});