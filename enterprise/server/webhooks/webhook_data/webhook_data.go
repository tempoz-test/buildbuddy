package webhook_data

// WebhookData represents the data required to run a workflow.
type WebhookData struct {
	// RepoURL points to the canonical repo URL containing the sources needed for the
	// workflow.
	//
	// This will be different from the workflow repo if the workflow is run on a forked
	// repo as part of a pull request.
	RepoURL string
	// SHA of the commit to be checked out.
	SHA string
}
