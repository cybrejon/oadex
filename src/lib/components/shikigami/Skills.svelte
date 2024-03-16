<script>

  // import components
  import { highlight } from '$utils/highlighting';
  import Button2 from '../Button2.svelte';
  import Dropdown from '../Dropdown.svelte';

  export let images;

  export let curr_shiki_obj;

  let shikigami_skills = Object.keys(curr_shiki_obj.式神技能);
  let skills_data = shikigami_skills.map(skill => {
    return {
      skill_name: curr_shiki_obj.式神技能[skill].技能名称,
      image: images[curr_shiki_obj.式神技能[skill].图标路径],
      description: curr_shiki_obj.式神技能[skill].技能描述,
      properties: curr_shiki_obj.式神技能[skill].技能成长
    };
  });

  let skill_name = curr_shiki_obj.式神技能.天生被动.技能名称;
  let skill_image = images[curr_shiki_obj.式神技能.天生被动.图标路径];
  let skill_description = highlight(curr_shiki_obj.式神技能.天生被动.技能描述);
  let skill_properties = curr_shiki_obj.式神技能.天生被动.技能成长;

  let skill_tab_indicator = 0;
  const changeSkillDisplayed = (i) => () => {
    skillsDropdown.toggle();
    skill_tab_indicator = i;
    skill_name = skills_data[i].skill_name;
    skill_image = skills_data[i].image;
    skill_properties = skills_data[i].properties
    skill_description = highlight(skills_data[i].description);
  }

  // remove the cd and mana cost from the properties to be shown separately
  $: skill_prop_names = Object.keys(skill_properties);
  $: skill_prop_names_unique = skill_prop_names.filter(char => char != "冷却" && char != "消耗");
  $: skill_properties_unique = skill_prop_names_unique.map(char => {
      return {
        name: char,
        value: skill_properties[char]
      }
    });

  let skillsDropdown;

  let skill_position_name = {
    0: "TRAIT",
    1: "S2",
    2: "ULTIMATE",
    3: "PASSIVE",
    4: "S3"
  };

</script>

<div class="skill-tab-container">
  <h3 class="stats-header"> 🔨 Skills</h3>
  <Dropdown bind:this={skillsDropdown} label={skill_position_name[skill_tab_indicator]}>
    <Button2 fn={changeSkillDisplayed(0)} active={skill_tab_indicator === 0}>
      TRAIT
    </Button2>
    <Button2 fn={changeSkillDisplayed(3)} active={skill_tab_indicator === 3}>
      S1 / PASSIVE
    </Button2>
    <Button2 fn={changeSkillDisplayed(1)} active={skill_tab_indicator === 1}>
      S2
    </Button2>
    <Button2 fn={changeSkillDisplayed(4)} active={skill_tab_indicator === 4}>
      S3
    </Button2>
    <Button2 fn={changeSkillDisplayed(2)} active={skill_tab_indicator === 2}>
      ULTIMATE
    </Button2>
  </Dropdown>
</div>
<div class="skill-container">
  <div class="skill-info-header-container">
    <img class="skill-image" src={skill_image} alt="skill" />
    <div class="skill-aux-info-wrapper">
      <p class="skill-name">{skill_name}</p>
      <div class="what-do-i-call-this-shit-now">
        <div class="skill-aux-info">
          {#if skill_properties.冷却.length || !skill_properties.冷却[0] === null}
            <p class="aux-info-name">Ability Cooldown:</p>
            <p class="aux-info-values">{skill_properties.冷却.join(', ')}</p>
          {/if}
        </div>
        <div class="skill-aux-info">
          {#if !skill_properties.消耗.every(cost => cost === null)}
            <p class="aux-info-name">Ability Mana Cost:</p>
            <p class="aux-info-values">{skill_properties.消耗.join(', ')}</p>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <p class="skill-description">{@html skill_description}</p>
  <div class="skill-properties-container">
    {#each skill_properties_unique as skill_prop}
      <div class="skill-property">
        <p class="skill-property-name">{skill_prop.name}</p>
        <div class="skill-property-values-container">
          {#each skill_prop.value as prop_value}
            <p class="skill-property-value"><span class="skill-property-value-lvl">Lvl {skill_prop.value.indexOf(prop_value) + 1}</span> <span class="skill-property-value-digit">{prop_value}</span></p>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .skill-tab-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .skill-container {
    background-color: #3C3F46;
    border-radius: 6px;
    padding: 10px;
  }

  .skill-info-header-container {
    display: flex;
    justify-content: left;
    align-items: center;
    flex-direction: row;
  }

  .skill-image {
    border: 5px solid rgba(255, 255, 255, 0.2);
    border-radius: 100%;
    width: 100px;
    height: 100px;
  }

  .skill-aux-info-wrapper {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }

  .what-do-i-call-this-shit-now {
    display: flex;
    flex-direction: column;
    row-gap: 3px;
  }

  .skill-aux-info {
    display: flex;
    column-gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    font-size: .8rem;
  }

  .skill-name {
    margin-bottom: 10px;
    font-size: 1.4rem;
    font-weight: 600;
  }

  .skill-description {
    padding: 10px 0;
    font-size: .8rem;
    line-height: 24px;
  }

  .aux-info-values {
    font-weight: 600;
  }

  .skill-properties-container {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: left;
    justify-content: center;
  }

  .skill-property {
    background-color: #40444B;
    padding: 5px 10px;
    border-radius: 3px;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    align-items: center;
    justify-content: space-between;
    font-size: .8rem;
  }

  .skill-property-name {
    max-width: 130px;
    font-weight: 600;
  }

  .skill-property-values-container {
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: left;
  }

  .skill-property-value-lvl {
    color: #ffffff71;
    font-size: .6rem;
  }

  .skill-property-value-digit {
    font-size: 1rem;
    font-weight: 600;
  }
</style>