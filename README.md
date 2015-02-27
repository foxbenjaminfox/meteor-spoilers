This package gives you access to the `{{#spoiler}}` component. This hides potentialy spoilerific material unless and until the user chooses to view it.

Example:

<pre><code>
{{#spoiler}}
  Darth Vader is Luke's father.
{{else}}
  Spoilers for <i>The Empire Strikes Back</i>
{{/spoiler}}
</code></pre>

The `else` block is optional, and a generic spoiler warning will be used if it isn't provided.
