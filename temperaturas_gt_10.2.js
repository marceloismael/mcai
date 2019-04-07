db.temperaturas_complete_records.find({
        Diciembre: {
            $gt: 10.2
        }
    }, { Longitud: 1, Latitud: 1, Diciembre: 1, "Media Real": 1, Diferencia: 1 })
    .sort({ Diferencia: -1 })
    .limit(100)