sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sapfiorilistingapp.sapfiorilistingapp',
            componentId: 'ItemsObjectPage',
            contextPath: '/Items'
        },
        CustomPageDefinitions
    );
});