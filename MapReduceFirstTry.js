/*db.temperaturas_complete_records.mapReduce(function() {
        emit("[" + this.Latitud.toString() + "] [" + this.Longitud.toString() +"]", this.Diferencia);
    },
    function(key, emits) {
        return Array.sum(emits);
    }, {
        query: {
            "Media Real": {
                $gte: 0
            }
        },
        out: "Average July"
    }
)*/

db.temperaturas_complete_records.mapReduce(function() {
        emit(this.Diferencia.toString(), {count:1});
    },
    function(key, emits) {
        var reduced = {
            conteoTotal:0
        }
        for(var i=0;i<emits.lenght;i++)
        {
            reduced.conteoTotal+=1
        }
        //return reduced;
        return Array.sum(emits.count[i]).lenght;
    }, {
        query: {
            "Diferencia":0
        },
        out: "Average July"
    }
)