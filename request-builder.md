---
layout: page
title: Request Builder
permalink: /request-builder/
role: resource
---

<select size="1" id="Dataset" title="" name="Dataset">
    <option value="">Select a dataset</option>
    <option value="00-sf3">2000 Census (SF3)</option>
    <option value="11-acs5">2011 ACS 5 Year Estimates</option>
    <option value="16-acs5">2016 ACS 5 Year Estimates</option>
</select>

<div class="first-level-container">
    <div class="00-sf3" style="display: none;">
        <select class="second-level-select">
            <option value="">Select a subject</option>
            <option value="basic-ore-1">Basic Ore Miner - Level 1</option>
            <option value="basic-ore-2">Basic Ore Miner - Level 2</option>
        </select>
    </div>
    <div class="11-acs5" style="display: none;">
        <select class="second-level-select">
            <option value="">Select a subject</option>
            <option value="omber-miner-1">Omber Miner - Level 1</option>
            <option value="omber-miner-2">Omber Miner - Level 2</option>
        </select>
    </div>
    <div class="16-acs5" style="display: none;">
        <select class="second-level-select">
            <option value="">Select a category</option>
            <option value="Social">Social Characteristics</option>
            <option value="Economic">Economic Characteristics</option>
            <option value="Housing">Housing Characteristics</option>
            <option value="Estimates">Demographic and Housing Estimated</option>
        </select>
    </div>
</div>

<div class="second-level-container">
    <div class="Social" style="display: none;">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="HOUSEHOLDSBYTYPE">HOUSEHOLDS BY TYPE</option>
            <option value="RELATIONSHIP">RELATIONSHIP</option>
            <option value="MARITAL STATUS">MARITAL STATUS</option>
            <option value="FERTILITY">FERTILITY</option>
            <option value="GRANDPARENTS">GRANDPARENTS</option>
            <option value="SCHOOL ENROLLMENT">SCHOOL ENROLLMENT</option>
            <option value="EDUCATIONAL ATTAINMENT">EDUCATIONAL ATTAINMENT</option>
            <option value="VETERAN STATUS">VETERAN STATUS</option>
            <option value="DISABILITY STATUS OF THE CIVILIAN NONINSTITUTIONALIZED POPULATION">DISABILITY STATUS OF THE CIVILIAN NONINSTITUTIONALIZED POPULATION</option>
            <option value="RESIDENCE 1 YEAR AGO">RESIDENCE 1 YEAR AGO</option>
            <option value="PLACE OF BIRTH">PLACE OF BIRTH</option>
            <option value="U.S. CITIZENSHIP STATUS">U.S. CITIZENSHIP STATUS</option>
            <option value="YEAR OF ENTRY">YEAR OF ENTRY</option>
            <option value="WORLD REGION OF BIRTH OF FOREIGN BORN">WORLD REGION OF BIRTH OF FOREIGN BORN</option>
            <option value="LANGUAGE SPOKEN AT HOME">LANGUAGE SPOKEN AT HOME</option>
            <option value="ANCESTRY">ANCESTRY</option>
            <option value="COMPUTERS AND INTERNET USE">COMPUTERS AND INTERNET USE</option>
        </select>
    </div>
    <div class="Economic" style="display: none;">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="S1810">Disability Characteristics</option>
            <option value="S1903">Median Income in the Past 12 Months</option>
        </select>
    </div>
    <div class="Housing" style="display: none;">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="S1810">Disability Characteristics</option>
            <option value="S1903">Median Income in the Past 12 Months</option>
        </select>
    </div>
    <div class="Estimates" style="display: none;">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="S1810">Disability Characteristics</option>
            <option value="S1903">Median Income in the Past 12 Months</option>
        </select>
    </div>
</div>
<div class="third-level-container">
    <div class="HOUSEHOLDSBYTYPE" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0015E,DP02_0014E,DP02_0016E,DP02_0011E,DP02_0010E,DP02_0013E,DP02_0012E,DP02_0005E,DP02_0004E,DP02_0003E,DP02_0002E,DP02_0001E,DP02_0009E,DP02_0008E,DP02_0007E,DP02_0006E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="RELATIONSHIP" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0017E,DP02_0019E,DP02_0018E,DP02_0020E,DP02_0021E,DP02_0023E,DP02_0022E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="MARITAL STATUS" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0035E,DP02_0034E,DP02_0025E,DP02_0024E,DP02_0029E,DP02_0028E,DP02_0027E,DP02_0026E,DP02_0032E,DP02_0033E,DP02_0030E,DP02_0031E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="FERTILITY" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0037E,DP02_0036E,DP02_0039E,DP02_0038E,DP02_0040E,DP02_0041E,DP02_0042E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="GRANDPARENTS" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0051E,DP02_0050E,DP02_0046E,DP02_0047E,DP02_0048E,DP02_0049E,DP02_0043E,DP02_0044E,DP02_0045E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="SCHOOL ENROLLMENT" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0055E,DP02_0054E,DP02_0057E,DP02_0056E,DP02_0053E,DP02_0052E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="EDUCATIONAL ATTAINMENT" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0067E,DP02_0066E,DP02_0065E,DP02_0064E,DP02_0063E,DP02_0062E,DP02_0061E,DP02_0060E,DP02_0058E,DP02_0059E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="VETERAN STATUS" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0069E,DP02_0068E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="DISABILITY STATUS OF THE CIVILIAN NONINSTITUTIONALIZED POPULATION" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0075E,DP02_0074E,DP02_0077E,DP02_0076E,DP02_0071E,DP02_0070E,DP02_0073E,DP02_0072E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="RESIDENCE 1 YEAR AGO" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0081E,DP02_0080E,DP02_0085E,DP02_0084E,DP02_0083E,DP02_0082E,DP02_0079E,DP02_0078E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="PLACE OF BIRTH" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0089E,DP02_0088E,DP02_0087E,DP02_0086E,DP02_0090E,DP02_0091E,DP02_0092E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="U.S. CITIZENSHIP STATUS" style="display:none;">
        <button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0094E,DP02_0095E,DP02_0093E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="YEAR OF ENTRY" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0100E,DP02_0101E,DP02_0102E,DP02_0096E,DP02_0097E,DP02_0098E,DP02_0099E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="WORLD REGION OF BIRTH OF FOREIGN BORN" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0107E,DP02_0108E,DP02_0109E,DP02_0103E,DP02_0104E,DP02_0105E,DP02_0106E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="LANGUAGE SPOKEN AT HOME" style="display:none;">
        <button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0120E,DP02_0121E,DP02_0110E,DP02_0113E,DP02_0114E,DP02_0111E,DP02_0112E,DP02_0117E,DP02_0118E,DP02_0115E,DP02_0116E,DP02_0119E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="ANCESTRY" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0122E,DP02_0123E,DP02_0124E,DP02_0125E,DP02_0126E,DP02_0127E,DP02_0128E,DP02_0129E,DP02_0130E,DP02_0148E,DP02_0147E,DP02_0149E,DP02_0144E,DP02_0143E,DP02_0146E,DP02_0145E,DP02_0139E,DP02_0138E,DP02_0137E,DP02_0136E,DP02_0135E,DP02_0134E,DP02_0133E,DP02_0132E,DP02_0131E,DP02_0141E,DP02_0142E,DP02_0140E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
    <div class="COMPUTERS AND INTERNET USE" style="display:none;">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/profile?get=DP02_0151E,DP02_0152E,DP02_0150E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="../request-builder.js"></script>