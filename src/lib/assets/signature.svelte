<script>
  import { inview } from "svelte-inview";
  import { draw, fade } from "svelte/transition";

  let visible = $state(false);

  let drawParams = { duration: 1000 };
  let fadeParams = {};
</script>

<div
  class="*:h-10 h-10 ml-5"
  use:inview={{ rootMargin: "-25%" }}
  oninview_enter={() => {
    visible = true;
  }}
  oninview_leave={() => {
    visible = false;
  }}
>
  <span class="sr-only">William Leader</span>
  {#if visible}
    <svg
      viewBox="0 0 123.2217 31.977724"
      version="1.1"
      id="svg1"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      stroke-width="2px"
      ><defs id="defs1" /><g
        id="layer1"
        transform="translate(-44.643975,-74.96128)"
        ><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 0, ...drawParams }}
          out:fade={fadeParams}
          d="m 44.643976,85.873217 c 2.498115,21.369193 3.143634,18.549823 3.169433,18.530023 4.021959,-3.67613 7.539083,-6.468793 10.551374,-8.378001 3.939826,-0.136501 3.002446,3.544101 6.095034,3.948335 3.939058,-0.553527 6.158916,-7.193642 8.290225,-9.723906"
          id="path1"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 500, ...drawParams }}
          out:fade={fadeParams}
          d="m 77.105768,94.061898 c -0.750971,8.866372 -1.666451,8.138592 -1.695611,8.121092"
          id="path2"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 1000, ...drawParams }}
          out:fade={fadeParams}
          d="m 79.921446,86.705143 c 0.08758,-2.286982 -0.409476,-2.681457 -0.410179,-2.681926"
          id="path3"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 0, ...drawParams }}
          out:fade={fadeParams}
          d="m 86.387018,74.963942 c 0.300539,-0.08154 0.781065,1.709714 0.405337,4.639091 -0.864083,6.736863 -2.013424,20.069569 -2.011707,22.579957"
          id="path4"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 500, ...drawParams }}
          out:fade={fadeParams}
          d="m 91.652343,75.767127 c -1.471948,7.76483 -0.623454,14.974051 -1.811976,27.381083 -0.105005,1.09615 0.442173,2.61461 0.357954,3.79079"
          id="path5"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 500, ...drawParams }}
          out:fade={fadeParams}
          d="m 98.702523,94.686598 c -0.985899,3.044463 -1.551103,6.257202 -1.695612,9.638222"
          id="path6"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 1000, ...drawParams }}
          out:fade={fadeParams}
          d="m 100.88897,87.011718 c 0.49506,0.382053 0.56943,0.932384 0.22311,1.650992"
          id="path7"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 0, ...drawParams }}
          out:fade={fadeParams}
          d="m 109.43396,93.571062 c -1.19734,-1.145276 -2.57316,-0.624704 -4.12747,1.56175 -0.65445,0.98167 -0.98167,2.171574 -0.98167,3.569711 -0.22311,1.814607 -0.0892,2.885517 0.40159,3.212737 1.19734,-0.25285 2.18645,-1.13041 2.96732,-2.632659 0.75857,-1.29402 1.74767,-3.197866 1.85179,-4.729867 l -0.11156,-0.981672 c 0.29275,2.476336 0.84623,4.65717 0.55778,7.792198 -0.017,1.5003 0.17637,2.26437 0.58007,2.29224"
          id="path8"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 0, ...drawParams }}
          out:fade={fadeParams}
          d="m 119.36223,91.027643 -1.16016,6.648588 c 1.74502,-2.758627 2.76595,-7.013707 5.30995,-8.121095 1.33118,-0.468469 -0.0591,5.554315 -1e-5,8.054162 2.10949,-5.330442 4.09017,-8.395989 6.0239,-8.098781 3.97124,1.88726 2.16448,6.335982 2.49879,9.370491"
          id="path9"
        /><path
          style="fill:none;fill-opacity:0.13"
          in:draw={{ delay: 500, ...drawParams }}
          out:fade={fadeParams}
          d="m 157.06731,77.596603 c -1.50031,4.995882 -3.16617,10.6628 -3.56971,16.911509 -0.32722,2.201322 -0.11899,4.224158 0.6247,6.068508 0.71394,1.75511 1.78486,2.85577 3.21274,3.30198 1.72536,0.56521 3.15324,0.41647 4.28365,-0.44621 2.68359,-2.35539 4.10062,-2.8205 6.24699,-3.614333"
          id="path10"
        /></g
      ></svg
    >
  {/if}
</div>
