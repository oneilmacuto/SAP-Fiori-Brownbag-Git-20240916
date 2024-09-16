sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'listingapp/sapfiorilistingapptraining/test/integration/FirstJourney',
		'listingapp/sapfiorilistingapptraining/test/integration/pages/ItemsList',
		'listingapp/sapfiorilistingapptraining/test/integration/pages/ItemsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ItemsList, ItemsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('listingapp/sapfiorilistingapptraining') + '/index.html'
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