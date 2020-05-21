
const CV = {'observationTypes': {
                'uri': {'name':'OM_CategoryObservation',
                        'link':'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CategoryObservation'},
                'integer': {'name': 'OM_CountObservation',
                            'link':'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_CountObservation'},
                'double': {'name':'OM_Measurement',
                           'link':'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Measurement'},
                'any': {'name':'OM_Observation',
                        'link':'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_Observation'},
                'boolean': {'name':'OM_TruthObservation',
                        'link':'http://www.opengis.net/def/observationType/OGC-OM/2.0/OM_TruthObservation'}},

            'units': {'foot': {'symbol': 'ft',
                                'definition': 'http://www.qudt.org/qudt/owl/1.0.0/unit/Instances.html#Foot'},
                    'parts per million': {'symbol': 'ppm',
                                          'definition': 'http://www.qudt.org/qudt/owl/1.0.0'}},
            'datastreams': ['Depth Below Surface']
}

module.exports = CV