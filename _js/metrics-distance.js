import React from 'react';
import {render} from 'react-dom';
import MetricTester from './components/MetricTester.jsx';
import MRATester from './components/MRATester.jsx';

import bag from 'talisman/metrics/bag';
import canberra from 'talisman/metrics/canberra';
import chebyshev from 'talisman/metrics/chebyshev';
import cosine from 'talisman/metrics/cosine';
import damerauLevenshtein from 'talisman/metrics/damerau-levenshtein';
import dice from 'talisman/metrics/dice';
import euclidean, {squared} from 'talisman/metrics/euclidean';
import {distance as eudexDistance, isSimilar as eudexSimilarity} from 'talisman/metrics/eudex';
import guth from 'talisman/metrics/guth';
import hamming from 'talisman/metrics/hamming';
import {similarity as identity} from 'talisman/metrics/identity';
import jaccard from 'talisman/metrics/jaccard';
import jaro from 'talisman/metrics/jaro';
import jaroWinkler from 'talisman/metrics/jaro-winkler';
import {similarity as lcs} from 'talisman/metrics/lcs';
import {similarity as length} from 'talisman/metrics/length';
import {lig2, lig3} from 'talisman/metrics/lig';
import levenshtein from 'talisman/metrics/levenshtein';
import manhattan from 'talisman/metrics/manhattan';
import mlipns from 'talisman/metrics/mlipns';
import mongeElkan, {symmetric as symmetricMongeElkan} from 'talisman/metrics/monge-elkan';
import mra from 'talisman/metrics/mra';
import overlap from 'talisman/metrics/overlap';
import {similarity as prefix} from 'talisman/metrics/prefix';
import {similarity as ratcliffObershelp} from 'talisman/metrics/ratcliff-obershelp';
import sift4 from 'talisman/metrics/sift4';
import {similarity as suffix} from 'talisman/metrics/suffix';

render(<MetricTester metric={bag} integerResult={true} />, document.getElementById('bag-mount'));
render(<MetricTester metric={canberra} enforceNumbers={true} sameDimension={true} />, document.getElementById('canberra-mount'));
render(<MetricTester metric={cosine} enforceNumbers={true} sameDimension={true} />, document.getElementById('cosine-mount'));
render(<MetricTester metric={chebyshev} enforceNumbers={true} sameDimension={true} />, document.getElementById('chebyshev-mount'));
render(<MetricTester metric={damerauLevenshtein} integerResult={true} />, document.getElementById('damerau-levenshtein-mount'));
render(<MetricTester metric={dice} />, document.getElementById('dice-mount'));
render(<MetricTester metric={euclidean} enforceNumbers={true} sameDimension={true} />, document.getElementById('euclidean-mount'));
render(<MetricTester metric={eudexDistance} integerResult={true} />, document.getElementById('eudex-distance-mount'));
render(<MetricTester metric={eudexSimilarity} />, document.getElementById('eudex-similarity-mount'));
render(<MetricTester metric={squared} enforceNumbers={true} sameDimension={true} />, document.getElementById('euclidean-squared-mount'));
render(<MetricTester metric={guth} integerResult={true} />, document.getElementById('guth-mount'));
render(<MetricTester metric={hamming} integerResult={true} sameDimension={true} />, document.getElementById('hamming-mount'));
render(<MetricTester metric={identity} integerResult={true} />, document.getElementById('identity-mount'));
render(<MetricTester metric={jaccard} />, document.getElementById('jaccard-mount'));
render(<MetricTester metric={jaro} />, document.getElementById('jaro-mount'));
render(<MetricTester metric={jaroWinkler} />, document.getElementById('jaro-winkler-mount'));
render(<MetricTester metric={lcs} />, document.getElementById('lcs-mount'));
render(<MetricTester metric={length} />, document.getElementById('length-mount'));
render(<MetricTester metric={levenshtein} integerResult={true} />, document.getElementById('levenshtein-mount'));
render(<MetricTester metric={lig2} />, document.getElementById('lig2-mount'));
render(<MetricTester metric={lig3} />, document.getElementById('lig3-mount'));
render(<MetricTester metric={manhattan} enforceNumbers={true} sameDimension={true} />, document.getElementById('manhattan-mount'));
render(<MetricTester metric={mlipns} />, document.getElementById('mlipns-mount'));
render(<MetricTester metric={mongeElkan.bind(null, identity)} />, document.getElementById('monge-elkan-mount'));
render(<MetricTester metric={symmetricMongeElkan.bind(null, identity)} />, document.getElementById('monge-elkan-symmetric-mount'));
render(<MRATester metric={mra} />, document.getElementById('mra-mount'));
render(<MetricTester metric={overlap} />, document.getElementById('overlap-mount'));
render(<MetricTester metric={prefix} />, document.getElementById('prefix-mount'));
render(<MetricTester metric={ratcliffObershelp} />, document.getElementById('ratcliff-obershelp-mount'));
render(<MetricTester metric={sift4} integerResult={true} />, document.getElementById('sift4-mount'));
render(<MetricTester metric={suffix} />, document.getElementById('suffix-mount'));
