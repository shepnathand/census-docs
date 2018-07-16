---
layout: page
title: Request Builder
permalink: /request-builder/
---

<select size="1" id="Dataset" title="" name="Dataset">
    <option value="">Select a dataset</option>
    <option value="00-sf3">2000 Census (SF3)</option>
    <option value="11-acs5">2011 ACS 5 Year Estimates</option>
    <option value="16-acs5">2016 ACS 5 Year Estimates</option>
</select>

<div class="first-level-container">
    <div class="00-sf3">
        <select class="second-level-select">
            <option value="">Select a subject</option>
            <option value="basic-ore-1">Basic Ore Miner - Level 1</option>
            <option value="basic-ore-2">Basic Ore Miner - Level 2</option>
        </select>
    </div>
    <div class="11-acs5" id="1">
        <select class="second-level-select">
            <option value="">Select a subject</option>
            <option value="omber-miner-1">Omber Miner - Level 1</option>
            <option value="omber-miner-2">Omber Miner - Level 2</option>
        </select>
    </div>
    <div class="16-acs5">
        <select class="second-level-select">
            <option value="">Select a category</option>
            <option value="Economy">Economy</option>
            <option value="Health">Health</option>
        </select>
    </div>
</div>

<div class="second-level-container">
    <div class="Economy">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="S1810">Disability Characteristics</option>
            <option value="S1903">Median Income in the Past 12 Months</option>
        </select>
    </div>
    <div class="Health">
        <select class="third-level-select">
            <option value="">Select a subject</option>
            <option value="omber-miner-1">Omber Miner - Level 1</option>
            <option value="omber-miner-2">Omber Miner - Level 2</option>
        </select>
    </div>
</div>

<div class="third-level-container">
	<div class="S1810">
		<button id="clickMe" value="https://api.census.gov/data/2016/acs/acs5/subject?get=S1810_C01_020E,S1810_C01_024E,S1810_C01_023E,S1810_C02_059E,S1810_C01_022E,S1810_C02_058E,S1810_C01_021E,S1810_C02_057E,S1810_C02_056E,S1810_C03_022E&for=tract:*&in=state:47&in=county:065">Get Data</button>
	</div>
</div>

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="../request-builder.js"></script>