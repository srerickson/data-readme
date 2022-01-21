import { run } from 'jest'

export const en_EN = [
  {
    slug: 'title-and-description',
    name: 'Title and Description',
    markdown: `
# Project Title

A brief description of the dataset.

`,
  },
  {
    name: 'Data Overview',
    slug: 'data-overview',
    markdown: `
## Data Overview

*As appropriate, describe variables, units, labels, coordinate systems, resolution, geographic extent, temporal range, temporal range etc.*


#### Variables & Units

[*description of variables*]


#### Missing Data & Caveats

[*description of missing data*]


#### Processing and Cleaning

[*description of procedure for processing and cleaning*]


`,
  },
  {
    name: 'Directory Structure',
    slug: 'directory-structure',
    markdown: `
## Directory Structure

\`\`\`
  ├── LICENSE
  ├── Makefile           <- Makefile for generating figures
  ├── README.md          <- This file.
  ├── data
  │   ├── external       <- Data from third party sources.
  │   ├── interim        <- Intermediate data that has been transformed.
  │   ├── processed      <- The final, canonical data sets for modeling.
  │   └── raw            <- The original, immutable data dump.
  |
  ├── models             <- Trained and serialized models, model predictions, or model summaries
\`\`\`

`,
  },
  {
    slug: 'usage-examples',
    name: 'Usage/Examples',
    markdown: `
## Usage/Examples

Generate figures with commands: 

\`\`\`
$ scripts/gen.py --source data.csv
\`\`\`

`,
  },
  {
    slug: 'citation',
    name: 'Citation',
    markdown: `
## Preferred Citation

Please cite this data as follows:

> Lisa, M., & Bot, H. (2017). My Research Data (Version 2.0.4). https://doi.org/10.5281/zenodo.1234


`,
  },
  {
    slug: 'license',
    name: 'License',
    markdown: `
## License

Copyright <Name><Year>.

Contents of \`data\` directory are shared under[CC0 1.0 (Public Domain Dedication)](https://creativecommons.org/publicdomain/zero/1.0/). Code in \`scripts\` is licensed with the [MIT](https://choosealicense.com/licenses/mit/) license. 

`,
  },
  {
    slug: 'authors',
    name: 'Authors',
    markdown: `
## Authors

Gene Fox: 
- Institution: 
- Address: 
- Email: 
- ORCID

Simeon Schroeder: 
- Institution: 
- Address: 
- Email:
- ORCID: 

Corresponding author: Gene Fox

`,
  },
  {
    slug: 'funding',
    name: 'Funding',
    markdown: `
## Funding

This project was supported with funding from the NSF (Grant \#123456)

`,
  },
  {
    slug: 'acknowledgement',
    name: 'Acknowledgements',
    markdown: `
## Acknowledgements


`,
  },
  {
    slug: 'related',
    name: 'Related',
    markdown: `
## Related Work & Resources

[*Related articles, datasets, and alternative versions/sources for the data.*]




`,
  },
  {
    slug: 'technical-requirements',
    name: 'Technical Requirements',
    markdown: `
## Technical Requirements

This data processing code in \`script\` requires Python v3. All code was tested on an amd64 machine with Windows 10.


`,
  },
  {
    slug: 'revisions',
    name: 'Revisions',
    markdown: `
## Revisions

Last revised 2022-10-11.


`,
  },
]
