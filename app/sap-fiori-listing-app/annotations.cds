using MyService as service from '../../srv/admin-service';

annotate service.Items with @(
    UI.LineItem  : [
        {
            $Type : 'UI.DataField',
            Value : ItemName,
            Label: 'Item Name'
        },
        {
            $Type : 'UI.DataField',
            Value : ListingExpDate,
            Label: 'Listing Expiration Date'
        },
        {
            $Type : 'UI.DataField',
            Value : Status,
            Label: 'Status'
        },
        {
            $Type : 'UI.DataField',
            Value : InStock,
            Label: 'Units Remaining in Stock'
        },
        {
            $Type : 'UI.DataField',
            Value : Category_Category,
            Label: 'Category'
        },
        {
            $Type : 'UI.DataField',
            Value : Seller_SellerName,
            Label: 'Seller'
        },
    ],
    UI.SelectionFields : [
        Status,
        Category_Category,
        Seller_SellerName
    ]
) {
    Status @(
        Common : { 
            ValueListWithFixedValues,
            ValueList : {
                $Type : 'Common.ValueListType',
                CollectionPath : 'Status',
                Parameters : [
                    {
                        $Type : 'Common.ValueListParameterInOut',
                        LocalDataProperty : Status,
                        ValueListProperty : 'StatusName',
                    },
                ],
            }, 
        }
    )
};