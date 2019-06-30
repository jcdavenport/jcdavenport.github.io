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
            });var format_StreetsInfrastructure_2 = new ol.format.GeoJSON();
var features_StreetsInfrastructure_2 = format_StreetsInfrastructure_2.readFeatures(json_StreetsInfrastructure_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StreetsInfrastructure_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_StreetsInfrastructure_2.addFeatures(features_StreetsInfrastructure_2);var lyr_StreetsInfrastructure_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_StreetsInfrastructure_2, 
                style: style_StreetsInfrastructure_2,
                title: '<img src="styles/legend/StreetsInfrastructure_2.png" /> Streets & Infrastructure'
            });var format_HealthSanitation_3 = new ol.format.GeoJSON();
var features_HealthSanitation_3 = format_HealthSanitation_3.readFeatures(json_HealthSanitation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthSanitation_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_HealthSanitation_3.addFeatures(features_HealthSanitation_3);var lyr_HealthSanitation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HealthSanitation_3, 
                style: style_HealthSanitation_3,
                title: '<img src="styles/legend/HealthSanitation_3.png" /> Health & Sanitation'
            });var format_Graffiti_4 = new ol.format.GeoJSON();
var features_Graffiti_4 = format_Graffiti_4.readFeatures(json_Graffiti_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Graffiti_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Graffiti_4.addFeatures(features_Graffiti_4);var lyr_Graffiti_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Graffiti_4, 
                style: style_Graffiti_4,
                title: '<img src="styles/legend/Graffiti_4.png" /> Graffiti'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Council_Districts_1.setVisible(true);lyr_StreetsInfrastructure_2.setVisible(true);lyr_HealthSanitation_3.setVisible(true);lyr_Graffiti_4.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Council_Districts_1,lyr_StreetsInfrastructure_2,lyr_HealthSanitation_3,lyr_Graffiti_4];
lyr_Council_Districts_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'District': 'District', 'Name': 'Name', 'SqMiles': 'SqMiles', 'GlobalID': 'GlobalID', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_StreetsInfrastructure_2.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', 'Council_Districts_OBJECTID': 'Council_Districts_OBJECTID', 'Council_Districts_Name': 'Council_Districts_Name', 'Council_Districts_SqMiles': 'Council_Districts_SqMiles', 'Council_Districts_GlobalID': 'Council_Districts_GlobalID', 'Council_Districts_Shape__Are': 'Council_Districts_Shape__Are', 'Council_Districts_Shape__Len': 'Council_Districts_Shape__Len', });
lyr_HealthSanitation_3.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', });
lyr_Graffiti_4.set('fieldAliases', {'Category': 'Category', 'CASEID': 'CASEID', 'OPENEDDATETIME': 'OPENEDDATETIME', 'SLA_Date': 'SLA_Date', 'CLOSEDDATETIME': 'CLOSEDDATETIME', 'Late (Yes/No)': 'Late (Yes/No)', 'Dept': 'Dept', 'REASONNAME': 'REASONNAME', 'TYPENAME': 'TYPENAME', 'CaseStatus': 'CaseStatus', 'SourceID': 'SourceID', 'OBJECTDESC': 'OBJECTDESC', 'Council District': 'Council District', 'XCOORD': 'XCOORD', 'YCOORD': 'YCOORD', 'Report Starting Date': 'Report Starting Date', 'Report Ending Date': 'Report Ending Date', });
lyr_Council_Districts_1.set('fieldImages', {'OBJECTID': 'Hidden', 'District': 'TextEdit', 'Name': 'TextEdit', 'SqMiles': 'Hidden', 'GlobalID': 'Hidden', 'Shape__Are': 'Hidden', 'Shape__Len': 'Hidden', });
lyr_StreetsInfrastructure_2.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'TextEdit', 'TYPENAME': 'TextEdit', 'CaseStatus': 'Hidden', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', 'Council_Districts_OBJECTID': 'Hidden', 'Council_Districts_Name': 'TextEdit', 'Council_Districts_SqMiles': 'Hidden', 'Council_Districts_GlobalID': 'TextEdit', 'Council_Districts_Shape__Are': 'Hidden', 'Council_Districts_Shape__Len': 'Hidden', });
lyr_HealthSanitation_3.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'TextEdit', 'TYPENAME': 'TextEdit', 'CaseStatus': 'TextEdit', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', });
lyr_Graffiti_4.set('fieldImages', {'Category': 'TextEdit', 'CASEID': 'Hidden', 'OPENEDDATETIME': 'Hidden', 'SLA_Date': 'TextEdit', 'CLOSEDDATETIME': 'Hidden', 'Late (Yes/No)': 'Hidden', 'Dept': 'TextEdit', 'REASONNAME': 'Hidden', 'TYPENAME': 'TextEdit', 'CaseStatus': 'TextEdit', 'SourceID': 'Hidden', 'OBJECTDESC': 'TextEdit', 'Council District': 'Hidden', 'XCOORD': 'Hidden', 'YCOORD': 'Hidden', 'Report Starting Date': 'Hidden', 'Report Ending Date': 'Hidden', });
lyr_Council_Districts_1.set('fieldLabels', {'District': 'inline label', 'Name': 'inline label', });
lyr_StreetsInfrastructure_2.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'REASONNAME': 'inline label', 'TYPENAME': 'inline label', 'OBJECTDESC': 'inline label', 'Council_Districts_Name': 'no label', 'Council_Districts_GlobalID': 'no label', });
lyr_HealthSanitation_3.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'REASONNAME': 'inline label', 'TYPENAME': 'inline label', 'CaseStatus': 'inline label', 'OBJECTDESC': 'inline label', });
lyr_Graffiti_4.set('fieldLabels', {'Category': 'inline label', 'SLA_Date': 'inline label', 'Dept': 'inline label', 'TYPENAME': 'inline label', 'CaseStatus': 'inline label', 'OBJECTDESC': 'inline label', });
lyr_Graffiti_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});