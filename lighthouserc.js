const config = {
    ci: {
        assert: {
            assertions: {
                "categories:performance": ["error", {minScore: 0.4}],
                "categories:accessibility": ["error", {minScore: 0.9}],
                "categories:seo": ["error", {minScore: 0.8}],
                "categories:best-practices": ["error", {minScore: 0.9}],
                "categories:pwa": "off",
            },
        },
    },
}

module.exports = config
