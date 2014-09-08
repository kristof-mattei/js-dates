var trippleEquals = function(date1, date2) {
    // todo validate params are actually dates
    return date1 === date2;
};

var doubleEquals = function(date1, date2) {
    // todo validate params are actually dates
    return date1 == date2;
};

var getTimeEquals = function(date1, date2) {
    // todo validate params are actually dates
    return date1.getTime() === date2.getTime();
};

var toStringEquals = function(date1, date2) {
    // todo validate params are actually dates
    return date1 + "" === date2 + "";
};

var getTimeAndUndefinedAndNullCheck = function(date1, date2) {
    if(undefined === date1) {
        if(undefined === date2) {
            return true;
        }
        
        return false;
    }
    
    if(undefined === date2) {
        if(undefined === date1) {
            return true;
        }
        
        return false;
    }

    if(null === date1) {
        if(null === date2) {
            return true;
        }
        
        return false;
    }
    
    if(null === date2) {
        if(null === date1) {
            return true;
        }
        
        return false;
    }
    
    return date1.getTime() === date2.getTime();
}

var comparers = [
    { func: trippleEquals, title: "Comparing using ===" },
    { func: doubleEquals, title: "Comparing using ==" },
    { func: getTimeEquals, title: "Comparing using Date.getTime()" },
    { func: toStringEquals, title: "Comparing using casting to string" },
    { func: getTimeAndUndefinedAndNullCheck, title: "Comparing using null, undefined and Date.getTime() check." }
];

var datesToCompare = [
    {
        left: null,
        right: null,
        expectEqual: true,
        message: "Comparing null and null"
    },
    {
        left: null,
        right: new Date(2014, 1, 2),
        expectEqual: false,
        message: "Comparing null and an instantated date"

    },
    {
        left: new Date(2014, 2, 2),
        right: new Date(2014, 2, 3),
        expectEqual: false,
        message: "Comparing 2 different instantiated dates"
    },
    (function() {
        var date = Date.now();

        return {
            left: new Date(date),
            right: new Date(date),
            expectEqual: true,
            message: "Comparing 2 identical dates"
        };
    })()
];

for (var comparer in comparers) {
    (
        // comparer is the func
        function(comparer) {

            describe(comparer.title, function() {

                for (var dateToCompare in datesToCompare) {
                    (
                        // subject is {left: , right: , expectEqual: }
                        function(subject) {
                            it(subject.message, function() {

                                var result = comparer.func(subject.left, subject.right);

                                expect(result).toBe(subject.expectEqual);

                            });
                        }
                    )(datesToCompare[dateToCompare]);
                }

            });
        }
    )(comparers[comparer]);
}
