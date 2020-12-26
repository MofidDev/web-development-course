## معرفی فریم‌ورک و قابلیت‌های برجسته

- انگولار یکی از فریم‌ورک‌های طراحی و توسعه اپلیکیشن‌های تک صفحه‌ای یا SPA می‌باشد که قابلیت‌های زیر را در اختیار توسعه‌دهندگان می‌گذارد.

<div dir="ltr">

- **<mark>Cross Platform</mark>**

  - Progressive Web Apps (PWA) Built-in Support
  - Native Mobile Apps using Cordova, Ionic, or NativeScript
  - Desktop App for Mac, Windows, and Linux using Electron

- **<mark>Speed And Performance</mark>**

  - Code Generation that's highly optimized for today's JavaScript virtual machines
  - Angular Universal to Serve first view of your application on Node.js, .NET and PHP, Making The App SEO Optimized
  - Code Splitting & Lazy Loading, thanks to the powerful Routing & Modules implementation

- **<mark>Productivity</mark>**

  - Built-in Template Syntax to Quickly Create UI
  - Angular CLI as a All-in-One Solution
  - IDEs Support for Intelligent code completion, instant errors and ...

- **<mark>Full Development Story</mark>**

  - Unit Testing & End-to-End Testing, With Karma & Protractor, Made Easy & Fast
  - Built-in Support for high-performance and complex Animations
  - Built-in Support for Digital Accessibility Technologies

</div>

## ساختار فایل‌های Angular Workspace

<table dir="ltr" class="table table-striped">
    <colgroup>
       <col style="width: 25%;">
       <col style="width: 75%;">
    </colgroup>
    <thead class="thead-light">
        <tr>
        <th>WORKSPACE CONFIG FILES</th>
        <th>PURPOSE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><code>.editorconfig</code></td>
        <td>Configuration for code editors. See <a href="https://editorconfig.org/">EditorConfig</a>.</td>
        </tr>
        <tr>
        <td><code>.gitignore</code></td>
        <td>Specifies intentionally untracked files that <a href="https://git-scm.com/">Git</a> should ignore.</td>
        </tr>
        <tr>
        <td><code>README.md</code></td>
        <td>Introductory documentation for the root app.</td>
        </tr>
        <tr>
        <td><code>angular.json</code></td>
        <td>CLI configuration defaults for all projects in the workspace, including configuration options for build, serve, and test tools that the CLI uses, such as <a href="https://palantir.github.io/tslint/">TSLint</a>, <a href="https://karma-runner.github.io/">Karma</a>, and <a href="https://www.protractortest.org/">Protractor</a>. For details, see <a href="guide/workspace-config">Angular Workspace Configuration</a>.</td>
        </tr>
        <tr>
        <td><code>package.json</code></td>
        <td>Configures <a href="guide/npm-packages">npm package dependencies</a> that are available to all projects in the workspace. See <a href="https://docs.npmjs.com/files/package.json">npm documentation</a> for the specific format and contents of this file.</td>
        </tr>
        <tr>
        <td><code>package-lock.json</code></td>
        <td>Provides version information for all packages installed into <code>node_modules</code> by the npm client. See <a href="https://docs.npmjs.com/files/package-lock.json">npm documentation</a> for details. If you use the yarn client, this file will be <a href="https://yarnpkg.com/lang/en/docs/yarn-lock/">yarn.lock</a> instead.</td>
        </tr>
        <tr>
        <td><code>src/</code></td>
        <td>Source files for the root-level application project.</td>
        </tr>
        <tr>
        <td><code>node_modules/</code></td>
        <td>Provides <a href="guide/npm-packages">npm packages</a> to the entire workspace. Workspace-wide <code>node_modules</code> dependencies are visible to all projects.</td>
        </tr>
        <tr>
        <td><code>tsconfig.json</code></td>
        <td>The base <a href="https://www.typescriptlang.org/">TypeScript</a> configuration for projects in the workspace. All other configuration files inherit from this base file. For more information, see the <a href="https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends">Configuration inheritance with extends</a> section of the TypeScript documentation.</td>
        </tr>
        <tr>
        <td><code>tslint.json</code></td>
        <td>Default <a href="https://palantir.github.io/tslint/">TSLint</a> configuration for projects in the workspace.</td>
        </tr>
    </tbody>
</table>

## ساختار فایل‌های Angular Project

<table dir="ltr" class="table table-striped">
    <colgroup>
       <col style="width: 25%;">
       <col style="width: 75%;">
    </colgroup>
    <thead class="thead-light">
        <tr>
        <th><code>src/app/</code> FILES</th>
        <th>PURPOSE</th>
        </tr>
    </thead>
    <tbody>
    <tr>
        <td><code>app/app.component.ts</code></td>
        <td>Defines the logic for the app's root component, named <code>AppComponent</code>. The view associated with this root component becomes the root of the <a href="guide/glossary#view-hierarchy">view hierarchy</a> as you add components and services to your application.</td>
        </tr>
        <tr>
        <td><code>app/app.component.html</code></td>
        <td>Defines the HTML template associated with the root <code>AppComponent</code>.</td>
        </tr>
        <tr>
        <td><code>app/app.component.css</code></td>
        <td>Defines the base CSS stylesheet for the root <code>AppComponent</code>.</td>
        </tr>
        <tr>
        <td><code>app/app.component.spec.ts</code></td>
        <td>Defines a unit test for the root <code>AppComponent</code>.</td>
        </tr>
        <tr>
        <td><code>app/app.module.ts</code></td>
        <td>Defines the root module, named <code>AppModule</code>, that tells Angular how to assemble the application. Initially declares only the <code>AppComponent</code>. As you add more components to the app, they must be declared here.</td>
        </tr>
    </tbody>
</table>

<br />

<table dir="ltr" class="table table-striped">
    <colgroup>
       <col style="width: 25%;">
       <col style="width: 75%;">
    </colgroup>
    <thead class="thead-light">
        <tr>
        <th>APPLICATION-SPECIFIC CONFIG FILES</th>
        <th>PURPOSE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><code>.browserslistrc</code></td>
        <td>Configures sharing of target browsers and Node.js versions among various front-end tools. See <a href="https://github.com/browserslist/browserslist">Browserslist on GitHub</a> for more information.</td>
        </tr>
        <tr>
        <td><code>karma.conf.js</code></td>
        <td>Application-specific <a href="https://karma-runner.github.io/2.0/config/configuration-file.html">Karma</a> configuration.</td>
        </tr>
        <tr>
        <td><code>tsconfig.app.json</code></td>
        <td>Application-specific <a href="https://www.typescriptlang.org/">TypeScript</a> configuration, including TypeScript and Angular template compiler options. See <a href="guide/typescript-configuration">TypeScript Configuration</a> and <a href="guide/angular-compiler-options">Angular Compiler Options</a>.</td>
        </tr>
        <tr>
        <td><code>tsconfig.spec.json</code></td>
        <td><a href="https://www.typescriptlang.org/">TypeScript</a> configuration for the application tests. See <a href="guide/typescript-configuration">TypeScript Configuration</a>.</td>
        </tr>
        <tr>
        <td><code>tslint.json</code></td>
        <td>Application-specific <a href="https://palantir.github.io/tslint/">TSLint</a> configuration.</td>
        </tr>
    </tbody>
</table>

<br />
