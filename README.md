<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arham Salman's Portfolio</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        header {
            background: #E6E6FA;
            color: #333;
            padding: 10px 0;
            text-align: center;
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        main {
            display: flex;
            margin-top: 60px;
            width: 100%;
        }
        .left-column {
            width: 30%;
            padding: 20px;
            background: #fff;
            border-right: 1px solid #ddd;
        }
        .right-column {
            width: 70%;
            padding: 20px;
        }
        h1 {
            margin: 0;
        }
        h2 {
            border-bottom: 2px solid #E6E6FA;
            padding-bottom: 5px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        ul li {
            padding: 5px 0;
        }
        footer {
            text-align: center;
            padding: 10px;
            background: #E6E6FA;
            color: #333;
            margin-top: 20px;
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
        }
        a {
            color: #E6E6FA;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .profile img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 2px solid #E6E6FA;
        }
        .profile p {
            margin-top: 10px;
            font-size: 1.2em;
            color: #555;
        }
    </style>
</head>
<body>
    <header>
        <h1>Arham Salman's Portfolio</h1>
    </header>

    <main>
        <div class="left-column">
            <section class="profile">
                <img src="assets/Screenshot 2024-12-25 165858.png" alt="Arham Salman">
                <p>Hello! I'm Arham Salman, a graduate student in Biostatistics & Data Science at UTHealth Houston. Passionate about leveraging data to drive impactful research and solutions.</p>
            </section>
        </div>

        <div class="right-column">
            <section id="education">
                <h2>Education</h2>
                <ul>
                    <li>Master of Science in Biostatistics & Data Science - UTHealth Houston (2024-2026)</li>
                    <li>Bachelor of Science in Public Health - The University of Texas at Austin (2020-2024)</li>
                </ul>
            </section>

            <section id="research">
                <h2>Research</h2>
                <ul>
                    <li>Graduate Research Assistant - McGovern Medical School</li>
                    <li>SHIFT and UTMB Summer Institute Internships</li>
                </ul>
            </section>

            <section id="projects">
                <h2>Projects</h2>
                <ul>
                    <li><a href="path/to/diabetes-dataset-analysis.zip" download>Diabetes Dataset Analysis</a></li>
                    <li><a href="path/to/health-projects.zip" download>Various health-related projects through SASE and MSA</a></li>
                </ul>
            </section>

            <section id="links">
                <h2>Links</h2>
                <ul>
                    <li><a href="https://github.com/arhamsalman" target="_blank">GitHub Profile</a></li>
                    <li><a href="https://linkedin.com/in/arhamsalman" target="_blank">LinkedIn</a></li>
                </ul>
            </section>
        </div>
    </main>

    <footer>
        <p>&copy; 2024 Arham Salman. All rights reserved.</p>
    </footer>
</body>
</html>

