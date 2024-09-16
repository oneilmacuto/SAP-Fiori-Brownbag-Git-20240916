sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sapfiorilistingapp/sapfiorilistingapp/test/integration/FirstJourney',
		'sapfiorilistingapp/sapfiorilistingapp/test/integration/pages/ItemsList',
		'sapfiorilistingapp/sapfiorilistingapp/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ItemsList, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sapfiorilistingapp/sapfiorilistingapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheItemsList: ItemsList,
					onTheItemsObjectPage: ItemsObjectPage
                }
            },
            opaJourney.run
        );
    }
);